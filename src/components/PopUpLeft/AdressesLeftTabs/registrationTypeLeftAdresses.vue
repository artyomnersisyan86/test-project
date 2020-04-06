<template>
  
<div>
  
<v-container fluid pa-0
   v-for="addresses in getCUSTADDRES" :key="addresses.ID">
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
 <v-form 
                @submit.prevent >
  <v-autocomplete
 
 color="pink"
v-model="addresses.ADRSKKIND"
          :items="getLives"
          item-text="NAME_A"
          item-value="NUMID"
          label="Բնակության հասցեն"
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-autocomplete>
 </v-form>

</v-col>
</v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">

 <v-form 
                @submit.prevent >
    <v-text-field
    v-model="addresses.ZIP"
    class="body-2  centered-input"
    height="32"
    dense
   color="pink"
   label="Փոստային հասցե"
            outlined
     ></v-text-field>
      </v-form>

</v-col>
</v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="12" sm="12" xs="12">
<v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
   
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="addresses.STARTDATE"
         class="body-2  centered-input"
         height="32"
   color="pink"
        label="Գրանցման ամսաթիվ"
        append-icon="event"
        readonly
    
        v-on="on"
      ></v-text-field>
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
</v-container>
</div>

</template>

<script>
export default {
name:'registrationTypeLeftAdresses',
components:{

},
data() {
    return {
       
         date: null,
           menu: false, 

          //  գրանցման տեսակ բանակվում է
// "data": [
//         {
//             "NAME_A": "ADRSKKIND",
//             "CHARID": null,
//             "NUMID": -1,
//             "SUBSYS": null
//         },
// ],




    }
    
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
 },


 computed: {
// գրանցման տեսակ getLivesFunc() call
   
getLives(){
  return this.$store.state.getLives
},

// getCustomerData.js -ից եկած տվյալներ

        getCUSTADDRES(){
return this.$store.state.CUSTADDRES
    },



 },

}
</script>

<style>

</style>