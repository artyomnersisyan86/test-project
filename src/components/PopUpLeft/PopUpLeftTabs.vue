<template>
<!-- <v-container fluid pa-0 pt-2 >
<v-row no-gutters="">
    <v-col cols="12" md-8 mx-3 > -->
<!-- v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"  -->
      <div>
       <v-container fluid pa-0 pt-2 >
<v-row no-gutters=""


>
    <v-tabs  vertical background-color="grey lighten-4"
     active-class="pink lighten-2"
     color="white"  hide-slider

    >

<div>
    <!-- :COUNTRY="addresses.COUNTRY"
  :REGION="addresses.REGION"
   v-for="addresses in getCUSTADDRES" :key="addresses.ID"


> -->
      <v-tab :key="tab1"  class="text-capitalize caption">
        <!-- <v-icon left small>mdi-account</v-icon> -->
        Տվյալներ
      </v-tab>
      <v-tab :key="tab2" class="text-capitalize caption">
                  <!-- <v-icon left small >list_alt</v-icon> -->
                   անձնական փաստաթղթեր

      </v-tab>

<!--
      @click="address(addresses.COUNTRY,addresses.REGION)"


-->

      <v-tab :key="tab3"
         class="text-capitalize caption">
                  <v-icon left small ></v-icon>Հասցեներ

      </v-tab>

       <v-tab :key="PhoneleftTabs"  class="text-capitalize caption">
                  <!-- <v-icon left small >phone</v-icon> -->
                  Հեռախոսներ

      </v-tab>
      <!--BankAccounts բանկային հաշիվներ  -->
      <v-tab :key="BankAccounts" class="text-capitalize caption">
                  <v-icon left small ></v-icon>բանկային հաշիվներ

      </v-tab>
      <!-- Կապակցված անձիք  affiliatedPerson:-->

<v-tab :key="affiliatedPerson" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Կապակցված անձիք

      </v-tab>

 <!--  Դասակարգումներ Classifications:-->

<v-tab :key="classifications" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Դասակարգումներ

      </v-tab>

<!-- Այլ որոշիչներ Otherdeterminants -->

<v-tab :key="otherdeterminants" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Այլ որոշիչներ

      </v-tab>


<!-- Կցվող փաստաթղթերր AttachmentDocument -->

<v-tab :key="attachmentDocument" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Կցվող փաստաթղթեր

      </v-tab>
<!-- Նույնանուն անձ  PersonSameName-->

<v-tab :key="personSameName" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Նույնանուն անձ

      </v-tab>
<!-- BMClasses ԲՄ Դասեր -->


<v-tab :key="personSameName" class="text-capitalize caption">
                  <v-icon left small ></v-icon>ԲՄ Դասեր

      </v-tab>

<!-- Questionnaire Հարցաշար -->


<v-tab :key="questionnaire" class="text-capitalize caption">
                  <v-icon left small ></v-icon>Հարցաշար

      </v-tab>

</div>


      <v-tab-item key="tab1">


  <PopupLeftTabsDate></PopupLeftTabsDate>
 <!-- <LeftTabsExpensions/> -->
<!-- <LeftTbasGender/> -->
<!-- <AddBirtDeathdayLeftTabs/> -->

<!-- <EmailBloodGroupsleftTabs/> -->
<!-- <IDCardPasport/> -->
<!-- <Employee/> -->
<!-- <WorkPlaceLeftTabs/> -->
  <!-- Exp Panel for English and Russia -->

<!-- ------------------------------- -->
<!-- gender citizenship place of birth:etc.  սեռ քաղաքացիությունծննդավայր և այլն    -->


  <OtherBasicInformation/>


      </v-tab-item>

<!-- Անձնական փաստաթղթեր Personal documents -->

      <v-tab-item key="tab2">

<PersonalDocuments/>

      </v-tab-item>

<!-- ////////////////// -->
<!-- AdresseLeftTabs Հասցեներ-->

      <v-tab-item key="tab3">
        <AdresseLeftTabs/>
      </v-tab-item>
<!-- ---------- -->
<!-- Phone -->
 <v-tab-item key="PhoneleftTabs">
        <!-- <PhoneleftTabs/> -->
        <PhoneleftTabs222/>

      </v-tab-item>

<!--BankAccounts Բանկային Հաշիվներ-->

<v-tab-item key="BankAccounts">
        <BankAccounts/>

      </v-tab-item>
  <!-- Կապակցված անձիք  affiliatedPerson:-->
<v-tab-item key="affiliatedPerson">
        <AffiliatedPerson/>

      </v-tab-item>
<!-- Classifications -->

<v-tab-item key="classifications">
        <Classifications/>

      </v-tab-item>

<!-- Otherdeterminants -->

<v-tab-item key="otherdeterminants">
        <Otherdeterminants/>

      </v-tab-item>


<!--Կցվող փաստաթղթեր Attachments -->

<v-tab-item key="attachmentDocument">
        <AttachmentDocument/>

      </v-tab-item>
<!-- Նույնանուն անձ  PersonSameName-->

<v-tab-item key="personSameName">
        <PersonSameName/>

      </v-tab-item>
<!-- BMClasses ԲՄ Դասեր -->
<v-tab-item key="bMClasses">
        <BMClasses/>

      </v-tab-item>
<!-- Questionnaire Հարցաշար -->
<v-tab-item key="questionnaire">
        <Questionnaire/>

      </v-tab-item>

    </v-tabs>
</v-row >
     </v-container  >
      </div>





</template>

<script>
import PopupLeftTabsDate from '../PopUpLeft/PopupLeftTabsDate/PopupLeftTabsDate'
// import LeftTabsExpensions from '../PopUpLeft/LeftTabsExpensions'
// import LeftTbasGender from '../PopUpLeft/LeftTbasGender'
// import  AddBirtDeathdayLeftTabs from '../PopUpLeft/AddBirtDeathdayLeftTabs'
// import EmailBloodGroupsleftTabs from '../PopUpLeft/EmailBloodGroupsleftTabs'
// import IDCardPasport from '../PopUpLeft/IDCardPasport'
// import Employee from '../PopUpLeft/Employee'
// import WorkPlaceLeftTabs from '../PopUpLeft/WorkPlaceLeftTabs/WorkPlaceLeftTabs'
import OtherBasicInformation from '../PopUpLeft/OtherBasicInformationLeftTabs/OtherBasicInformation'
import PersonalDocuments from './PersolaDocumentsLeftTabs/PersonalDocuments'
import AdresseLeftTabs from './AdressesLeftTabs/AdresseLeftTabs'

///////////////////////////////////////////////
// import PhoneleftTabs from '../PopUpLeft/PhoneLeftTAbs/PhoneleftTabs
////////////////////////////////

import PhoneleftTabs222 from '../PopUpLeft/PhoneLeftTAbs/PhoneleftTabs222'

////////////////////////////
import BankAccounts from '../PopUpLeft/BankAccounts/BankAccounts'
import AffiliatedPerson from '../PopUpLeft/AffiliatedPerson/AffiliatedPerson'
import Classifications from '../PopUpLeft/Classifications/Classifications'
import Otherdeterminants from '../PopUpLeft/Otherdeterminants/Otherdeterminants'
import AttachmentDocument from '../PopUpLeft/AttachmentDocument/AttachmentDocument'
import PersonSameName from '../PopUpLeft/PersonSameName/PersonSameName'
import BMClasses from '../PopUpLeft/BMClasses/BMClasses'
import Questionnaire from '../PopUpLeft/Questionnaire/Questionnaire'
export default {
    name:'PopUpLeftTabs',

    components:{
      PopupLeftTabsDate,
// LeftTabsExpensions,
// LeftTbasGender,
// AddBirtDeathdayLeftTabs,
// EmailBloodGroupsleftTabs,
// IDCardPasport,
// Employee,
// WorkPlaceLeftTabs,
OtherBasicInformation,
PersonalDocuments,
AdresseLeftTabs,
// PhoneleftTabs,

PhoneleftTabs222,
/////////
BankAccounts,
AffiliatedPerson,
Classifications,
Otherdeterminants,
AttachmentDocument,
PersonSameName,
BMClasses,
Questionnaire
    },
data() {
    return {
        tab1:null,
        tab2:null,
        tab3:null,
        PhoneleftTabs:null,
        BankAccounts:null,
        affiliatedPerson:null,
        classifications:null,
        otherdeterminants:null,
        attachmentDocument:null,
        personSameName:null,
        bMClasses:null,
        questionnaire:null,


url: {

           //  Մարզերի ցուցակ "Ռեգիոնների ցուցակ API" լրացված է LeftAdresses.vue ?COUNTRY=ARM
               getRegionArm: "http://192.168.100.153:8000/country/get-region-list/",

                // ?COUNTRY=ARM&REGION=YR
             getYerReg:  "http://192.168.100.153:8000/country/get-district-list/",


                // // փաստաթղթերի տվյալներ հիմնական էջի & popup -i & CUSTDOCS տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ
                // getDocType: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTDOCS&CCOLUMN=DOCKIND&SUBSYS=1" ,

                //    // Պետությունների ցուցակ		լրացված է PersonalDocuments.vue -ի մեջ
                // getCountry: "http://192.168.100.153:8000/country/get-country-list/" ,



                // // Հեռախոսահամրների կոդեր			լրացված է PhoneleftTabs.vue -ի մեջ
                // getPhoneCode: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=PHONE&CCOLUMN=CODE" ,

                // // Հեռախոսահամրների տեսակներ		լրացված է PhoneleftTabs.vue -ի մեջ

                //    getPHONEKIND: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=PHONEKIND",







    }



    }
},


computed:{
//     customerFunction(){
// return this.$store.state.getCustomerData
//     }

// getCustomerData.js -ից եկած տվյալներ

        getCUSTADDRES(){
return this.$store.state.CUSTADDRES
    },

  },
methods: {

// address(COUNTRY,REGION){
// this.getRegionArmFunc(COUNTRY);
// this.getYerRegFunc(COUNTRY,REGION) ;
// },


//   getYerRegFunc(COUNTRY,REGION) {

//             this.axios
//                 .get(this.url. getYerReg,{
//                   params:{
//                     COUNTRY,
//                     REGION,
//                   }
//                 }  )
//                 .then(responce => {
//                     // console.log(responce.data);
//                   this.$store.state.  getYerReg= responce.data.data;
//                     console.log(this.$store.state. getYerReg)
//                      }) .catch(function (error) {
//                     alert("կապի խափանում");
//                     console.log(error);
//                 });

// },

// getRegionArmFunc(COUNTRY) {

//             this.axios
//                 .get(this.url.getRegionArm, {
// params:{
//   COUNTRY
// }

//                 })
//                 .then(responce => {
//                     // console.log(responce.data);
//                   this.$store.state. getRegionArm= responce.data.data;
//                     console.log(this.$store.state.getRegionArm)
//                      }) .catch(function (error) {
//                     alert("կապի խափանում");
//                     console.log(error);
//                 });

// },



// myFunc(){
//   // this.getDocTypeFunc();
//   // this.getCountryFunc();

// },

// phoneFunc(){
//   this.getPHONEKINDFunc();
//   this.getPhoneCodeFunc();
// },

// // PersonalDocuments.vue մեջի տվյալենրի zapros
// getDocTypeFunc() {
//             this.axios
//                 .get(this.url.getDocType,)
//                 .then(responce => {
//                     console.log(responce.data);
//                     this.$store.state.getDocType = responce.data.data;
//                 })
//                 .catch(function (error) {
//                     alert("կապի խափանում");
//                     console.log(error);
//                 });
//         },


// PersonalDocuments.vue մեջի տվյալենրի zapros

// getCountryFunc(){
//             this.axios
//                 .get(this.url.getCountry)
//                 .then(responce => {
//                     console.log(responce.data);
//                     this.$store.state.getCountry = responce.data.data;
//                 })
//                 .catch(function (error) {
//                     alert("կապի խափանում");
//                     console.log(error);
//                 });
//         },

// //   PhoneleftTabs.vue -ի մեջի տվյալենրի zapros
// getPhoneCodeFunc(){
//             this.axios
//                 .get(this.url.getPhoneCode)
//                 .then(responce => {
//                     console.log(responce.data);
//                     this.$store.state.getPhoneCode = responce.data.data;
//                 })
//                 .catch(function (error) {
//                     alert("կապի խափանում");
//                     console.log(error);
//                 });
//         },


// //   PhoneleftTabs.vue -ի մեջի տվյալենրի zapros

// getPHONEKINDFunc(){
//             this.axios
//                 .get(this.url.getPHONEKIND)
//                 .then(responce => {
//                     console.log(responce.data);
//                     this.$store.state.PHONEKIND = responce.data.data;
//                 })
//                 .catch(function (error) {
//                     alert("կապի խափանում");
//                     console.log(error);
//                 });
//         },





},


}
</script>

<style >
.v-tabs--vertical > .v-window {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 80% !important;
    max-height: 610px !important;
    overflow: scroll;
}
.v-tabs--vertical > .v-tabs-bar .v-tabs-bar__content{
      -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;


    width: 20% important;

}
.text-capitalize.caption.v-tab.pink.v-tab--active{
  background-color: blue;
   border-radius: 0px 0px 0px 0px  !important;

  /* color: black */
}

</style>
