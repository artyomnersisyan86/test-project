<template>

<div >
  <!-- <v-container fluid pa-0 mt-0>
<v-row no-gutters class="mr-0">
     <v-col cols="12" md="12" sm="6" xs="6"> -->
       <!-- :fullscreen="!fullscreen" -->
<!-- :fullscreen="$vuetify.breakpoint.xsOnly" -->
  
  <v-dialog v-model="dialog" persistent 
  
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"

  max-width="1200px"  transition="dialog-bottom-transition">
    <!-- <template v-slot:activator="{ on }">
      <v-btn color="deep-purple"    dark v-on="on">Ֆիզիկական անձ {{myGetData.SNAME_A}}</v-btn>
    </template> -->

    <!-- <v-card v-for="myGetData in getCustomerData.CUSTOMER" v-bind:key="myGetData.id"> -->

      <v-card   >
         <v-container fluid pa-0 >
<v-row no-gutters >
     <v-col cols="12" md="12" sm="12" xs="12">
      <v-toolbar fixed dark color="pink"  height="23px">
       
        
        <v-toolbar-title class="caption text--center" ><span class="justify-center"> {{myGetCustomerData.NAME_A}} {{myGetCustomerData.SNAME_A}} </span></v-toolbar-title>
        <!-- <v-toolbar-title class="caption text--center"  v-else>Իրավաբանկան անձի խմբագրում - {{myGetCustomerData.NAME_A}} {{myGetCustomerData.SNAME_A}} </v-toolbar-title> -->
      
      
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn  dark text @click="!fullscreen"><v-icon>save</v-icon></v-btn>
           <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        </v-toolbar-items>
      </v-toolbar>

     </v-col>
</v-row>
   <v-row no-gutters >
     <v-col cols="12" md="12" sm="12" xs="12">
      <PopUpMenuTabs />
     </v-col>
   </v-row>
      <!-- <hr class="light-green" /> -->
 <v-row no-gutters >
     <v-col cols="12" md="12" sm="12" xs="6">
      <PopUpLeftTabs />
     </v-col>
 </v-row>
  <!-- <verticalTabs></verticalTabs> -->

 
 </v-container>
    </v-card>

  </v-dialog>
  <!-- </v-col>
</v-row> -->


  <!-- </v-container> -->
</div>
</template> 
<script>
import PopUpMenuTabs from "../DirectoryOfPersons/PopUpMenuTabs";
import PopUpLeftTabs from "../DirectoryOfPersons/../PopUpLeft/PopUpLeftTabs";
// import verticalTabs from "../PopUpLeft/verticalTabs/verticalTabs"
import {eventEmitter} from './../../main' 
 
 export default {
  components: {
    PopUpMenuTabs,
    PopUpLeftTabs,
    // verticalTabs
  },
  // props:["getCustomerData"],
  

  data() {
    return {
       dialog: false,
      tab: null,
      fullscreen:true
// myGetCustomerData:[]


 
    };
  },
  
  created(){
    eventEmitter.$on('dialogOpened', ()=>{

      this.dialog=true
      // return this.myGetCustomerData=getCustomerData

    })
  },
  computed:{
    customerFunction(){
return this.$store.state.getCustomerData
    }
  },

   
};
</script>

<style scoped>
/* .basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
} */

</style>