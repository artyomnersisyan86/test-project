<template>
<!-- <v-container fluid pa-0>
  <v-row no-gutters>
    <v-col cols="12"> -->
  <v-app class="grey lighten-4 ">

      <!-- <Navbar v-if="showFunction" ></Navbar> -->

     <!-- <Login></Login> -->


     <!-- <Login></Login> -->
<!-- 
<v-container fluid class=" pa-0">
 
    <v-row>
      <v-col>
      <v-system-bar app  class=" white--text  justify-space-between" color="light-green" >
        <span ></span>
        <span >Nairi Insurance</span>
      



    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
          <v-btn text dar v-on="on" color="light-green"  >
<v-icon  left>people</v-icon>
<span class="white--text caption text-capitalize">մուտք</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="light-green">
          <span class="headline">Log in</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            
              <v-col cols="12">
                <v-text-field label="login" v-model="login" color="pink" required></v-text-field>
              </v-col>
              <v-col cols="12" >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="light-green " text @click="dialog = false">Close</v-btn>
          <v-btn color="light-green " text >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 
      </v-system-bar>
</v-col>
</v-row>

      


</v-container> -->




               <!-- <Mycomp/>>      -->


    <v-content class="pa-0">  
    
   <v-container fluid pa-0>
     <!-- <keep-alive> -->
     <router-view />
     <!-- </keep-alive>    -->
      </v-container>
    </v-content>


    <!-- <v-content>
   


     <keep-alive>
     <router-view />
     </keep-alive>  
    </v-content> -->
  </v-app>
    <!-- </v-col>
  </v-row>
  </v-container> -->
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
// import Login from "./components/Login/Login"
// import Mycomp from "./views/Mycomp";
export default {
  name: "App",

  components: {
    // Navbar,
    // Login
    // Mycomp
  },

  data: () => ({
    //
    
    // show:true,
     dialog: false,
  }),
  computed:{
    showFunction(){
return this.$store.state.show
    }
  },
  methods:{
    showMethod(){
      if(this.login && this.password ){
 this.$store.state.show=true
      this.dialog=true;
      }else
    {
      alert('Սխալ մուտքագրում')
    }
    }
    
  }

};
</script>
<style>
/* #app{
font-size: 12px
}
 */
/* *{
  font-size: 13px !important;
 
} */
html{
    overflow-y:inherit !important;
    height: 100% !important;
}
body{
  height: 100% !important;
}

</style>

