<template>
  <div>
<v-container fluid pa-0 pl-2  >
    <v-row no-gutters>
   <v-col cols="12" md="12" sm="12" xs="12">
        <v-simple-table fixed-header dense >
          <template v-slot:default>
            <thead>
              <tr>
                
                <th> Կոդ </th>
                <th> Փաստաթղթի տեսակ </th>
                <th> Պետություն </th>
                <th> Փաստաթղթի համար </th>
                <th> Ում Կողմից է տրված </th>
                <th> Տրման ամսաթիվ </th>
                <th> Ուժի մեջ է մինչև </th>
              </tr>
            </thead>
            <tbody>
              <tr   
v-for="docs in getCUSTDOCS" :key="docs.ID"
              
              >

  
                <td>{{docs.ID}} </td>
                <!-- <td >{{docs.DOCKIND}} </td> -->

                            <td>

 <v-form 
                @submit.prevent >

                    <v-select color="pink lighten-2" 
                    v-model="docs.DOCKIND"
                     :items="getDocType"
                      item-text="NAME_A"
                       item-value="NUMID" 
                     value="NUMID" 
                     
                 
                      dense menu-props="auto" 
                     outlined height="32" class="caption "></v-select>
                </v-form>

              </td>
                <!-- <td>{{docs.DCOUNTRY}} </td> -->
                         <td>
                  <v-form 
                @submit.prevent >

                    <v-select color="pink lighten-2" v-model="docs.DCOUNTRY"
                     :items="GETCOUNTRY"
                      item-text="NAME_A"
                       item-value="ALPHA3" 
                     value="NUMID" 
                     
                 
                      dense menu-props="auto" 
                     outlined height="32" class="caption "></v-select>
                </v-form>

              </td> 


                <td>{{docs.DOCNUM}} </td>
                <td>{{docs.DOCSRC}} </td>
                <td>{{docs.DOCISSUDT}} </td>
                <td>{{docs.DOCEXPIRED}} </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
</v-container>


  </div>


</template>

<script>
import {mapGetters} from 'vuex'
export default {
name:'PersonalDocuments',
data() {
    return {
        //  "CUSTDOCS": [
        // {
        //     "ID": 597380,
        //     "DOCKIND": 2,
        //     "DCOUNTRY": "ARM",
        //     "DOCNUM": "008819724",
        //     "DOCSRC": "006",
        //     "DOCISSUDT": "2016-05-19T00:00:00Z",
        //     "DOCEXPIRED": "2026-05-19T00:00:00Z"
        // },

// փաստաթղթերի տվյալներ հիմնական էջի
//  "data": [
//         {
//             "NAME_A": "Անձնագիր",
//             "CHARID": "PASP",
//             "NUMID": 1,
//             "SUBSYS": "1"
//         },

    }
},
computed:{
  ...mapGetters([
    'GETCOUNTRY'
  ]),
// getCustomerData.js -ից եկած տվյալներ
    getCUSTDOCS(){
return this.$store.state.CUSTDOCS
    },
  
// փաստաթղթերի տվյալներ հիմնական էջի & popup -i call PopupLeftTabs
    getDocType(){
return this.$store.state.getDocType
    },
// Պետությունների տեսակ call PopupLeftTabs

//      getCountryData(){
// return this.$store.state.getCountry
//     },
  },

   


  


}

</script>

<style>

</style>