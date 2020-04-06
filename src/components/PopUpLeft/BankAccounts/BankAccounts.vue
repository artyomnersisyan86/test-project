<template>
  
<v-container fluid pa-0 pl-2>
  <v-row no-gutters>
     <v-col cols="12" md="12" sm="6" xs="6">
     <v-system-bar  color="pink lighten-2" dark>
      <v-icon></v-icon>
      <span>Բանկային հաշիվներ</span>
      
    </v-system-bar>
     </v-col>
  </v-row>
  <v-row no-gutters>
 
   <v-col cols="12" md="12" sm="6" xs="6">
        <v-simple-table fixed-header dense >
          <template v-slot:default>
            <thead>
              <tr>
                
                <th> Տեսակ </th>
                <th> Արժույթ </th>
                <th> Բանկ </th>
                <th> Հաշիվ </th>
                <th> SWIFT կոդ</th>
                <th> Օտարերկրյա բանկի տվյալներ </th>
                <th> Նշումներ </th>
               
                
                
              </tr>
            </thead>
<tbody>
                <tr v-for="bank in getCUSTACNT" :key="bank.KIND">

    <!-- <td>{{bank.KIND}} </td> -->

<td>


                    <v-autocomplete color="pink lighten-2" 
                    v-model="bank.KIND"
                     :items="BANKACAUNTSTYPE"
                      item-text="NAME_A"
                       item-value="NUMID" 
                     
                     
                 
                      dense menu-props="auto" 
                     outlined height="32" class="caption pt-2"></v-autocomplete>
            

</td>



    <!-- <td>{{bank.CURRENCY}}  </td> -->
    <td>
  <!-- <select class=" selectMy  "  v-model="bank.CURRENCY">

      <option :value="currency.CURRENCY" 
      class="black--text caption select"  
    v-for="currency in CURRENCY " :key="currency.CURRENCY">{{currency.CURRENCY}}  {{ currency.NAME_A}}
                </option>
            </select> -->

<v-autocomplete color="pink lighten-2" 
                    v-model="bank.CURRENCY"
                     :items="CURRENCY"
                      item-text="CURRENCY"
                       item-value="CURRENCY" 
                     
                     
                 
                      dense menu-props="auto" 
                     outlined height="32" class="caption pt-2"></v-autocomplete>

    </td>


    <!-- <td>{{bank.BANK}}  </td> -->

    <td>


<v-autocomplete color="pink lighten-2" 
                    v-model="bank.BANK"
                     :items="BANK"
                      item-text="NAME_A"
                       item-value="BANKID" 
                     
                     
                 
                      dense menu-props="auto" 
                     outlined height="32" class="caption pt-2"></v-autocomplete>

    </td>
    <td>{{bank.BANKACNT}}  </td>

    <!--SWIFT լրացված չէ  -->
    <td>{{bank.SWIFT}}  </td>
    <td>{{bank.OUTBANK}}  </td>
    <td> {{bank.NOTE}}  </td>
    
  </tr>
</tbody>

          </template>
        </v-simple-table>
      </v-col>
    </v-row>
</v-container>

</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
name:'BankAccounts',
data() {
    return {
        
// "CUSTACNT": [
//         {
//             "KIND": 1,
//             "CURRENCY": "AMD",
//             "BANK": "AM",
//             "BANKACNT": "",
//             "OUTBANK": null,
//             "NOTE": null
//         }


    }
},
methods: {
  ...mapActions([
    'GETCURRENCYFROMAPI',
   'GETBANK',
   'GET_BANKACAUNTSTYPE_FROM_API'

  ]),

},
mounted() {
  this.GETCURRENCYFROMAPI();
  this.GETBANK();
   this.GET_BANKACAUNTSTYPE_FROM_API();

},

computed:{
 ...mapGetters([
'CURRENCY',
'BANK',
'BANKACAUNTSTYPE'
  ]),
// getCustomerData.js -ից եկած տվյալներ
    getCUSTACNT(){
return this.$store.state.CUSTACNT
    },


        // գտնվում են DataTable222 bankAccountsTypeFunc() -ի մեջ
// bankAccountsType(){
//   return this.$store.state.bankAccountsType
// }

  },

}
</script>

<style>

</style>