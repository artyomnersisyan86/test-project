<template>
<div>
  <v-container fluid  pa-0 
v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id"
  
  >
    <v-row  no-gutters>
<v-col cols="12" md="12"  sm="12" xs="3" >
     
<v-expansion-panels :popout="false"  :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" >Աշխատավայր</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid  pa-0>
      
<!-- քաղաքացիական կացություն civil status -->
    

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">


<WorkPlaseleftTabsPopUp/>
       
      </v-col>

<!-- Կրթություն Education-->
       </v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">

        <v-form 
                @submit.prevent >
            
        <v-select
 color="pink lighten-2"

          :items="GETLISTOFJOBS"
          item-value="NUMID"
          item-text="NAME_A"
          label="Ընտրել"
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-select>
          </v-form>
      </v-col>
     </v-row>

<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">


          <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
      class="body-2  centered-input"
            label="Պայմանագրի համար"
            outlined
            dense
            height="32"
     v-model="myGetCustomerData.CONTNUM"
     ></v-text-field>
      </v-form>
      </v-col>
 </v-row>

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
        v-model="date"
         class="body-2  centered-input"
   color="pink"
          append-icon="event"
        label="Պայմանագրի սկիզբ"
        prepen-icon="event"
        height="32"
        dense
        outlined
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
           <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
   height="32"
   dense
      class="body-2  centered-input"
            label="Ընտանիքի Ֆինանսական կախյալ անդամների թիվ"
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
import {mapActions,mapGetters} from 'vuex'
import WorkPlaseleftTabsPopUp from '../WorkPlaceLeftTabs/WorkPlaseleftTabsPopUp'
export default {
    name:'WorkPlaceLeftTabs',
components:{
  WorkPlaseleftTabsPopUp
},
    data() {
        return {
                //  selected:[],
date: null,
menu: false, 
        }
    },watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
 
    methods: {
      ...mapActions(['GET_LIS_OF_JOBS_API']),
      save (date) {
        this.$refs.menu.save(date)
      },
    },
    mounted () {
     this.GET_LIS_OF_JOBS_API();
    },

  computed:{
    ...mapGetters([
      'GETLISTOFJOBS'
    ]),
    customerFunction(){
return this.$store.state.getCustomerData
    }
  },

   

}
</script>

<style>

</style>