<template>
<v-container fluid pa-0>
    <!-- active-class="grey lighten-3" -->
    <v-row no-gutters>
        <v-tabs background-color="pink lighten-3 " color="pink" dark hide-slider height="32px">
            <v-tabs-slider></v-tabs-slider>

            <v-tab :key="tab1" class="mx-2 text-capitalize caption ">Հիմնական</v-tab>
            <v-tab :key="tab2" class=" text-capitalize caption ">Անձիք</v-tab>

            <v-tab-item key="tab1">
                <BasicTabsDirOfPersons></BasicTabsDirOfPersons>
            </v-tab-item>

            <!-- Persons  (Անձիք)-->

            <v-tab-item key="tab2">
                <v-container fluid pa-1 pt-2 pb-2>
                    <v-row no-gutters>
                        <v-col >
                            <!-- Update button (Նորացնել) -->

                            <div>
                                <v-btn color="pink" width="200" height="32"
                                 outlined class="text-capitalize caption justify-start "
                                 dark @click="getDataMethod">
                                    <v-icon class="text-left" color="dark" size="24" left>mdi-autorenew</v-icon>

                                    <span class="pl-9">Նորացնել</span>
                                </v-btn>
                            </div>
                            <div class="pt-2">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" width="200" class="text-capitalize caption justify-start" height="32" outlined dark v-on="on">
                                            <v-icon size="24" left color="dark">add</v-icon>

                                            <span class="pl-9 pr-8">Ավելացնել</span>
                                            <v-icon right>arrow_drop_down</v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item class="" v-for="(item, index) in items" :key="index" router :to="item.route">
                                            <!--route to nodal -->
                                            <v-list-item-title class=" caption p-0">{{item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                                                        <div class="pt-2">

                                <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32" outlined small dark>
                                    <v-icon left size="24" color="dark">edit</v-icon>
                                    <span class="pl-9">Փոփոխել</span>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col class="pl-5">
                            <div>
                                <v-btn color="pink" class="text-capitalize justify-start  " width="200" height="32" outlined small dark>
                                    <v-icon left class="" size="24" color="dark">delete_forever</v-icon>
                                    <span class="pl-9">Հեռացնել</span>
                                </v-btn>

                            </div>
                                         <div class="pt-2">

                                <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32" outlined small dark>
                                    <v-icon left size="24" color="dark">emoji_people</v-icon>
                                    <span class="pl-9">Կասեցնել</span>
                                </v-btn>
                            </div>
                                                                                  <div class="pt-2">
                                <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32" outlined small dark>
                                    <v-icon left size="24" color="dark">edit</v-icon>
                                    <span>Փոփոխել ծածկագիր</span>
                                </v-btn>
                            </div>
                        </v-col>
                       <v-col class="pl-5">
                            <div>
                                <v-form>                 
                                <v-autocomplete color="pink lighten-2" 
                                item-color="green"
                      label="Որոշիչ"
                    v-model="CHARID"
                     prepend-inner-icon="done_all"
                     :items="DETERMINANTSOFPERSON"
                     success
                     clearable
                     :value="CHARID"
                      item-text="NAME_A"
                       item-value="CHARID" 
                      dense menu-props="auto" 
                     outlined height="32" 
                     class="caption selectLabel"></v-autocomplete> 
                     </v-form>
                            </div>

                            <div class="pt-2">
                                 <v-form>                 
                              <v-autocomplete color="pink lighten-2" 
                     prepend-inner-icon="subtitles"
                     item-color="green"

                      label="Տեսակ"
                    v-model="DOCKIND"
                     :items="DOCDETHOME "
                     success
                     clearable
                     :value="DOCKIND"
                      item-text="NAME_A"
                       item-value="NUMID" 
                      dense menu-props="auto" 
                     outlined height="32" class="caption selectLabel "></v-autocomplete> 
                     </v-form>
                            </div>
                            <div class="heightWidthClass pt-2">
                                <v-form 
                                @submit.prevent
                             
                                >
                                    <v-text-field
                                     success
                                      outlined
                                     v-model="DOCNUM" 
                                     :value="DOCNUM"
                                      label="Փաստաթուղթ" 
                                      dense flat 
                                       class="caption mylabel "
                                       prepend-inner-icon="description"></v-text-field>
                                </v-form>
                            </div>
                        </v-col>
                      <v-col class="pl-5">
                            <div>
                               <v-form 
                                @submit.prevent >
                                    <v-text-field success outlined label="Անուն" 
                                    dense flat v-model="NAME_A" :value="NAME_A" class="caption mylabel" 
                                    prepend-inner-icon="people"></v-text-field>
                                </v-form>
                            </div>

                            <div class="pt-2">
                                <v-form 
                                @submit.prevent >
                                    <v-text-field background-color 
                                    success outlined
                                     label="Ազգանուն" 
                                    dense flat v-model="SNAME_A" 
                                    :value="SNAME_A" prepend-inner-icon="people" 
                                    class="caption mylabel"></v-text-field>
                                </v-form>
                            </div>
                            <div class="heightWidthClass pt-2">
                                 <v-form 
                                @submit.prevent >
                                    <v-text-field success outlined 
                                    label="Անձի կոդ" dense flat
                                     v-model="CUSTOMER" class="caption mylabel"
                                      v-bind:value="CUSTOMER" prepend-inner-icon="people"></v-text-field>
                                </v-form>
                            </div>
                        </v-col>

                        <v-col class="pl-5">
                            <div class="heightWidthClass caption">
                                  <v-form 
                                @submit.prevent >
                                    <v-text-field success outlined
                                     v-model="SOCCART" v-bind:value="SOCCART" 
                                   label="ՀԾՀ" 
                                     dense flat class="caption mylabel" prepend-inner-icon="description"></v-text-field>
                                </v-form>
                            </div>
                            <div class="heightWidthClass pt-2">
                                <v-form 
                                @submit.prevent >
                                    <v-text-field  outlined label="Հեռախոս" dense success color="pink" 
                                      v-model="PHONE" v-bind:value="PHONE" 
                                    flat class="caption mylabel" prepend-inner-icon="phone"></v-text-field>
                                </v-form>
                            </div>

                            <div class="pt-2">
                                <!-- <v-form 
                               >
                                    <v-text-field class="caption mylabel black--text" type="button"
                                    success outlined dense flat label="Դիտել հեռախոսահամարը" prepend-inner-icon="phone"></v-text-field>
                                </v-form> -->
                                <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32" outlined small dark>
                                    <v-icon left size="24" color="dark">phone</v-icon>
                                    <span>Դիտել հեռախոսահամ..</span>
                                </v-btn>
                            </div>
                        </v-col>
<!--dddd-->
<!--aaaaaa-->
                      <v-col class="pl-5">
                            <div>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32" outlined small dark v-on="on">
                                            <v-icon left size="24" color="dark">help</v-icon>

                                            <span class="pl-9 pr-5">ԲՄ հարցում</span>
                                            <v-icon right>arrow_drop_down</v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list style="max-height: 200px" class="overflow-y-auto">
                                        <v-list-item class="" v-for="(item, index) in items3" :key="index">
                                            <v-list-item-title class=" caption">{{item}}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>

                            <div class="pt-2">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" width="200" class="text-capitalize justify-start" height="32" outlined small dark v-on="on">
                                            <v-icon left size="24" color="dark">help</v-icon>

                                            <span>ԲՄ կրկնակի հարցում</span>
                                            <v-icon>arrow_drop_down</v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list style="max-height: 200px" class="overflow-y-auto">
                                        <v-list-item class="" v-for="(item, index) in items3" :key="index">
                                            <v-list-item-title class=" caption">{{item}}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>

                            <div>
                                <DirectoryOfPersonsPopup />

                            </div>

                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
        </v-tabs>

    </v-row>

    <!-- <TableDirectoryOfPersons ></TableDirectoryOfPersons> -->
    <!-- <DataTable :getData="getData"></DataTable> -->
    <!-- <DataTable :data="getDataFunction" :columns="gridColumns"></DataTable> -->
    <Datatable222></Datatable222>

</v-container>
</template>

<script>

import BasicTabsDirOfPersons from "../components/DirectoryOfPersons/BasicTabsDirOfPersons";
// @ is an alias to /src
import DirectoryOfPersonsPopup from "../components/DirectoryOfPersons/DirectoryOfPersonsPopup";
// import TableDirectoryOfPersons from '../components/DirectoryOfPersons/TableDirectoryOfPersons'
// import DataTable from '../components/DirectoryOfPersons/DataTable'
import Datatable222 from "../components/DirectoryOfPersons/Datatable222";
import {mapActions,mapGetters} from 'vuex'
export default {
    components: {
        DirectoryOfPersonsPopup,
        BasicTabsDirOfPersons,
        // TableDirectoryOfPersons,
        // DataTable
        Datatable222
    },
    data() {
        return {
             
            // DocDetHome: [],

           
            // getData: [],

            search: "",

             CUSTOMER: "",
            SOCCART: "",
            DOCKIND: "",
            CHARID: "",
            NAME_A: "",
            SNAME_A: "",
            DOCNUM: "",
            PHONE:"",
           

            url: {
                // Նորացնելու Api
                getData: "http://192.168.100.153:8000/customer/customer-list",
                // 8021 port
                // getData: "http://192.168.100.153:8021/customer/customer-list",

                
            },
            tab1: null,
            tab2: null,
            items: [{
                    title: "Ֆիզիկական անձ",
                    route: "/AddPersons"
                },
                {
                    title: "Անհատ ձեռնարակատեր",
                    route: "/AddPersons"
                },
                {
                    title: "Կազմակերպություն",
                    route: "/AddPersons"
                }
            ],
           
            
            items3: ["Ապահովադրի", "Վարորդի (BM01)"]
        };
    },
    computed: {
          getDataFunction() {
            return this.$store.state.getData
        },
        ...mapGetters([
            // determinantsOfPerson.js
            'DETERMINANTSOFPERSON',
            // docDetHome.js
            'DOCDETHOME',
        ])
    },
mounted() {
    // determinantsOfPerson.js
    this.GET_DETERMINANTS_OF_PERSON();
    // docDetHome.js
    this.GET_DOCDETHOME();
     // organizationalType.js
  this. GET_ORGANIZATIONALTYPE_ACTIONS();
  // activityType.js
  this.GET_ACTIVITITYPE_ACTIONS();
  // residence.js
  this.GET_RESIDENCE_ACTIONS();
        //    registeredOrgan.js 
  this.GET_REGISTEREDORGAN_ACTIONS();
       //    leadershipPosition.JS
 this.GET_LIDERSHIPPOSITION_ACTIONS();
         //    ստորաբաժանման առկայություն  brnType .js 
 this.GET_BRNTYPE_ACTIONS()

},

    methods: {
        
...mapActions([
    // determinantsOfPerson.js
    'GET_DETERMINANTS_OF_PERSON',
    // docDetHome.js
    'GET_DOCDETHOME',
    // organizationalType.js
    'GET_ORGANIZATIONALTYPE_ACTIONS',
  // activityType.js
  'GET_ACTIVITITYPE_ACTIONS',
  // residence.js
  'GET_RESIDENCE_ACTIONS',
        //    registeredOrgan.js 
  'GET_REGISTEREDORGAN_ACTIONS',

        //    leadershipPosition.JS
  'GET_LIDERSHIPPOSITION_ACTIONS',
        //    ստորաբաժանման առկայություն  brnType .js 
  'GET_BRNTYPE_ACTIONS'

 

]),

                getDataMethod() {
            const config = {
                headers: this.headers
            };

            if (
                this.CUSTOMER === "" &&
                this.SOCCART === "" &&
                this.DOCKIND === "" &&
                this.CHARID === "" &&
                this.NAME_A === "" && 
                this.SNAME_A === "" &&
                this.DOCNUM === "" &&
                this.PHONE ===""
            ) {
                this.axios
                    .get(
                        this.url.getData, {
                            params: {
                                // ISALL: 0,
                                CUSTOMER: this.CUSTOMER,
                                SOCCART: this.SOCCART,
                                DOCKIND: this.DOCKIND,
                                CHARID: this.CHARID,
                                NAME_A: this.NAME_A,
                                SNAME_A: this.SNAME_A,
                                DOCNUM: this.DOCNUM,
                               PHONE: this.PHONE 
                            }
                        },
                        config
                    )
                    .then(responce => {
                        console.log(responce.data);
                        this.$store.state.getData = responce.data.result_list;
                        this.$store.state.myTable = true;
                    })
                    .catch(function (error) {
                        alert("կապի խափանում");
                        console.log(error);
                    });
            } else {
                this.axios
                    .get(
                        this.url.getData, {
                            params: {
                                // ISALL: 1,
                                CUSTOMER: this.CUSTOMER,
                                SOCCART: this.SOCCART,
                                DOCKIND: this.DOCKIND,
                                CHARID: this.CHARID,
                                NAME_A: this.NAME_A,
                                SNAME_A: this.SNAME_A,
                                DOCNUM: this.DOCNUM,
                               PHONE: this.PHONE 

                            }
                        },
                        config
                    )
                    .then(responce => {
                        console.log(responce.data);
                        this.$store.state.getData = responce.data.result_list;
                        this.$store.state.myTable = true;
                    })
                    .catch(function (error) {
                        alert("կապի խափանում");
                        console.log(error);
                    });
            }
        }
    }
};
</script>

<style>
/* v-btn-toggle {
  flex-direction: column;
}  */

.v-menu__content {
    border-radius: 0px !important;
}

.v-list.v-sheet.v-sheet--tile.theme--light {
    border-radius: 0px 0px !important;
    border: none;
    padding: 0px;
}

.v-tab--active {
    background-color: white;
    /* color: #E91E63  !important; */
    /* border: 1px solid #8BC34A; */
    border-radius: 10px 10px 0px 0px !important;
}

/* .v-tab--active:hover{

  background-color: white !important;
   border-radius: 10px 15px 0px 0px  !important;
} */

.v-tabs-bar.theme--dark .v-tab:not(.v-tab--active):not(.v-tab--disabled):hover {
    color: white !important;
    opacity: 1 !important;
}

.h4MyClass {
    color: white;
    height: 32px;
}

.heightWidthClass {
    width: 200px;
}

/* .v-icon {
    color: #E91E63 !important;

    } */
/* inputneri outlined border */
.v-application .success--text {
    color: #f06292 !important;
    caret-color: #e91e63 !important;
}

.v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
}

.v-text-field input {
    padding: 0px !important;
}

.v-form {
    height: 32px !important;
}

/* verevi menui dzax dasavurvacutyan hamar */

.col {
    flex-grow: initial !important;
}

/* th {
  border: 1px  solid #8bc34a  !important ;
  border-bottom: 2px solid red !important;
   background-color: #f5eeee !important ;

} */
td {
    border: 1px solid rgb(179, 176, 176);
    vertical-align:middle !important;
    text-align:center;
     min-width: 150px;
  padding: 10px 20px;
    /* width: 300px !important;
  resize: both !important;
  overflow: auto !important; */
}


/* table {
  border-radius: 3px;
   min-height: auto !important;

} */

.theme--light.v-data-table thead tr th {
    /* background: #E91E63 !important */
text-align:center !important;
    background-color: #f5eeee !important;
    border: 1px solid #8bc34a !important;
   
  padding: 10px !important;
  width: 250px !important;
  /* resize: both !important;
  overflow: auto !important; */


   min-width: 150px !important;
  /* padding: 10px 20px !important; */
}
/* custom labe lstyle */
       .mylabel label.v-label.theme--light{
   /* font-style:italic; */
   text-align: center !important;
    text-indent: 22px !important;
    line-height: 0.9;
   font-size: 12px;
   color:grey !important
}
.selectLabel label.v-label.theme--light{
   /* font-style:italic; */
   text-align: center !important;
    text-indent: 22px !important;
    line-height: 0.9;
   font-size: 12px;
   /* color:green !important */
}
.mydivResize {
 border: 1px solid  #f5eeee !important;;
  padding: 12px; 
  width: 150px;
  resize: both;
  /* margin:0px !important; */

  overflow: auto;
}


</style>
