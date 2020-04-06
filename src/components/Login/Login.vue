

<template>
<div >
 <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="pink"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                
              </v-toolbar>
        <v-card-text>
          <v-container>
         
            <v-row>
            
              <v-col cols="12" md="12">
                <v-text-field label="login" v-model="login" 
                    prepend-icon="person"
                
                 color="light-green" required></v-text-field>
              </v-col>
         <v-col cols="12" md="12">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="password"
                    prepend-icon="lock" 

            counter
            color="light-green"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
            </v-row>
          
            
          </v-container>
        
        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="light-green " text @click="dialog = false">Close</v-btn> -->
          <v-btn color="pink" dark @click="loginMethod" >Մուտք</v-btn>
        </v-card-actions>
      </v-card>
        </v-col>
        </v-row>
    
  </v-container>
    </v-content>
 </v-app>

 
  </div>
</template>

<script>
export default {
data() {
    return {
        show1:false,
    password:'admin' ,
    login:'admin' ,
     
    }
    },
    methods: {
      loginMethod(){
      this.$router.push({path: '/Navbar' })
      // this.$store.state.show=true
      }
    },
    }
</script>

<style scoped>

</style>





