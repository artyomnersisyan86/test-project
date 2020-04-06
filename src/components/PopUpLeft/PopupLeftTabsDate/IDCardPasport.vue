<template>
  <div>
<v-container fluid  pa-0 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"

>
    <v-row  no-gutters>
      
<!-- Id CArd -->
    <v-col cols="12"  md="12" sm="12" xs="4" >

     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >

        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" >Նույնականացման քարտ</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid pt-2 pa-0>
<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
             <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
   height="32"
   dense
      class="body-2  centered-input"
            label="Համար"
            outlined
          v-model="myGetCustomerData.IDCARD"
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
   class="body-2   centered-input"
   dense
            label="Ում կողմից է տրված"
            outlined
            height="32"
          v-model="myGetCustomerData.IDSRC"

     ></v-text-field>
      </v-form>
      </v-col>

    </v-row>
<IDCardDAtePicker/>
</v-container>
         
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
      </v-col>
    </v-row>
         <!-- Pasport -->
       <v-row  no-gutters>
      
<!-- Id CArd -->
    <v-col cols="7"  md="12" sm="12" xs="4" >


     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" >Անձը հաստատող փաստաթուղթ</v-expansion-panel-header>
        
        <v-expansion-panel-content  >

<v-container fluid  pa-0 

>

  <v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12"   >
                <v-form 
                @submit.prevent >

                    <v-autocomplete color="pink lighten-2"  v-model="myGetCustomerData.DOCUMENT"
                     :items="DOCDETHOME"
                      item-text="NAME_A"
                       item-value="NUMID" 
                     value="NUMID" 
                     label="Անձը հաստատող փաստաթուղթ" 
                     dense menu-props="auto" 
                     outlined filled height="32" class="body-2 centered-input "></v-autocomplete>
                </v-form>
            </v-col>
</v-row>

 <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
                  <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
      class="body-2   centered-input"
            label="Փաստաթղթի  համար"
            height="32"
            dense
            outlined
            v-model="myGetCustomerData.DOCUMENT"
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
   class="body-2   centered-input"
            outlined
            height="32"
            label="Ում կողմից է տրված"
            dense
            v-model="myGetCustomerData.DOCSRC"
     ></v-text-field>
      </v-form>
      </v-col>
    </v-row>
<IDCardDAtePicker/>
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
import IDCardDAtePicker from './IDCardDAtePicker'
import {mapGetters} from 'vuex'
export default {
name:'IDCard',
components:{
    IDCardDAtePicker
},
data() {
  return {
     
  }
  
},
computed:{
...mapGetters([
  'DOCDETHOME'
]),
// getCustomerData.js -ից եկած տվյալներ
    getCUSTDOCS(){
return this.$store.state.CUSTDOCS
    },

    customerFunction(){
return this.$store.state.getCustomerData
    }
  },


}
</script>

<style>

</style>