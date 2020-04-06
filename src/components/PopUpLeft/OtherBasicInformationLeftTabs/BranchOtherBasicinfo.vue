<template>
  <div>
    
<v-container fluid pa-0   v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id">
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">

         <v-form 
                @submit.prevent >
  <v-select
 
 color="pink lighten-2"
v-model="myGetCustomerData.BRANCH"
          :items="BRANCH"
          label="Մասնաճյուղ"
             item-text="NAME_A"
                       item-value="BID" 
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-select>
<!-- <v-autocomplete color="pink lighten-2" 
          label="Մասնաճյուղ"

                    v-model="branch"
                     :items="branch"
                      item-text="branch"
                       item-value="branch" 
                      dense menu-props="auto" 
                     outlined height="32" class="caption pt-2"></v-autocomplete> -->
</v-form>
</v-col>
  </v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">

         <v-form 
                @submit.prevent >
  <v-select
 
 color="pink lighten-2"
v-model="myGetCustomerData.FULLKIND"
          :items="fillingAccuracy"
         item-text="NAME_A"
                       item-value="NUMID" 
          label="Լրացման ճշտություն"
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-select>

</v-form>
</v-col>

</v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
            <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
   class="body-2  centered-input"
   height="32"
   dense
            label="Արտոնագրի համար"
            value="լրացված չէ !!!!!!!!!!!"
            outlined
     ></v-text-field>
      </v-form>
    </v-col>
  </v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">

             <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
   
   class="body-2  centered-input "
   height="32"
            value="լրացված չէ !!!!!!!!!!!"

            label="Առկա է նույն անուն անձ"
            outlined
            dense
     ></v-text-field>
      </v-form>
    </v-col>
</v-row>

<BranchDatePicer/>


</v-container>
  </div>


</template>

<script>
import BranchDatePicer from '../OtherBasicInformationLeftTabs/BranchDatePicer'
import {mapActions,mapGetters} from 'vuex'

export default {
name:'BranchOtherBasicinfo',
components:{
    BranchDatePicer
},
data() {
    return {
     
        selected:"լրացված չէ"
// "data": [
//         {
//             "NAME_A": "Տիպ",
//             "CHARID": null,
//             "NUMID": -1,
//             "SUBSYS": null
//         },
// ]


    }
},
methods: {
  ...mapActions([
    'GET_BANCH_LIST'
  ])
},
mounted() {
  this.GET_BANCH_LIST();
},
computed:{
...mapGetters([
  'BRANCH'
]),
// Լրացման ճշտություն "Անձի լրացման տեսակ API" լրացված է BranchOtherBasicinfo.vue
    fillingAccuracy(){
return this.$store.state.fillingAccuracy
    },

        // գտնվում են DataTable222 getCustomerDataMethod -ի մեջ

    customerFunction(){
return this.$store.state.getCustomerData
  
    }

}
}
</script>

<style>

</style>