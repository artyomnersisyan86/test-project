<template>
  
<div>
   <v-container fluid pa-0 mt-0 pl-2
   
   >
<v-row no-gutters>
    <v-col cols="12"  md="12" sm="12" xs="4">
      
<v-expansion-panels :popout="false"  :focusable="true"  
  :hover="true" 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"
>
      <v-expansion-panel  >
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" > <span > Այլ հիմնական տվյալներ </span></v-expansion-panel-header>
        <v-expansion-panel-content>
<v-container fluid pa-0 >



<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
        <v-form 
                @submit.prevent >
    <v-text-field
    v-model="myGetCustomerData.FULLNAME"
   color="pink"
   class="body-2  centered-input"
   height="32px"
   dense
            label="Անուն ազգանուն"
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
    v-model="myGetCustomerData.CUSTOMER"
   color="pink"
   class="body-2  centered-input"
   height="32px"
   dense
            label="Կոդ"
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
    v-model="myGetCustomerData.EXTNUM"

   color="pink"
   class="body-2  centered-input"
   height="32px"
            label="Ներքին համար"
            dense
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
    v-model="myGetCustomerData.NEWCUST"
    
   color="pink"
   class="body-2  centered-input"
   height="32"
            label="Նոր կոդ"
            outlined
            dense
     ></v-text-field>
      </v-form>

    </v-col>
</v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">

 <v-form 
                @submit.prevent >

                    <v-autocomplete color="pink lighten-2" v-model="myGetCustomerData.PERSON"
                     :items="personType"
                      item-text="NAME_A"
                       item-value="NUMID"   
                   label="Անձի տեսակ"
                      dense menu-props="auto" 
                     outlined height="32" class="body-2  centered-input ">
                     </v-autocomplete>
                </v-form>
 </v-col> 
  </v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
<!-- v-model="docs.DCOUNTRY" -->
 <v-form 
                @submit.prevent >

                    <v-autocomplete color="pink lighten-2" 
                    v-model="myGetCustomerData.COUNTRY"
                     :items="GETCOUNTRY"
                      item-text="NAME_A"
                       item-value="ALPHA3" 
                     value="NUMID" 
                     label="Հաշվառման երկիր"
                      dense menu-props="auto" 
                     outlined height="32" class="body-2  centered-input "></v-autocomplete>
                </v-form>
    </v-col>
 
</v-row>
<v-row no-gutters justify="center" class="pt-2" 
       v-for="addresses in getCUSTADDRES" :key="addresses.ID" >
      <v-col cols="12"  md="8" sm="12" xs="12">
 <v-form 
                @submit.prevent >
    <v-text-field
    v-model="myGetCustomerData.ADDRESS_A"

   color="pink"
   class="body-2  centered-input"
   height="32"
   dense 
            label="Հաշվառման հասցե"
            outlined
     ></v-text-field>
      </v-form>
    </v-col>
              <v-col cols="12"  md="8" sm="12" xs="12" class="pt-2">
 <v-form 
                @submit.prevent >
    <!-- <v-text-field
v-model="addresses.KIND"
:value="addresses.KIND"
   color="pink"
   class="caption"
   height="32"
          dense
            label="Բնակվում է"
            outlined
     ></v-text-field> -->
<v-autocomplete
color="pink lighten-2"
v-model="addresses.ADRSKKIND"
          :items="getLives"
          item-text="NAME_A"
          item-value="NUMID"
          label="Բնակության հասցեն"
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-autocomplete>

      </v-form>

    </v-col>
</v-row>
<BranchOtherBasicinfo/>

 
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">

 <v-form 
                @submit.prevent >
            <v-checkbox v-model="myGetCustomerData.ISTWOCTRY" color="pink lighten-2"
             label="Երկքաղաքացիություն"
             :value="myGetCustomerData.ISTWOCTRY"></v-checkbox>
          </v-form>

 <v-form 
                @submit.prevent >
              <v-autocomplete color="pink lighten-2" 
v-if="myGetCustomerData.ISTWOCTRY"
                    v-model="myGetCustomerData.COUNTRY"
                     :items="GETCOUNTRY"
                      item-text="NAME_A"
                       item-value="ALPHA3" 
                     label="Հաշվառման երկիր"
                 
                      dense menu-props="auto" 
                     outlined height="32" class="body-2  centered-input pt-2"></v-autocomplete>
                </v-form>



    </v-col>
</v-row>
</v-container>

      </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-col>
</v-row>

   </v-container>
   </div>


</template>

<script>
import {mapGetters} from 'vuex'

import BranchOtherBasicinfo from '../OtherBasicInformationLeftTabs/BranchOtherBasicinfo'

export default {
name:'OtherBasicInformation',
components:{
    BranchOtherBasicinfo
},
data() {
    return {



// Անձանց տեսակներ	
// "data": [
//         {
//             "NAME_A": "Տիպ",
//             "CHARID": null,
//             "NUMID": -1,
//             "SUBSYS": null
//         },
// ]




        // personType:[],
         registrationOfCountry:[],
         dualCitizenship:[]
    }
},

        // գտնվում են DataTable222 getCustomerDataMethod -ի մեջ
computed:{
 ...mapGetters([
    'GETCOUNTRY'
  ]),

        getCUSTADDRES(){
return this.$store.state.CUSTADDRES
    },

    customerFunction(){
return this.$store.state.getCustomerData
    },


// գրանցման տեսակ getLivesFunc() call
   
getLives(){
  return this.$store.state.getLives
},


     personType(){
return this.$store.state.personType
    },


    // Պետությունների տեսակ call PopupLeftTabs

//      getCountryData(){
// return this.$store.state.getCountry
//     },
  },


methods: {

  // allgetPersonTypeFunc(){
  //   this.getPersonTypeFunc()
  // },
  
        // Անձանց տեսակներ լրացված է OtherBasicInformation.vue

// getPersonTypeFunc() {
     
//             this.axios
//                 .get(this.url.personType, {
                       
//                     },)
//                 .then(responce => {
//                     console.log(responce.data);
//                   this.$store.state.personType = responce.data.data;
//                     console.log(this.$store.state.personType)
//                 })
//                 .catch(function (error) {
//                     alert("կապի խափանում");
//                     console.log(error);
//                 });
    

// },
},


}
</script>

<style>

</style>