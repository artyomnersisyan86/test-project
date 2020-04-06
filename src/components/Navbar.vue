<template>

<v-container fluid pa-0>

<v-row no-gutters>
         <v-col cols="12" md="12" sm="12" xs="12">

        <v-navigation-drawer app
        v-model="drawer"
        color="pink"
         temporary>
    <!-- -->
      

      <v-btn text  dark  @click="logOut" >
<v-icon  left>people</v-icon>
<span class="white--text caption text-capitalize">Ելք</span>
        </v-btn>
  </v-navigation-drawer>
      <v-app-bar  flat app color="pink" class=" white--text pa-0 " height="32">
              <v-app-bar-nav-icon 
              @click="drawer=!drawer"
              class="hidden-md-and-up"
              dark>

              </v-app-bar-nav-icon>
<v-toolbar-items>
 <v-menu offset-y z-index="4"  nudge-top=4>
      <template v-slot:activator="{ on }">
        <v-btn text    color="pink" v-on="on"  transition="scale-transition"   class="text-capitalize caption " >
       <span class="white--text">Ապահովագրություն  </span>  
       <v-icon class="white--text "  right>arrow_drop_down</v-icon>
        </v-btn>
      </template>
      <v-list text class=" pink  " >
        <v-list-item  v-for="(item, index) in items" :key="index"  >
          <v-list-item-title class= "white--text  caption ">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>
      
       <!-- jklajfal; -->
       <!-- jkjdakljcvlkjlkadjl -->
<v-menu offset-y z-index="4"  nudge-top=4>
      <template v-slot:activator="{ on }">
        <v-btn  text color="pink"  v-on="on" transition="scale-transition"  class="text-capitalize caption">
        
          <span class="white--text">Վերաապահովագրություն  </span>
          <v-icon class="white--text "  right>arrow_drop_down</v-icon>
        </v-btn>
      </template>
      <v-list text class="pink">
        <v-list-item  v-for="(item, index) in items1" :key="index" >
          <v-list-item-title class= "white--text caption	">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="4"  nudge-top=4>

      <template v-slot:activator="{ on }">
        <v-btn text  color="pink" v-on="on" transition="scale-transition" class="text-capitalize caption">
        
      
       <span class="white--text">  Պատահարներ </span>
        <v-icon left class="white--text" right >arrow_drop_down</v-icon>
        </v-btn>
      </template>
      <v-list text class="pink">
        <v-list-item  v-for="(item, index) in items2" :key="index" >
          <v-list-item-title class= "white--text caption">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="4"  nudge-top=4>

      <template v-slot:activator="{ on }">
        <v-btn text color="pink" v-on="on" transition="scale-transition" class="text-capitalize caption">
         <span class="white--text">  Ցանցային Կառավարում</span>
         <v-icon left class="white--text" right >arrow_drop_down</v-icon>

        </v-btn>
      </template>
      <v-list text class="pink" >
        <v-list-item  v-for="(item, index)  in items3" :key="index" router  :to="item.route"  @click="addItem(item)" >
          <v-list-item-title  class= "white--text caption" >{{ item.title }} </v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="4"  disabled nudge-top=4>

      <template v-slot:activator="{ on }">
        <v-btn text color="pink" v-on="on" transition="scale-transition" class="text-capitalize caption" >
        <span class="white--text">Հաշվապահություն</span>
         <v-icon left class="white--text" right>arrow_drop_down</v-icon>

        </v-btn>
      </template>
      <v-list text class=" pink ">
        <v-list-item  v-for="(item, index) in items4" :key="index" >
          <v-list-item-title class= "white--text caption">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="4" disabled nudge-top=4>
 
      <template v-slot:activator="{ on }">
        <v-btn text color="pink" v-on="on"   transition="scale-transition"  class="text-capitalize caption">
<span class="white--text">  կարգավորումներ</span>     
         <v-icon left class="white--text" right >arrow_drop_down</v-icon>       

   </v-btn>
      </template>
      <v-list text class=" pink ">
        <v-list-item  v-for="(item, index) in items5" :key="index" >
          <v-list-item-title class= "white--text caption">{{ item.title }} </v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

              
 <v-menu offset-y z-index="4" disabled nudge-top=4>
 
      <template v-slot:activator="{ on }">
        <v-btn text color="pink" v-on="on" transition="scale-transition" class="text-capitalize caption">
<span class="white--text">
        Օգտվող

</span>
         <v-icon left class="white--text" right >arrow_drop_down</v-icon>       

        </v-btn>
      </template>
           <v-list text class=" pink ">

        <v-list-item  v-for="item in items6" :key="item.title" router :to="item.route" >
          <v-list-item-title  class= "white--text caption " > 
            
            {{ item.title }}</v-list-item-title>

        </v-list-item>
      </v-list>
      



    </v-menu>
     

 
</v-toolbar-items>
     <v-spacer></v-spacer>
      

      <v-btn text  dark  @click="logOut" >
<v-icon  left>people</v-icon>
<span class="white--text caption text-capitalize">Ելք</span>
        </v-btn>

      </v-app-bar>
      </v-col>

</v-row>

<v-row no-gutters> 
 <DynamicTabs></DynamicTabs>
  
    </v-row>

<v-row no-gutters> 
<div class="footer">
  <p class="pt-1 caption">Nairi Insurance</p>
</div>
</v-row>

<router-view></router-view>
   
</v-container>

</template>

<script>
// import Mycomp from "../views/Mycomp"
import DynamicTabs from "./DynamicTabs"

export default {
  components:{
  DynamicTabs
},
name: 'Navbar',

data () {
  return {
drawer:false,
// show:false,
    // tabs:[],
    // myRoute:[],
    // lastPosition:'',
     items: [
        { title: 'Նոր վկայագրերի ստեղծում' },
        { title: 'Վկայագրերի որոնում' },
        { title: 'Վաճառքների սահմանաչափեր' },
        { title: 'Ապահովագրական պրոդուկտներ' },
        { title: 'Ապահովագրական փաթեթներ' },
        { title: ' Տեղեկատվական համակարգեր' },
       
      ],
      items1: [
        { title: 'Վերաապահովագրված վկայագրեր' },
        { title: 'Վերաապահովագրության ենթակա վկայագրեր' },
        { title: 'Վերաապահովագրության պայմանագրեր' },
        
       
      ],
      items2: [
        { title: 'Զանգերի ցանկ' },
        { title: 'Նախնական զննումների ցանկ ' },
        { title: 'Սուբրոգացիա' },
        { title: 'Հաըցերի վճարումներ' },
        { title: 'Գործընկերներից ստացված հաշիվ ապրանքագրեր' },
        { title: 'Մատուցվող ծառայություններ և գնացուցակ' },
        
       
      ],
       items3: [
        { title: 'Անձանց տեղեկատու', route:'/DirectoryOfPersons' },
        { title: 'Գործակալներ', route:'/about' },
        { title: 'Հաշվառման ենթակա ձևաթղթերի վարում', route:'/emty2' },
        { title: 'Օգտվողների իրավասություններ' },
        { title: 'Մասնաճյուղեր' },
        
       
      ],
       items4: [
        { title: 'լրացնելու եմ' },
      ],
       items5: [
        { title: 'լրացնելու եմ' }
      ],
       items6: [
        { title: 'լրացնելու եմ',  },
        { title: 'լրացնելու եմ1' },
        { title: 'լրացնելու եմ2' },
      ],
  }
},

methods:{
   addItem (item) {
if (this.$store.state.tabs.indexOf(item)===-1){
 this.$store.state.tabs.push( item );
  this.$store.state.showDynamicTabs=true;

 return item

}else{
  alert('hello')
}
//  console.log(arr)
// //  this.show=true;
// console.log([...new Set(arr)])

},

logOut(){
  if(confirm('Ցանկանում եք լքել համակարգը ?')){
this.$router.push({path: '/' })

  }

}
  
   },

   
   watch:{
     
   }
   

}
</script>

<style  >

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color:  #8BC34A;
   color: white;
   text-align: center;
   height: 32px;
}

/* hover efect navbar (Հովեր էֆեկտ նավբարի)  */

/* button.text-capitalize.theme--dark.v-btn.v-btn--flat.v-btn--text.v-size--default:hover{
  color: black;
  font-weight: bold;
    font-size: 258pxpx !important; 
} */
/* .v-btn__content:hover{
  color: black;
  font-weight: bold;
   font-size: 1rem !important;
  
} */


/*  (Լիստի մենյուի գրանիցների կարգավորում) */
/* .v-menu__content{
  border-radius: 3px 3px 15px  15px !important;
  

} */

/* .v-list-item.theme--light:hover{
background-color:#F06292 !important; 
} */


 /* .v-list.deep-purple.v-sheet.v-sheet--tile.theme--light{
  padding: 0px;
  
}  */
/* font-size list item text (լիստի տառերի չափը) */
/* .v-list-item__title{
  font-size: 0.875rem !important;
} */
/*  hoverEfect of list item (լիստի տեքստի հօվերէֆեկտ) */
 /* .v-list-item__title.white--text{
  font-size: 13px !important;
   color: black ! important ;
  font-weight: bold;

}  */

/* .v-list.v-sheet.v-sheet--tile.theme--light{
  border-radius: 0px !important;
  border: none;
  padding: 0px
} */

/* .v-menu__content--fixed{
  background-color:#673ab7;
  border-radius: 0px;
  
 
}  */



</style>