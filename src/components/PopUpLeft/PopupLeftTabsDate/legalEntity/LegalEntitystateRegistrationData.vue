<template>
<div>

<v-expansion-panels :popout="false"  :focusable="true"  :hover="true" 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"
>
 <!-- @click="allFunc" -->
      <v-expansion-panel >
         
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" >Պետական գրանցման անփոփոխ տվյալներ </v-expansion-panel-header>
        <v-expansion-panel-content>

<v-container fluid pa-0  mt-0 >


<!-- Կազմակերպաիրավական տեսակ -->

        <!-- ՌԵզիդենտություն -->
        <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">

                        <v-form 
                @submit.prevent >
                    <v-autocomplete 
                     v-model="myGetCustomerData.RESIDENCE"
                     :items="GETRESIDENCE" 
                     item-text="NAME_A" 
                       item-value="NUMID" 
                    color="pink lighten-2" height="32"
                    label="ՌԵզիդենտություն"
                     dense outlined filled class="body-2 centered-input "></v-autocomplete>
                </v-form>
            </v-col>
        </v-row>
        <!-- garancman amsativ -->
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
<v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">

               <v-form 
                @submit.prevent >
    <v-text-field
   v-model="myGetCustomerData.REGNUM"
  color="pink"
   class="body-2	 
    centered-input text-center text-capitalize"
   height="32"
   width="200"
            dense
            label="Գրանցման համար" 
            outlined
     >
     </v-text-field>
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
  color="pink"
   class="body-2 centered-input text-center text-capitalize"
   height="32"
   width="200"
   TAXPAYER
   v-model="myGetCustomerData.TAXPAYER"

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
                     dense outlined filled class="body-2 text-center centered-input "></v-autocomplete>
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
  <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">

                        <v-form 
                @submit.prevent >
                    <v-autocomplete 
                    GETBRNTYPE
 v-model="myGetCustomerData.BRNTYPE"
                   :items="GETBRNTYPE"
                   item-text="NAME_A" 
                    item-value="NUMID" 

                    color="pink lighten-2" height="32"
                    label="Ստորաբայանման առկայություն"
                     dense outlined filled class="body-2 centered-input "></v-autocomplete>
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
        </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>
  
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

computed: {
  ...mapGetters([
      // residence.js
  'GETRESIDENCE',
  // registeredOrgan․js
  'GETREGISTEREDORGAN',
  //    ստորաբաժանման առկայություն  brnType .js 
 'GETBRNTYPE'
  
  ]),
    customerFunction(){
return this.$store.state.getCustomerData
    },

},
 watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
 },
   methods: {
      save (date) {
        this.$refs.menu.save(date)
      }
   }
}

</script>

<style>
           
   

</style>
