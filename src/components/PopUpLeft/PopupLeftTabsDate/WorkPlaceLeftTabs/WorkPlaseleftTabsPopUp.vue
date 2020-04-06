<template>
   <v-dialog v-model="dialog"    max-width="1050px"   transition="dialog-bottom-transition">


        <template v-slot:activator="{ on }">
          <v-btn outlined color="pink" dark v-on="on" width="475px" height="32px">Աշխատավայր</v-btn>
        </template>

<v-card>
        <v-toolbar  dark color="pink" height="23px">
          
          <v-toolbar-title class="caption">Անձի որոնում</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> <v-icon>save</v-icon></v-btn>
            <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-toolbar-items>
        </v-toolbar>
<workPlaceMenu/>
<hr class="green"/>
<TablePopUpWorkPlace/>
</v-card>
   </v-dialog>
</template>
<script>
import workPlaceMenu from '../WorkPlaceLeftTabs/workPlaceMenu'
import TablePopUpWorkPlace from '../WorkPlaceLeftTabs/TablePopUpWorkPlace'
export default {
name:'WorkPlaseleftTabsPopUp',

components:{
   workPlaceMenu,
   TablePopUpWorkPlace
},

data() {
    return {
        dialog: false,
        
    }
},
}
</script>

<style>
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>