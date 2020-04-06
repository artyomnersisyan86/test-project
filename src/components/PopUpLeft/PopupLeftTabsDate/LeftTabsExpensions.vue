<template>
<div>
 <v-container fluid pa-0 mt-0 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"
 
  >
<v-row no-gutters>
    <v-col cols="12"  md="12" sm="12" xs="12">
      
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
         <v-expansion-panel-header ripple class="grey lighten-2 pink--text">Ռուսերեն</v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-container fluid pa-0 >
<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
 <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
   class="body-2   centered-input text-capitalize"
            label="Имя"
            height="32"
           
            value="444"
            dense
            outlined
          v-model="myGetCustomerData.NAME_R"
            
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
   class="cbody-2   centered-input text-capitalize"
   height="32"
            dense
            label="Фамиля"
            outlined
            
          v-model="myGetCustomerData.SNAME_R"
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
   class="body-2   centered-input text-capitalize"
   height="32"
            dense
            label="Очество"
            outlined
          v-model="myGetCustomerData.FNAME_R"
     ></v-text-field>
      </v-form>
    </v-col>
</v-row>
           </v-container>
         
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
    </v-col>
     <v-col cols="12"  md="12" sm="12" xs="12">
<v-expansion-panels :popout="false" :focusable="true" color="primary" :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text"> Անգլերեն</v-expansion-panel-header>
        <v-expansion-panel-content >

      <v-container fluid pa-0 >
<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">

              <v-form 
                @submit.prevent >
    <v-text-field
  color="pink"
   class="body-2   centered-input text-capitalize"
   
   height="32"
            dense
            label="Name"
            outlined
          v-model="myGetCustomerData.NAME_E"

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
   class="body-2   centered-input text-capitalize"
   height="32"
            dense
   label="Last Name"
            placeholder=""
            outlined
          v-model="myGetCustomerData.SNAME_E"

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
   class="body-2   centered-input text-capitalize"
   height="32"
            dense
            label="Middle Name"
            placeholder=""
            outlined
          v-model="myGetCustomerData.FNAME_E"

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
export default {
name:'LeftTabsExpensions',


computed:{
    customerFunction(){
return this.$store.state.getCustomerData
    }
  },
}
</script>

<style>


</style>