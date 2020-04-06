<template>
<div>
  
  <v-container fluid pa-0
  
   v-for="addresses in getCUSTADDRES" :key="addresses.ID"
   >

<!--       
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" >Հասցե</v-expansion-panel-header>
        <v-expansion-panel-content> -->
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
         <v-form 
                @submit.prevent >
    <v-text-field
    v-model="addresses.FULLADDRESS_A"

   color="pink"
      class="body-2  centered-input"
      height="32"
            dense
            label="Հայերեն"
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
    v-model="addresses.FULLADDRESS_R"
   color="pink"
      class="body-2  centered-input"
      height="32"
            dense
            label="Ռուսերեն"
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
    v-model="addresses.FULLADDRESS_E"

   color="pink"
      class="body-2  centered-input"
      height="32"
            dense
            label="Անգլերեն"
            outlined
     ></v-text-field>
      </v-form>
      </v-col>
 </v-row>

         <registrationTypeLeftAdresses></registrationTypeLeftAdresses>
        <!-- </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> -->
  



  </v-container>
</div>

</template>

<script>
import registrationTypeLeftAdresses from '../AdressesLeftTabs/registrationTypeLeftAdresses'

export default {
name:'AdresesLeftAdresses',
components:{
  registrationTypeLeftAdresses
  },
    computed:{

// getCustomerData.js -ից եկած տվյալներ

        getCUSTADDRES(){
return this.$store.state.CUSTADDRES
    },


    }

}
</script>

<style>

</style>