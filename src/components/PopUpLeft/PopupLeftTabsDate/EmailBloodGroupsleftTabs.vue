<template>
<div>
<v-container fluid pa-0 ma-0 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"

>
   

<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
             <v-form 
                @submit.prevent >
    <v-text-field
    class="body-2 centered-input"
   color="pink"
   label="ՀԾՀ "
            outlined
            height="32"
            dense
            v-model="myGetCustomerData.SOCCART"
     ></v-text-field>
      </v-form>
  </v-col>
 </v-row>

<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
             <v-form 
                @submit.prevent >
    <v-text-field
    class="body-2 centered-input"
   color="pink"
   label="Հրաժարման տեղեկանքի №"
   height="32"
   dense
            outlined
            v-model="myGetCustomerData.SOCCARTNO"
            
     ></v-text-field>
      </v-form>
  </v-col>
 </v-row>

<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
             <v-form 
                @submit.prevent >
        <v-combobox
 v-model="myGetCustomerData.BLODETYPE"
 color="pink lighten-2"

          :items="bloodTypeData"
            item-text="NAME_A" 
             item-value="CHARID"
          label="Արյան խումբ"
          dense
          outlined
           filled
         height="32"
           class="body-2 centered-input"
 menu-props="auto" 
        ></v-combobox>
        </v-form>
      </v-col>

 </v-row>

<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
           <v-form 
                @submit.prevent >
    <v-text-field
    class="body-2 centered-input"
   color="pink"
   label="Հաշմանդամություն"
            outlined
height="32"
dense    
            v-model="myGetCustomerData.INVALED"

     ></v-text-field>
      </v-form>
  </v-col>

    </v-row>
    
    
    
    
    </v-container>  
</div>





</template>

<script>
export default {
name:'EmailBloodGroupsleftTabs',
data() {
    return {
    
    // "data": [
    //     {
    //         "NAME_A": "Արյան կայք",
    //         "CHARID": null,
    //         "NUMID": -1,
    //         "SUBSYS": null
    //     },
    // ]


    }
},
computed:{
    customerFunction(){
return this.$store.state.getCustomerData
    },
      bloodTypeData(){
return this.$store.state.bloodType
    }
  },


}
</script>

<style>

</style>