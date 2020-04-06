<template>
<!-- <v-container fluid pa-1> -->
    <!-- <v-row> -->
        <!-- <v-col> -->
<div >

    <v-container fluid pa-1 >   
        <v-row no-gutters class="pa-0">
<v-col >
            <div>
                <v-btn color="pink" width="200" height="32" outlined class="text-capitalize caption justify-start " dark>
                    <v-icon class="text-left" color="dark" size="24" left>mdi-autorenew</v-icon>

                    <span class="pl-9">Նորացնել</span>
                </v-btn>
            </div>
            <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">description</v-icon>

                            <span class="pl-9 pr-3">Փաստաթղթեր</span>
                            <v-icon right>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">description</v-icon>

                            <span class="pa-0">Խմբային փաստաթղթեր</span>
                            <v-icon>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

</v-col>
<v-col class="pl-5">
        
            <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">description</v-icon>

                            <span class="pl-9 pr-3">Ձևաթղթեր</span>
                            <v-icon right>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">description</v-icon>

                            <span>Հաշվետվություններ</span>
                            <v-icon right>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">description</v-icon>

                            <span>Հաշվետվություններ</span>
                            <v-icon right>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

        </v-col>
        
<v-col  class="pl-5">
                <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">filter_list</v-icon>

                            <span class="pl-9 pr-8">Ֆիլտրներ</span>
                            <v-icon right>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">import_export
                            </v-icon>

                            <span class="pl-9 pr-3">Արտահանում</span>
                            <v-icon right>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div>
                <v-menu offset-y disabled>
                    <template v-slot:activator="{ on }">
                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                            <v-icon size="24" left color="dark">history</v-icon>

                            <span class="pl-9 pr-3">Պատմություն</span>
                            <v-icon right>arrow_drop_down</v-icon>

                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="pink" v-for="(item, index) in items" :key="index" router :to="item.route">
                            <!--route to nodal -->
                            <v-list-item-title class="white--text caption p-0">{{item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
</v-col>
        </v-row>
    </v-container>
            </div>
        <!-- </v-c>
    </v-row> -->
<!-- </v-container> -->
</template>

<script>
export default {
    name: 'BasicTabsDirOfPersons',
    data() {
        return {
            items: [],
        }
    },

}
</script>

<style>

</style>
