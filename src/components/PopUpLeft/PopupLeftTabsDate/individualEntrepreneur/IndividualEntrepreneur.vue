<template>
<div>
<v-container fluid pa-0  mt-0 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"

>




        <!-- Պետական գրանցման անփոփոխ տվյալներ -->
        <v-row justify="center"  no-gutters class="pt-2 text-center">      
       <v-col cols="12"  md="8" sm="12" xs="12">

      <h5>Անհատ ձեռներեցի պետական գրանցման անփոփոխ տվյալներ</h5>

       </v-col>
        </v-row>
<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
 
                        <v-form 
                @submit.prevent >
                    <v-autocomplete 
                    v-model="myGetCustomerData.SECTOR"
                     :items="GETACTIVITITYPE" 
                     item-text="NAME_A" 
                       item-value="NUMID" 
                    color="pink lighten-2" height="32"
                    label="Գործնեության տեսակ"
                     dense outlined filled class="body-2 centered-input "></v-autocomplete>
                </v-form>
            </v-col>
        </v-row>
        <!-- garancman amsativ -->
        <!-- v-model="myGetCustomerData.BIRTHDAY" -->
        <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
<v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
   
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
             <v-form 
                @submit.prevent >
            
      <v-text-field
        v-model="myGetCustomerData.REGDATE"
        
         class="body-2 centered-input"
         outlined
   color="pink"
   dense
   height="32"
        label="Գրանցման ամսաթիվ"
        append-icon="event"

        readonly
        v-on="on"
      ></v-text-field>
      </v-form>
    </template>
    <v-date-picker
    header-color="pink"

      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"


    ></v-date-picker>
  </v-menu>

    </v-col>
  
</v-row>
<!-- Գրանցման համար -->
   <!-- v-model="myGetCustomerData." -->
<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
   v-model="myGetCustomerData.REGNUM"
  color="pink"
   class="body-2	  centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Գրանցման համար"
            
         
            
            outlined
     ></v-text-field>
         </v-form>
         </v-col>
</v-row>
<!--Վկայականի համար -->
<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
   v-model="myGetCustomerData.REGNUM2"

  color="pink"
   class="body-2	
     centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Վկայականի համար"
            outlined
     ></v-text-field>
         </v-form>
         </v-col>
</v-row>
<!-- ՀՎՀՀ -->

<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">
               <v-form 
                @submit.prevent >
    <v-text-field
   v-model="myGetCustomerData.TAXPAYER"
  color="pink"
   class="body-2	 
    centered-input text-center text-capitalize"
   height="32"
   width="200"
            dense
            label="ՀՎՀՀ"            
            outlined
     ></v-text-field>
         </v-form>
         </v-col>
</v-row>
<!-- Գրանցված մարմին -->
<v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">

                        <v-form 
                @submit.prevent >
                    <v-autocomplete 
                     v-model="myGetCustomerData.ORGNAME"
                   :items="GETREGISTEREDORGAN"
                   item-text="NAME_A" 
                    item-value="CHARID" 
                    color="pink lighten-2" height="32"
                    label="Գրանցված մարմին"
                     dense outlined filled class="body-2 centered-input "></v-autocomplete>
                </v-form>
            </v-col>
        </v-row>
        <!-- Պետության մասնաբաժինը -->
        <v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
    v-model="myGetCustomerData.PRATE"

  color="pink"
   class="body-2	
     centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Պետության մասնաբաժինը"
            outlined
     ></v-text-field>
         </v-form>
         </v-col>
</v-row>
<!-- Կայք -->
 <v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
    v-model="myGetCustomerData.WEBSIT"

  color="pink"
   class="body-2	
     centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Կայք"
            outlined
     ></v-text-field>
         </v-form>
         </v-col>
</v-row> 
<!-- Գործընկերոջ էլ․փոստ -->
<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
    v-model="myGetCustomerData.EMAIL"
  color="pink"
   class="body-2	
     centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Գործընկերոջ էլ․փոստ"
            outlined
     ></v-text-field>
         </v-form>
         </v-col>
</v-row> 
<!-- Հուսալի է -->
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">

 <v-form 
                @submit.prevent >
            <v-checkbox 
            v-model="myGetCustomerData.TRUSTED"
             :value="myGetCustomerData.TRUSTED"
             color="pink lighten-2"
             label="Հուսալի է"
            >
             </v-checkbox>
          </v-form>
      </v-col>
</v-row>

<!-- Ռիսկի կշիռ % -->
<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
            v-model="myGetCustomerData.BASERATE"
    BASERATE    
  color="pink"
   class="body-2	
     centered-input text-center text-capitalize"
   
   height="32"
   width="200"
            dense
            label="Ռիսկի կշիռ %"
            outlined
     ></v-text-field>
         </v-form>
         </v-col>
</v-row>


</v-container>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
components:{
},
data() {
  return {
   
 date: null,
  menu: false, 
  
  }
},
computed:{

...mapGetters([

  // organizationalType.js
  'GETORGANIZATIONALTYPE',
  // activityType.js
  'GETACTIVITITYPE',
  // registeredOrgan․js

  'GETREGISTEREDORGAN',
  
]),

    customerFunction(){
return this.$store.state.getCustomerData
    },


},

methods: {
  
  save (date) {
        this.$refs.menu.save(date)
},
},
 watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
 },
   
   
}

</script>

<style>
           
   

</style>
