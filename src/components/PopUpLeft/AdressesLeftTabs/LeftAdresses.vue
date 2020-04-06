<template>
  <v-container fluid  pa-0 >
    <v-row  no-gutters>
<v-col cols="12" >
     <!-- :COUNTRY="addresses.COUNTRY" -->
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true"    >
      <v-expansion-panel 
       v-for="addresses in getCUSTADDRES" :key="addresses.ID" 
       >
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" 
      @click="address(addresses.COUNTRY,addresses.REGION)"
        
        >Գրանցման տվյալներ</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid  pa-0>
  
       
      
<!-- State Պետություն -->
  

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
        <v-form 
                @submit.prevent >
                    <v-autocomplete color="pink lighten-2" 

                    v-model="addresses.COUNTRY"
            
                     :items="GETCOUNTRY"
                      item-text="NAME_A"  
                       item-value="ALPHA3" 
                     label="Հաշվառման երկիր"
                      dense menu-props="auto" 
                     outlined height="32"
                      class="body-2  centered-input "></v-autocomplete>
                     </v-form>
     
      </v-col>

<!-- Մարզ Region-->

        </v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
          <v-form 
                @submit.prevent >
        <v-autocomplete
 color="pink"
                    v-model="addresses.REGION"
:value="REGION"
          :items="getRegionArm"
       
        item-text="NAME_A"
         item-value="REGION" 
            label="Մարզ"
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-autocomplete>
        </v-form>
      </v-col>
       </v-row>

<!-- residence  Բնակավայր-->


<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
  <v-form 
                @submit.prevent >
        <v-autocomplete
  color="pink"

                    v-model="addresses.CITY"

          :items="getYerReg"
               item-text="NAME_A"
         item-value="DCHARID" 
          label="Բնակավայր"
       
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-autocomplete>
          </v-form>
      </v-col>
       
       <!-- Street Փողոց -->
     </v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
       
    <!-- <v-autocomplete
  color="pink"

                    v-model="addresses.STREET_A"

          :items="getStreet"
               item-text="STREET"
         item-value="SCHARID" 
      
          label="Փողոց"
       
          dense
          outlined
           filled
         height="32"
           class="caption"
        ></v-autocomplete> -->
        <v-form 
                @submit.prevent >
        <v-text-field  
         dense
         color="pink "
             height="32"
          outlined
          label="Փողոց"
         class="body-2  centered-input"
                    v-model="addresses.STREET_A"
                    value="STREET"
        >

        </v-text-field>

 </v-form>
      </v-col>
    </v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
 <v-form 
                @submit.prevent >
        <v-autocomplete
  color="pink"


          :items="type"
          label="Տիպ"
          
          dense
          outlined
           filled
         height="32"

           class="body-2  centered-input"
        ></v-autocomplete>
        </v-form>
      </v-col>
   </v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
            <v-form 
                @submit.prevent >
    <v-text-field
    v-model="addresses.Build"
   color="pink"
      class="body-2  centered-input"
         filled
         height="32"
dense
           
            label="Շենք"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
 </v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
            <v-form 
                @submit.prevent >
    <v-text-field
    v-model="addresses.AptNum"

   color="pink"

      class="body-2  centered-input"
      height="32"
            dense
            label="Բնակարան"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
      </v-row>
</v-container>
<AdresesLeftAdresses/>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import AdresesLeftAdresses from './AdresesLeftAdresses'
import {mapGetters} from 'vuex'

export default {

    name:'LeftAdresses',
components: {
  AdresesLeftAdresses
},
    data() {
        return {
COUNTRY:'',
REGION:'',

url: {

           //  Մարզերի ցուցակ "Ռեգիոնների ցուցակ API" լրացված է LeftAdresses.vue ?COUNTRY=ARM
               getRegionArm: "http://192.168.100.153:8000/country/get-region-list/",

                // ?COUNTRY=ARM&REGION=YR
             getYerReg:  "http://192.168.100.153:8000/country/get-district-list/",



          // url:{

            // // ?COUNTRY=ARM&REGION=YR
            //  getYerReg:  "http://192.168.100.153:8000/country/get-district-list/",

// // COUNTRY=ARM

//                getRegionArm: "http://192.168.100.153:8000/country/get-region-list/",


          },

// Մարզեր "Ռեգիոնների ցուցակ"
//  "data": [
//         {
//             "REGION": "AG",
//             "COUNTRY": "ARM",
//             "NAME_A": "Արագածոտն",
//             "NAME_E": "",
//             "NAME_R": ""
//         },
//  ] ,

// 


// Ռայոնների ցուցակ Erevani
//  "data": [
//         {
//             "COUNTRY": "ARM",
//             "DCHARID": "YR01",
//             "DNUMID": "01 001 00",
//             "REGION": "YR",
//             "CATEGORY": 5,
//             "NAME_A": "Աջափնյակ",
//             "NAME_E": null,
//             "NAME_R": "",
//             "LAT": null,
//             "LON": null,
//             "ISFRONTIER": 0,
//             "TIMEZON": "",
//             "MAPLINK": "https://www.google.com/maps/place/Ajapniak,+Yerevan,+Armenia/@40.1920854,44.4739016,12z/data=!4m2!3m1!1s0x406a97c8bbed64dd:0x77966804a1a6a64c"
//         },
//  ],


// Փողոցները ցուցակ
  //  "data": [
  //       {
  //           "ID": 8330,
  //           "DCHARID": "YR03",
  //           "STREET": "Ադոնցի փող.",
  //           "SCHARID": "YR03x1"
  //       },
  //  ],



                 state:[],
                 region:[],
                 residence:[],
                 type:[],



 
        }
    },
    computed:{
       ...mapGetters([
    'GETCOUNTRY'
  ]),


// getCustomerData.js -ից եկած տվյալներ

        getCUSTADDRES(){
return this.$store.state.CUSTADDRES
    },

//         // գտնվում են DataTable222 getCustomerDataMethod -ի մեջ

//     customerFunction(){
// return this.$store.state.getCustomerData
//     },
   // Պետությունների տեսակ call PopupLeftTabs

//      getCountryData(){
// return this.$store.state.getCountry
//     },

        // գտնվում են DataTable222 getCustomerDataMethod -ի մեջ getRegionArmFunc()

       getRegionArm(){
return this.$store.state.getRegionArm
    },


 //     գտնվում են DataTable222  մեջ getYerRegFunc() մեջ 
      
getYerReg(){
  return this.$store.state.getYerReg
},

 //     գտնվում են DataTable222 getStreetFunc() մեջ 

getStreet(){
  return this.$store.state.getStreet
}


    },
    methods: {

address(COUNTRY,REGION){
this.getRegionArmFunc(COUNTRY);
this.getYerRegFunc(COUNTRY,REGION) ;
},


  getYerRegFunc(COUNTRY,REGION) {
     
            this.axios
                .get(this.url. getYerReg,{
                  params:{
                    COUNTRY,
                    REGION,
                  }
                }  )
                .then(responce => {
                    // console.log(responce.data);
                  this.$store.state.  getYerReg= responce.data.data;
                    console.log(this.$store.state. getYerReg)
                     }) .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });

},

getRegionArmFunc(COUNTRY) {
     
            this.axios
                .get(this.url.getRegionArm, {
params:{
  COUNTRY
}

                })
                .then(responce => {
                    // console.log(responce.data);
                  this.$store.state. getRegionArm= responce.data.data;
                    console.log(this.$store.state.getRegionArm)
                     }) .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });

},





      getYerRegFunc1() {
     
            this.axios
                .get(this.url. getYerReg,{
                  params:{
                    COUNTRY:this.COUNTRY,
REGION:this.REGION,
                  }
                }  )
                .then(responce => {
                    // console.log(responce.data);
                  this.$store.state.  getYerReg= responce.data.data;
                    console.log(this.$store.state. getYerReg)
                     }) .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });

},




    },

}
</script>

<style>

</style>