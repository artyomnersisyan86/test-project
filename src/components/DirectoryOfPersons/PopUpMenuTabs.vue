<template>
   <v-card >
   <v-tabs  background-color="pink lighten-2"  color="pink" dark hide-slider height="23px">
          <v-tabs-slider></v-tabs-slider>
          <v-tab :key="tab1 " class="mx-2 caption text-capitalize" >Հիմնական</v-tab>
          <v-tab :key="tab2" class=" caption text-capitalize  ">Որոնում</v-tab>
          <v-tab-item key="tab1"><PopUpMenuTabsBasic></PopUpMenuTabsBasic> </v-tab-item>
          <v-tab-item key="tab2">
            <SearchPopUpTabsMenu></SearchPopUpTabsMenu>
          </v-tab-item>
        </v-tabs>
   </v-card>
</template>
<script>
import SearchPopUpTabsMenu from '../DirectoryOfPersons/SearchPopUpTabsMenu'
import PopUpMenuTabsBasic from "../DirectoryOfPersons/PopUpMenuTabsBasic"
export default {
name:'PopUpMenuTabs',
props:['myGetCustomerData'],
components:{
PopUpMenuTabsBasic,
SearchPopUpTabsMenu
},
data() {
    return {
        tab1:null,
        tab2:null,
      items3: ["Ապահովադրի", "Վարորդի (BM01)"],
    }
},
}
</script>
