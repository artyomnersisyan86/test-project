<template>
<div>
    <v-container fluid pa-0 v-for="myGetCustomerData in customerFunction.CUSTOMER" v-bind:key="myGetCustomerData.id">

        <v-row justify="center" no-gutters class="pt-2">
    <v-col cols="12"  md="8" sm="12" xs="12">
                      <v-form 
                @submit.prevent >

                    <v-autocomplete color="pink lighten-2" v-model="myGetCustomerData.SEX"
                     :items="gendersData"
                      item-text="NAME_A"
                       item-value="NUMID" 
                     value="NUMID" 
                     label="Սեռ" dense menu-props="auto" 
                     outlined filled height="32" class="body-2 centered-input "></v-autocomplete>
                </v-form>
            </v-col>
</v-row>

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
        <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
                     <v-form 
                @submit.prevent >
                    <v-text-field class="body-2 centered-input " color="pink" label="Ծննդավայր" outlined height="32" dense v-model="myGetCustomerData.BIRTHPLACE"></v-text-field>
                </v-form>
            </v-col>
           </v-row>

        <v-row justify="center" no-gutters class="pt-2">      
       <v-col cols="12"  md="8" sm="12" xs="12">
                   <v-form 
                @submit.prevent >
                    <v-text-field class="body-2 centered-input " color="pink" dense height="32" label="Էլ․ փոստ" outlined v-model="myGetCustomerData.EMAIL"></v-text-field>
                </v-form>
            </v-col>
        </v-row>
    </v-container>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'LeftTbasGender',
    props: {
        gendersData: {
            type: Array,
        },
    },
    data() {
        return {

        }
    },
   
 
    computed: {
        customerFunction() {
            return this.$store.state.getCustomerData
        },

 ...mapGetters([
      // residence.js
  'GETRESIDENCE',
  
  ]),
    }

}
</script>

<style>

</style>
