<template>
    <div>
    
        <v-container fluid pa-0 pl-1>
    
            <v-row no-gutters>
    
                <v-col cols="12" md="12" sm="6" xs="6">
    
                    <v-system-bar color="pink lighten-2" dark>
    
                        <v-icon>phone</v-icon>
    
                        <span>Հեռախոսահամարներ</span>
    
    
    
                    </v-system-bar>
    
                </v-col>
    
            </v-row>
    
            <v-row no-gutters>
    
    
    
                <v-col cols="12" md="12" sm="6" xs="6">
    
                    <v-simple-table fixed-header dense>
    
                        <template v-slot:default>
    
                            <thead>
    
                                <tr>
    
                                    <!-- <th>click</th> -->
    
                                    <th> Կոդ </th>
    
                                    <th> Ակտիվ է </th>
    
                                    <th> Տեսակ </th>
    
                                    <th> Օպերատոր </th>
    
                                    <th> Հեռաղոսահամար </th>
    
                                    <th> Ողարկել sms հաղորդագրություն</th>
    
                                    <th> Նշումներ </th>
    
                                    <th> Մուտքագրող գործակալ </th>
    
                                    <th> Մուտքագրող </th>
    
                                </tr>
    
                            </thead>
    
                            <tbody>
    
                                <!--                         
    
    
    
                                         :ID="phone.ID"                             
    
              :STATE="phone.STATE"
    
               :KIND="phone.KIND"
    
                :CODE="phone.CODE"
    
                :PHONE="phone.PHONE"
    
             :ISSMS="phone.ISSMS"
    
              :NOTE="phone.NOTE"
    
              :ONLUSER="phone.ONLUSER"
    
              :TSUSER="phone.TSUSER" -->
    
                                <tr v-for="phone in getCUSTPHONE" :key="phone.ID" :ID="phone.ID">
    
                                    <!-- <td>{{phone.ID}} </td> -->
    
    
    
                                    <td>
    
    
    
                                        <!-- <v-form>                              
    
    
    
                                       <v-text-field v-model="phone.ID" color="pink lighten-2" :value="phone.ID"></v-text-field>
    
        </v-form> -->
    
    
    
                                        <input type="text" name="" :ID="phone.ID" v-model="phone.ID" value="phone.ID">
    
    
    
                                    </td>
    
    
    
                                    <!-- <td> {{phone.STATE}} </td> -->
    
    
    
                                    <td>
    
    
    
                                        <v-checkbox v-model="phone.STATE" color="pink lighten-2" :STATE="phone.STATE" :value="phone.STATE"></v-checkbox>
    
    
    
                                    </td>
    
    
    
                                    <!-- <td>{{phone.KIND}} </td> -->
    
                                    <td>
    
                                        <div>
    
    
    
                                            <select class=" selectMy  " prepend-icon="" :KIND="phone.KIND" v-model="phone.KIND">
    
    
    
                                                <option :value="kind.NUMID" class="black--text caption select" id="selectMy" v-for="kind in getPHONEKIND " :key="kind.NUMID"> {{kind.NAME_A}}
    
    
    
                                                </option>
    
    
    
                                            </select>
    
    
    
                                        </div>
    
    
    
                                    </td>
    
    
    
                                    <td>
    
    
    
                                        <select class=" selectMy  " :CODE="phone.CODE" v-model="phone.CODE">
    
    
    
                                            <option :value="code.CHARID" class="black--text caption select"
                                             id="selectMy" v-for="code in GETPHONECODE " :key="code.NUMID"> {{ code.CHARID}} {{code.NAME_A}}
    
    
    
                                            </option>
    
    
    
                                        </select>
    
    
    
                                    </td>
    
    
    
                                    <!-- <td>{{phone.PHONE}} </td> -->
    
                                    <td>
    
                                        <input type="text" name="" v-model="phone.PHONE" :PHONE="phone.PHONE" value="phone.PHONE">
    
    
    
                                    </td>
    
    
    
                                    <!-- <td>{{phone.ISSMS}} </td> -->
    
    
    
                                    <td>
    
    
    
                                        <v-checkbox v-model="phone.ISSMS" color="pink lighten-2" :ISSMS="phone.ISSMS" :value="phone.ISSMS"></v-checkbox>
    
    
    
                                    </td>
    
    
    
                                    <!-- <td>{{phone.NOTE}} </td> -->
    
    
    
                                    <td>
    
                                        <input type="text" name="" v-model="phone.NOTE" :NOTE="phone.NOTE" value="phone.NOTE">
    
                                    </td>
    
                                    <!-- <td>{{phone.ONLUSER}} </td> -->
    
                                    <td>
    
                                        <input type="text" name="" v-model="phone.ONLUSER" :ONLUSER="phone.ONLUSER" value="phone.ONLUSER">
    
                                    </td>
    
    
    
                                    <!-- <td>{{phone.TSUSER}} </td> -->
    
                                    <td>
    
                                        <input type="text" name="" v-model="phone.TSUSER" :TSUSER="phone.TSUSER" value="phone.TSUSER">
    
                                    </td>
    
    
    
                                </tr>
    
    
    
                            </tbody>
</template>
                </v-simple-table>
            </v-col>

            <v-btn @click="getCustomerDataMethod">
                <span>update</span>
                <v-icon></v-icon>
            </v-btn>

        </v-row>
    </v-container>
    <!-- phone.ID,                             
          phone.STATE,
            phone.KIND,
            phone.CODE,
            phone.PHONE,
           phone.ISSMS,
            phone.NOTE,
            phone.ONLUSER,
            phone.TSUSER
 -->
</div>
</template>

<script>
import {mapGetters,} from 'vuex'
export default {
    name: 'PhoneleftTabs',
    data() {
        return {

            ID: "",
            KIND: "",
            CODE: "",
            PHONE: "",
            ISSMS: "",
            STATE: "",
            NOTE: "",
            TSUSER: "",

            url: {
                CUSTPHONEUPDATE: "http://192.168.100.153:8000/customer/custphone-update"
            }

            //   "CUSTPHONE": [
            //         {
            //             "ID": 1433846,
            //             "STATE": 1,
            //             "KIND": 1,

            //             "CODE": "093",
            //             "PHONE": "766419",

            //             "ISSMS": 0,
            //             "NOTE": "None",
            //             "ONLUSER": "Online",
            //             "TSUSER": "SQLDB\\Administrator"
            //         },
            //   ],

            // Phone Code
            //  "data": [
            //         {
            //             "NAME_A": "Հեռախոսի կոդեր",
            //             "CHARID": null,
            //             "NUMID": -1,
            //             "SUBSYS": null
            //         }
            //  ]
            // --------------------------------------
            // PHONEKND
            //   "data": [
            //         {
            //             "NAME_A": "Տիպ",
            //             "CHARID": null,
            //             "NUMID": -1,
            //             "SUBSYS": null
            //         },
            //   ]

        }

    },

    computed: {

...mapGetters([
    'GETPHONECODE'
]),

        //  store.js -ից եկած տվյալներ call POPUPLeftTabs
        // getPhoneCodeData() {
        //     return this.$store.state.getPhoneCode
        // },

        // store.js -ից եկած տվյալներ call POPUPLeftTabs

        getCUSTPHONE() {
            return this.$store.state.CUSTPHONE
        },
        // store.js -ից եկած տվյալներ call POPUPLeftTabs

        getPHONEKIND() {
            return this.$store.state.PHONEKIND
        },

    },
    // mounted () {
    //    this.GET_PHONECODE_FROM_API();
    // },
    methods: {
// ...mapActions([
//     'GET_PHONECODE_FROM_API'
// ]),
        getCustomerDataMethod() {

            if (
                this.ID,
                this.STATE,
                this.KIND,
                this.CODE,
                this.PHONE,
                this.ISSMS,
                this.NOTE,
                this.ONLUSER,
                this.TSUSER) {
                this.axios
                    .post(
                        this.url.CUSTPHONEUPDATE, {
                            params: {
                                // ISALL: 0
                                ID: this.ID,
                                STATE: this.STATE,
                                KIND: this.KIND,
                                CODE: this.CODE,
                                PHONE: this.PHONE,
                                ISSMS: this.ISSMS,
                                NOTE: this.NOTE,
                                ONLUSER: this.ONLUSER,
                                TSUSER: this.TSUSER
                            }
                        },

                    )
                    .then(responce => {
                        console.log(responce.data);
                        this.$store.state.CUSTPHONE = responce.data;
                        console.log(this.$store.state.CUSTPHONE)
                    })
                    .catch(function(error) {
                        alert("կապի խափանում");
                        console.log(error);
                    });
            } else {
                this.axios
                    .post(
                        this.url.CUSTPHONEUPDATE, {
                            params: {
                                // ISALL: 1,
                                ID: this.ID,
                                STATE: this.STATE,
                                KIND: this.KIND,
                                CODE: this.CODE,
                                PHONE: this.PHONE,
                                ISSMS: this.ISSMS,
                                NOTE: this.NOTE,
                                ONLUSER: this.ONLUSER,
                                TSUSER: this.TSUSER

                            }
                        },
                    )
                    .then(responce => {
                        console.log(responce.data);
                        this.$store.state.CUSTPHONE = responce.data;

                    })
                    .catch(function(error) {
                        alert("կապի խափանում");
                        console.log(error);
                    });
            }
        }
    }

}

//////////////////////////////
</script>

<style>

</style>
