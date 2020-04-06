<template>
<div>
<v-container fluid pa-0  mt-0 pl-2 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"
>
<div   
 v-if="myGetCustomerData.PERSON===3||myGetCustomerData.PERSON===4"
>
<v-row no-gutters  >
    <v-col cols="12"  md="12" sm="12" xs="4">
      
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
 <!-- @click="allFunc" -->
      <v-expansion-panel >
         
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" v-if="myGetCustomerData.PERSON===3">Ֆիզիկական անձի տվյալներ  </v-expansion-panel-header>
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" v-if="myGetCustomerData.PERSON===4">Ֆիզիկական անձի տվյալներ և անհատ ձեռներեց </v-expansion-panel-header>
        
        <!-- <v-expansion-panel-header ripple class="grey lighten-2 pink--text" v-else> Իրավաբանկան անձի տվյալներ  </v-expansion-panel-header> -->
       
        <v-expansion-panel-content>
  <v-container fluid pa-0 >
<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">



               <v-form 
                @submit.prevent >
    <v-text-field
  color="pink"
   class="body- centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Անուն"
            
            v-model="myGetCustomerData.NAME_A"
            
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
   class="body-2 centered-input text-capitalize"
  
   height="32"
            dense
   label="Ազգանուն"
            placeholder=""
            outlined
            v-model="myGetCustomerData.SNAME_A"

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
   class="body-2  centered-input text-capitalize"
   height="32"
            v-model="myGetCustomerData.FNAME_A"
            dense
            label="Հայրանուն"
            outlined
     ></v-text-field>
      </v-form>
    </v-col>
</v-row>
<LeftTbasGender :gendersData="genders"/>
<AddBirtDeathdayLeftTabs  />
<EmailBloodGroupsleftTabs/>
<IndividualEntrepreneur v-if="myGetCustomerData.PERSON===4"/>
            </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
    </v-col>
</v-row>
<LeftTabsExpensions></LeftTabsExpensions>
<IDCardPasport/>
<Employee/>
<WorkPlaceLeftTabs/>

</div>
<div v-else>
  <LegalEntity/>
</div>

</v-container>
</div>
</template>

<script>
import IndividualEntrepreneur from "./individualEntrepreneur/IndividualEntrepreneur"
import LeftTbasGender from "./LeftTbasGender"
import AddBirtDeathdayLeftTabs from "./AddBirtDeathdayLeftTabs" 
import EmailBloodGroupsleftTabs from "./EmailBloodGroupsleftTabs"
import LeftTabsExpensions from './LeftTabsExpensions'
import IDCardPasport from './IDCardPasport'
import Employee from './Employee'
import WorkPlaceLeftTabs from './WorkPlaceLeftTabs/WorkPlaceLeftTabs'
import LegalEntity from './legalEntity/LegalEntity'




export default {
  // props:['getCustomerData1'],
components:{
  IndividualEntrepreneur,
LeftTbasGender,
AddBirtDeathdayLeftTabs,
EmailBloodGroupsleftTabs,
LeftTabsExpensions,
IDCardPasport,
Employee,
WorkPlaceLeftTabs,
LegalEntity


},
data() {
  return {
   
genders:[],


  url: {
                // gender data
                getGenderData: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=SEX", 

                // Արայն խմբեր լրացված է EmailBloodGroupsleftTabs.vue
             bloodType:  "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=BLODETYPE",
            },

  }
},
computed:{
    customerFunction(){
return this.$store.state.getCustomerData
    },
//     genders(){
// return this.$store.state.genders
//     }
},
mounted () {
  this.getGendersMethod();
    this.getbloodTypeFunc();
   
},
methods: {
  // allFunc(){
   
  // },
getGendersMethod() {
     
            this.axios
                .get(this.url.getGenderData, {
                       
                    },)
                .then(responce => {
                    console.log(responce.data);
                   this.genders = responce.data.data;
                    console.log(this.genders)
                })
                .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
    

},

// ----------------------
getbloodTypeFunc() {
     
            this.axios
                .get(this.url.bloodType, {
                       
                    },)
                .then(responce => {
                    console.log(responce.data);
                  this.$store.state.bloodType = responce.data.data;
                    console.log(this.$store.state.bloodType)
                })
                .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
    

},
// ---------------------

}
    

}
</script>

<style>
           
       /* .mylabel label.v-label.theme--light{ */
   /* font-style:italic; */
   /* font-size: 13px */
/* } */
.centered-input input {
  text-align: center;
  color:green !important;
  /* text-transform: capitalize !important; */
}

</style>
