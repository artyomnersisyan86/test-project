<template>
<div>
  <v-container fluid pa-0 pl-2 >
    <v-row no-gutters>
     <v-col cols="12" md="6" sm="6" xs="6">
        <v-simple-table fixed-header dense >
          <template v-slot:default>
            <thead>
              <tr>
                
                <th> Հաշվառման երկիր</th>
                <th> Հասցե </th>
                <th> Ամսաթիվ </th>
                <th> Կապ </th>
                <th> Կոդ </th>
                
              </tr>
            </thead>
            <tbody>
              <tr
   
              v-for="addresses in getCUSTADDRES" :key="addresses.ID">

    <td>  {{addresses.COUNTRY}} </td>
    <td>{{addresses.FULLADDRESS_A}} </td>
    <td>{{addresses.STARTDATE}} </td>
    <td>{{addresses.ADRESID}} </td>
    <td>{{addresses.ID}} </td>
</tr>


            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="6" md="6" sm="6" xs="6" class="pl-2">

          <v-row no-gutters>
              <v-col cols="12">
                  <v-system-bar color="pink lighten-2" dark>
     
      <a href="#" class="white--text caption"> Դիտել քարտեզի վրա </a>
      <v-spacer></v-spacer>
      <span class="caption">Ընտրել ցուցակից</span>
     
    </v-system-bar>

<LeftAdresses></LeftAdresses>
<!-- <AdresesLeftAdresses/> -->
<!-- <registrationTypeLeftAdresses/> -->
              </v-col>
          </v-row>
      </v-col>
    </v-row>
</v-container>


</div>


</template>

<script>

import LeftAdresses from '../AdressesLeftTabs/LeftAdresses'
// import AdresesLeftAdresses from '../AdressesLeftTabs/AdresesLeftAdresses'
// import registrationTypeLeftAdresses from '../AdressesLeftTabs/registrationTypeLeftAdresses'
export default {
name:'AdresseLeftTabs',

components:{
    LeftAdresses,
    // AdresesLeftAdresses,
    // registrationTypeLeftAdresses
},
data() {
  return {
  addresses:'',




    //  "CUSTADDRES": [
    //     {
    //         "COUNTRY": "ARM",
    //         "FULLADDRESS_A": "ՀՀ, ք.Երևան, Աջափնյակ ՎՇ 55շ., 265բն.",
    //         "STARTDATE": "2015-11-05T00:00:00Z",
    //         "ADRESID": "129094",
    //         "ID": 35500
    //     }
    // ],
  }
},
computed:{
// getCustomerData.js -ից եկած տվյալներ
    getCUSTADDRES(){
return this.$store.state.CUSTADDRES
    }
  },
 
}
</script>

<style>

</style>