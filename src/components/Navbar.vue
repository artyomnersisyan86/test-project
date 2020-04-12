<template>
    <v-container fluid pa-0>
        <v-row no-gutters>
            <v-col cols="12" md="12" sm="12" xs="12">
                <v-navigation-drawer app
                                     v-model="drawer"
                                     color="pink"
                                     temporary>
                    <v-btn text dark @click="logOut">
                        <v-icon left>people</v-icon>
                        <span class="white--text caption text-capitalize">Ելք</span>
                    </v-btn>
                </v-navigation-drawer>
                <v-app-bar flat app color="pink" class=" white--text pa-0 " height="32">
                    <v-toolbar-items>
                        <v-menu v-for="(tab, t_index) in tabs" :key="t_index" offset-y z-index="4" nudge-top=4>
                            <template v-slot:activator="{ on }">
                                <v-btn text color="pink" v-on="on" transition="scale-transition"
                                       class="text-capitalize caption ">
                                    <span class="white--text">{{tab.title}}</span>
                                    <v-icon class="white--text " right>arrow_drop_down</v-icon>
                                </v-btn>
                            </template>
                            <v-list text class="pink">
                                <v-list-item v-for="(item, index)  in tab.selects" :key="index" router :to="item.route"
                                             @click="addItem(item)">
                                    <v-list-item-title class="white--text caption">{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-toolbar-items>
                    <v-spacer></v-spacer>
                    <v-btn text dark @click="logOut">
                        <v-icon left>people</v-icon>
                        <span class="white--text caption text-capitalize">Ելք</span>
                    </v-btn>
                </v-app-bar>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <DynamicTabs></DynamicTabs>
        </v-row>
        <v-row no-gutters>
            <div class="footer">
                <p class="pt-1 caption">Nairi Insurance</p>
            </div>
        </v-row>
        <router-view></router-view>
    </v-container>
</template>
<script src="./NavbarComponents/NavbarScript.js">

</script>
<style>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #8BC34A;
        color: white;
        text-align: center;
        height: 32px;
    }
</style>
