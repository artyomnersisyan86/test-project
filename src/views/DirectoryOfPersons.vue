<template>
    <v-container fluid pa-0>
        <v-row no-gutters>
            <v-tabs v-model="active_tab" background-color="pink lighten-3 " color="pink" dark hide-slider height="32px">
                <v-tabs-slider></v-tabs-slider>
                <v-tab v-for="(tab, tabIndex) in tabs" :key="tabIndex" :class="tab.class">{{tab.label}}</v-tab>
                <v-tab-item key="tab1"><BasicTabsDirOfPersons></BasicTabsDirOfPersons></v-tab-item>
                <v-tab-item key="tab2">
                <v-container fluid pa-1 pt-2 pb-2>
                    <v-row no-gutters>
                        <v-col :class="{'pl-5':colIndex>1}" v-for="colIndex in parseInt((filters.length-1)/3+1)" :key="colIndex">
                            <div :class="filter.class" v-for="(filter, filterIndex) in filters.slice(parseInt(colIndex*3)-3, parseInt(colIndex*3))" :key="filterIndex">
                                <v-btn v-if="filter.fType == 'button'" color="pink" width="200" outlined dark
                                       class="text-capitalize caption justify-start" height="32"
                                       @click="getDataMethod">
                                    <v-icon class="text-left" color="dark" size="24" left>{{filter.icon}}</v-icon>
                                    <span style="margin: 0 auto;" class="text-center">{{filter.label}}</span>
                                </v-btn>
                                <v-menu offset-y v-if="filter.fType == 'select'">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start text-center" height="32" outlined dark v-on="on">
                                            <v-icon size="24" left color="dark">{{filter.icon}}</v-icon>
                                            <span style="margin: 0 auto;" class="text-center">{{filter.label}}</span>
                                            <div><v-icon right size="24">arrow_drop_down</v-icon></div>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item class="" v-for="(item, index) in filter.list" :key="index" router :to="item.route">
                                            <v-list-item-title class=" caption p-0">{{item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                                <v-form v-if="filter.fType == 'autocomplete'">
                                    <v-autocomplete color="pink lighten-2" item-color="green" :label="filter.label"
                                                    v-model="filter.model" prepend-inner-icon="done_all"
                                                    success clearable :value="filter.fModel"
                                                    :items="filter.items"
                                                    item-text="NAME_A" item-value="filter.model"
                                                    dense menu-props="auto" outlined height="32"
                                                    class="caption selectLabel"></v-autocomplete>
                                </v-form>
                                <div style="width: 200px;">
                                    <v-form width="200" v-if="filter.fType == 'text-field'" @submit.prevent>
                                        <v-text-field outlined :label="filter.label" width="200" height="32" success
                                                      dense v-model="filter.fModel" :value="filter.fModel"
                                                      class="caption mylabel justify-start"
                                                      :prepend-inner-icon="filter.icon"
                                                      v-on:keyup.enter="getDataMethod()"></v-text-field>
                                    </v-form>
                                </div>
                            </div>
                        </v-col>
                        <v-col>
                        <Vbutton label="newButton"  class="pl-2" icon="edit"
                                 @click="getDataMethod"></Vbutton>

                        <Vinput v-model="model" class="pt-2 pl-2" ></Vinput>
                        <p>{{model}}</p>
                        </v-col>
                    </v-row>

                    <div>
                        <DirectoryOfPersonsPopup/>
                    </div>
                </v-container>
            </v-tab-item>
            </v-tabs>
        </v-row>
        <Datatable222></Datatable222>
    </v-container>
</template>
<script src="../components/DirectoryOfPersons/DirectoryOfPersonsScript.js">

</script>
<style src="../components/DirectoryOfPersons/DirectoryOfPersonsStyle.css">

</style>
