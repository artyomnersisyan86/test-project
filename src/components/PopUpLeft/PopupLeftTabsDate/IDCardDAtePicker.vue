<template>
<div>
  <v-container fluid pa-0 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id" >
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
        v-model="myGetCustomerData.IDISSUDT"
         class="body-2  centered-input"
         outlined
   color="pink"
   dense
   height="32"
        label="Տրման ամսաթիվ"
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



  <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
<v-menu
     ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
   
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
             <v-form 
                @submit.prevent >
      <v-text-field
         v-model="myGetCustomerData.IDEXPIRDT"
         class="body-2  centered-input"
         outlined
   color="pink"
   dense
   height="32"
        label="Վավեր է մինչև"
        append-icon="event"

        readonly
        v-on="on"
      ></v-text-field>
      </v-form>
    </template>
    <v-date-picker
    header-color="pink"

      ref="picker"
       v-model="date1"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="saveDeath"

    ></v-date-picker>
  </v-menu>

    </v-col>
  </v-row>
  </v-container>
</div>

</template>

<script>
export default {

name:'AddBirtDeathdayLeftTabs',

    data() {
        return {
           date: null,
           date1:null,
      menu: false, 
      menu1:false,
        }
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
      menu1 (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      saveDeath (date1) {
        this.$refs.menu1.save(date1)
      },
    },
computed:{
    customerFunction(){
return this.$store.state.getCustomerData
    }
  },
}
</script>

<style>

</style>