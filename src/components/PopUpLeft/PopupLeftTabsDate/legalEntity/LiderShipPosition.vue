<template>
<div>
<v-container fluid pa-0  mt-0 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"

>

<v-row no-gutters  >
    <v-col cols="12"  md="12" sm="12" xs="4">
      
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true" 
>
 <!-- @click="allFunc" -->
      <v-expansion-panel >
         
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" >Ղեկավար անձ </v-expansion-panel-header>
        <v-expansion-panel-content>



  <v-container fluid pa-0 >

    <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
 
                        <v-form 
                @submit.prevent >
                    <v-autocomplete 
                    v-model="myGetCustomerData.WPOSTID"
                     :items="GETLIDERSHIPPOSITION" 
                     item-text="NAME_A" 
                       item-value="NUMID" 
                    color="pink lighten-2" height="32"
                    label="Գործնեության տեսակ"
                     dense outlined filled class="body-2 centered-input "></v-autocomplete>
                </v-form>
            </v-col>
        </v-row>
          <!-- Անուն ազգանուն հայրանուն -->

       <v-row justify="center"  no-gutters class="pt-2 text-center">      
       <v-col cols="12"  md="8" sm="12" xs="12">

      <h5 class="grey lighten-3">Անուն ազգանուն հայրանուն</h5>

       </v-col>
        </v-row>
<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
    
                    v-model="myGetCustomerData.WORKER"

  color="pink"
   class="body-2	  centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Հայերեն"
            
            
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
                    v-model="myGetCustomerData.WORKER_R"

  color="pink"
   class="body-2 centered-input text-capitalize"
  
   height="32"
            dense
   label="Ռուսերեն"
            placeholder=""
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
                    v-model="myGetCustomerData.WORKER_E"

    color="pink"
   class="body-2  centered-input text-capitalize"
   height="32"
            dense
            label="Անգլերեն"
            outlined
     ></v-text-field>
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
export default {
  name:'LegalEntitySuperVisor',
 

data() {
  return {
   
  }
},
computed:{
  ...mapGetters([
    'GETLIDERSHIPPOSITION'
  ]),
    customerFunction(){
return this.$store.state.getCustomerData
    },

}
    

}
</script>

<style>
           

</style>
