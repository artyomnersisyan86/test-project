<template>
<div>
<v-container fluid pa-0 pl-2> 
  <v-row no-gutters>
  <v-col cols="12" md-12 sm-6 xs-4 >

  

     <v-system-bar  color="pink lighten-2" dark >
      <v-icon></v-icon>
      <span>Կցվող փաստաթղթերր</span>
      
    </v-system-bar>
    
     
        <v-simple-table fixed-header dense>
          <template v-slot:default>
            <thead>
              <tr>
                
               <th>Համար</th>
               <th>Ֆայլի անվանում</th>
               <th>Տեսակ</th>
               <th>Հավելված</th>
               <th>Անձի կոդ</th>
               <th>Անձի անուն</th>
               <th>նշումներ</th>
               <th>Էջերի քանակ</th>
               <th>Ուղարկման ենթակա</th>
               <th>Ստորագրման ենթակա</th>
               <th>Էլ․փոստ</th>
               <th>Էլ․փոստով ողարկվածների քանակ</th>
               <th>Ստորագրման ամսաթիվ</th>
               <th>Ողարկման ամսաթիվ</th>
               <th>կցման ամսաթիվ</th>
               <th>Կատարող</th>
               <th>Համակարգիչ</th>
              </tr>
            </thead>
          </template>
        </v-simple-table>
        </v-col>
  </v-row>   
    </v-container>
 </div>
</template>

<script>
export default {
name:'AttachmentDocument',
data() {
    return {
        

    }
},
}
</script>

<style>

</style>