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
                <v-container fluid pa-1>
                    <v-row no-gutters>
                        <v-col>
                            <!-- Update button (Նորացնել) -->

                            <div>
                                <v-btn color="pink" width="200" height="32" outlined
                                       class="text-capitalize caption justify-start "
                                       dark @click="getDataMethod">
                                    <v-icon class="text-left" color="dark" size="24" left>
                                        mdi-autorenew
                                    </v-icon>

                                    <span class="pl-9">Նորացնել</span>
                                </v-btn>
                            </div>
                            <div class="pt-2">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" width="200"
                                               class="text-capitalize caption justify-start"
                                               height="32" outlined dark v-on="on">
                                            <v-icon size="24" left color="dark">add</v-icon>

                                            <span class="pl-9 pr-8">Ավելացնել</span>
                                            <v-icon right>arrow_drop_down</v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item class="pink" v-for="(item, index) in items"
                                                     :key="index" router :to="item.route">
                                            <!--route to nodal -->
                                            <v-list-item-title class="white--text caption p-0">
                                                {{item.title }}
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                            <div class="pt-2">

                                <v-btn color="pink" class="text-capitalize justify-start"
                                       width="200" height="32" outlined small dark>
                                    <v-icon left size="24" color="dark">edit</v-icon>
                                    <span class="pl-9">Փոփոխել</span>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                <v-btn color="pink" class="text-capitalize justify-start  "
                                       width="200" height="32" outlined small dark>
                                    <v-icon left class="" size="24" color="dark">delete_forever
                                    </v-icon>
                                    <span class="pl-9">Հեռացնել</span>
                                </v-btn>

                            </div>

<!--                            <div class="pt-2">-->

<!--                                <v-btn color="pink" class="text-capitalize justify-start"-->
<!--                                       width="200" height="32" outlined small dark>-->
<!--                                    <v-icon left size="24" color="dark">emoji_people</v-icon>-->
<!--                                    <span class="pl-9">Կասեցնել</span>-->
<!--                                </v-btn>-->
<!--                            </div>-->
<!--                            <div class="pt-2">-->
<!--                                <v-btn color="pink" class="text-capitalize justify-start"-->
<!--                                       width="200" height="32" outlined small dark>-->
<!--                                    <v-icon left size="24" color="dark">edit</v-icon>-->
<!--                                    <span>Փոփոխել ծածկագիր</span>-->
<!--                                </v-btn>-->
<!--                            </div>-->
                        </v-col>
                        <v-col class="pt-0">
                            <div>
                                <!-- <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" width="200" class="text-capitalize justify-start" height="32" outlined small dark v-on="on">
                                            <v-icon left size="24" color="dark">done_all</v-icon>

                                            <span class="pl-9 pr-10">Որոշիչ</span>
                                            <v-icon right>arrow_drop_down</v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list style="max-height: 200px" class="overflow-y-auto">
                                        <v-list-item class="pink"
                                         v-for="determinants in DETERMINANTSOFPERSON" :key="determinants.NUMID">
                                            <v-list-item-title class="white--text caption p-0">{{determinants.NAME_A}}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu> -->
                                <v-form>                 
                                <v-autocomplete color="pink lighten-2" 
                      label="Որոշիչ"
                    v-model="CHARID"
                     :items="DETERMINANTSOFPERSON"
                     success
                      item-text="NAME_A"
                       item-value="CHARID" 
                      dense menu-props="auto" 
                     outlined height="32" class="caption pt-2"></v-autocomplete> 
</v-form>


                            </div>
                            <div class="pt-2">
                                <!-- <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" width="200" class="text-capitalize justify-start" height="32" outlined small dark  v-on="on">
                                            <v-icon left size="24" color="dark">subtitles</v-icon>

                                            <span class="pl-9 pr-10">Տեսակ</span>
                                            <v-icon right>arrow_drop_down</v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list style="max-height: 200px" class="overflow-y-auto">
                                        <v-list-item class="pink" v-for="docDetHome in DOCDETHOME" :key="docDetHome.NUMID">
                                            <v-list-item-title class="white--text caption p-0"
                                            v-model="DOCNUM" :value="docDetHome"
                                            
                                            >{{docDetHome.NAME_A}}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu> -->
                                 <v-form>                 
                              <v-autocomplete color="pink lighten-2" 
                      label="Տեսակ"
                    v-model="CHARID"
                     :items="DOCDETHOME"
                     success
                      item-text="NAME_A"
                       item-value="CHARID" 
                      dense menu-props="auto" 
                     outlined height="32" class="caption pt-2"></v-autocomplete> 
</v-form>
                            </div>
                            <div class="heightWidthClass pt-2">
                                <v-form 
                                @submit.prevent
                             
                                >
                                    <v-text-field success outlined
                                     v-model="DOCNUM" :value="DOCNUM"
                                      placeholder="Փաստաթուղթ" 
                                      dense flat autofocus class="caption pink--text" prepend-inner-icon="description"></v-text-field>
                                </v-form>
                            </div>
                        </v-col>
                        <v-col>
                            <div v-for="input in inputItems" :key="input.id">
                               <v-form
                                @submit.prevent >

                                    <v-text-field success outlined placeholder="input.placeholder"
                                    dense flat v-model="input.model" :value="input.model"
                                                  class="caption"
                                    prepend-inner-icon="input.icon"></v-text-field>
                                </v-form>
                            </div>

<!--                            <div>-->
<!--                                <v-form-->
<!--                                @submit.prevent >-->
<!--                                    <v-text-field background-color-->
<!--                                    success outlined placeholder="Ազգանուն"-->
<!--                                    dense flat v-model="SNAME_A" :value="SNAME_A" prepend-inner-icon="people"-->
<!--                                    class="caption"></v-text-field>-->
<!--                                </v-form>-->
<!--                            </div>-->
<!--                            <div class="heightWidthClass ">-->
<!--                                 <v-form-->
<!--                                @submit.prevent >-->
<!--                                    <v-text-field success outlined placeholder="Անձի կոդ" dense flat-->
<!--                                     v-model="CUSTOMER" class="caption" v-bind:value="CUSTOMER" prepend-inner-icon="people"></v-text-field>-->
<!--                                </v-form>-->
<!--                            </div>-->
                        </v-col>

                        <v-col>
                            <div class="heightWidthClass caption">
                                  <v-form 
                                @submit.prevent >
                                    <v-text-field success outlined v-model="SOCCART" v-bind:value="SOCCART" placeholder="ՀԾՀ" dense flat class="caption" prepend-inner-icon="description"></v-text-field>
                                </v-form>
                            </div>
                            <div class="heightWidthClass caption">
                                <v-form 
                                @submit.prevent >
                                    <v-text-field outlined placeholder="Հեռախոս" dense success color="pink" flat class="caption" prepend-inner-icon="phone"></v-text-field>
                                </v-form>
                            </div>

                            <div class="heightWidthClass caption">
                                <v-form 
                                @submit.prevent >
                                    <v-text-field class="caption black--text" success outlined dense flat placeholder="Դիտել հեռախոսահամարը" prepend-inner-icon="phone"></v-text-field>
                                </v-form>
                            </div>
                        </v-col>

                        <v-col>
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
                                        <v-list-item class="pink" v-for="(item, index) in items3" :key="index">
                                            <v-list-item-title class="white--text caption">{{item}}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>

                            <div>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="pink" width="200" class="text-capitalize justify-start" height="32" outlined small dark v-on="on">
                                            <v-icon left size="24" color="dark">help</v-icon>

                                            <span>ԲՄ կրկնակի հարցում</span>
                                            <v-icon>arrow_drop_down</v-icon>

                                        </v-btn>
                                    </template>
                                    <v-list style="max-height: 200px" class="overflow-y-auto">
                                        <v-list-item class="pink" v-for="(item, index) in items3" :key="index">
                                            <v-list-item-title class="white--text caption">{{item}}</v-list-item-title>
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
    <!-- <DataTable ></DataTable> -->
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
            inputItems: [
                {model:this.CUSTOMER, placeholder: "Անձի կոդ", icon: 'people'},
                {model: this.NAME_A, placeholder: "Անուն", icon: 'people'},
                {model: this.SNAME_A, placeholder: "Ազգանուն", icon: 'people'},


            ],
            // //   name      Հեռացնել           Կասեցնել     Փոփոխել ծածկագիր
            //   icon     delete_forever, emoji_peopl,       eedit
            //   class     pl-9        ,    pl-9        , ---
            buttonItems:[
                {buttonName:"Հեռացնել" }
            ]
            search: "",
            // CUSTOMER: "",
            // NAME_A: "",

            // SNAME_A: "",
            SOCCART: "",
            DOCKIND: "",
            CHARID: "",

            DOCNUM: "",

            url: {
                // Նորացնելու Api
                getData: "http://192.168.100.153:8000/customer/customer-cur",
                // 8021 port
                // getData: "http://192.168.100.153:8021/customer/customer-cur",

                
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
},

    methods: {
        
...mapActions([
    // determinantsOfPerson.js
    'GET_DETERMINANTS_OF_PERSON',
    // docDetHome.js
    'GET_DOCDETHOME'
]),

                getDataMethod() {
            const config = {
                headers: this.headers
            };

            if (
                this.inputItems.model.CUSTOMER === "" &&
                this.inputItems.model.NAME_A === "" &&
                this.inputItems.model.SNAME_A === "" &&
                this.SOCCART === "" &&
                this.DOCKIND === "" &&
                this.CHARID === "" &&

                this.DOCNUM === ""
            ) {
                this.axios
                    .get(
                        this.url.getData, {
                            params: {
                                // ISALL: 0,
                                CUSTOMER: this.inputItems.model.CUSTOMER,
                                NAME_A: this.inputItems.model.NAME_A,
                                SNAME_A: this.inputItems.model.SNAME_A,
                                SOCCART: this.SOCCART,
                                DOCKIND: this.DOCKIND,
                                CHARID: this.CHARID,

                                DOCNUM: this.DOCNUM
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
                                // CUSTOMER: this.CUSTOMER,
                                // SOCCART: this.SOCCART,
                                // DOCKIND: this.DOCKIND,
                                // CHARID: this.CHARID,
                                // NAME_A: this.NAME_A,
                                // SNAME_A: this.SNAME_A,
                                // DOCNUM: this.DOCNUM
                                CUSTOMER: this.inputItems.model.CUSTOMER,
                                NAME_A: this.inputItems.model.NAME_A,
                                SNAME_A: this.inputItems.model.SNAME_A,
                                SOCCART: this.SOCCART,
                                DOCKIND: this.DOCKIND,
                                CHARID: this.CHARID,

                                DOCNUM: this.DOCNUM
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

/* .col {
    flex-grow: initial !important;
} */

/* th {
  border: 1px  solid #8bc34a  !important ;
  border-bottom: 2px solid red !important;
   background-color: #f5eeee !important ;

} */
td {
    border: 1px solid rgb(179, 176, 176);
}

/* table {
  border: 3px solid #8bc34a !important ;
  border-radius: 3px;
   min-height: auto !important;

} */

.theme--light.v-data-table thead tr th {
    /* background: #E91E63 !important */

    background-color: #f5eeee !important;
    border: 1px solid #8bc34a !important;
   
  padding: 20px !important;
  width: 300px !important;
  resize: both !important;
  overflow: auto !important;
}
</style>
