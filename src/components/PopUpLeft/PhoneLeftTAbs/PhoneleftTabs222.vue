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

                            <tr v-for="phone in getCUSTPHONE" :key="phone.ID" :phone="phone.ID">
                                <td>
                                    <input type="number" name="" :ID="phone.ID" disabled v-model="phone.ID" value="phone.ID">

                                </td>

                                <td>

                                    <v-checkbox v-model="phone.STATE" :STATE="phone.STATE" color="pink lighten-2" :value="phone.STATE"></v-checkbox>

                                </td>
                                <td>

                                    <div>

                                        <select class=" selectMy  " prepend-icon="" :KIND="phone.KIND" v-model="phone.KIND">

                                            <option :value="kind.NUMID" class="black--text caption select" id="selectMy"
                                             v-for="kind in GETPHONEKIND " :key="kind.NUMID"> {{kind.NAME_A}}

                                            </option>

                                        </select>

                                    </div>

                                </td>

                                <td>

                                    <select class=" selectMy  " :CODE="phone.CODE" v-model="phone.CODE">

                                        <option :value="code.CHARID" class="black--text caption select" id="selectMy"
                                         v-for="code in GETPHONECODE " :key="code.NUMID"> {{ code.CHARID}} {{code.NAME_A}}

                                        </option>

                                    </select>

                                </td>

                                <td>

                                    <input type="Number" name="" :PHONE="phone.PHONE" v-model="phone.PHONE" value="phone.PHONE">

                                </td>

                                <td>

                                    <v-checkbox v-model="phone.ISSMS" color="pink lighten-2" :ISSMS="phone.ISSMS" :value="phone.ISSMS"></v-checkbox>

                                </td>

                                <!-- <td>{{phone.NOTE}} </td> -->

                                <td>

                                    <input type="text" name="" v-model="phone.NOTE" :NOT="phone.NOTE" value="phone.NOTE">

                                </td>

                                <!-- <td>{{phone.ONLUSER}} </td> -->

                                <td>

                                    <input type="text" name="" v-model="phone.ONLUSER" disabled :ONLUSER="phone.ONLUSER" value="phone.ONLUSER">

                                </td>

                                <!-- <td>{{phone.TSUSER}} </td> -->

                                <td>

                                    <input type="text" name="" v-model="phone.TSUSER" :TSUSER="phone.TSUSER" disabled value="phone.TSUSER">

                                </td>

                            </tr>

                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>

    </v-container>

</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    name: 'PhoneleftTabs222',
    data() {
        return {

            ID: "",
            KIND: "",
            CODE: "",
            PHONE: "",
            ISSMS: "",
            STATE: Number,
            NOTE: "",
            TSUSER: "",
            CUSTOMER: "",

        }

    },

    computed: {
        ...mapGetters([
    'GETPHONECODE',
    'GETPHONEKIND',
    
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

        // getPHONEKIND() {
        //     return this.$store.state.PHONEKIND
        // },

    },
    created: function () {
        console.log(this.$attrs['phone']) // And here is - in $attrs object
    },
    mounted () {
 // Հեռախոսահամրների կոդեր
          this.GET_PHONECODE_API();

// Հեռախոսահամրների տեսակներ
          this.GET_PHONEKIND_API();
    },
    // ID, STATE, KIND, CODE, PHONE, ISSMS, NOTE, ONLUSER, TSUSER
    methods: {

...mapActions([
     'GET_PHONECODE_API',

     'GET_PHONEKIND_API'
]),

        getCustomerDataMethod(
            ID, STATE, KIND, CODE, PHONE, ISSMS, NOTE, ONLUSER, TSUSER) {

            var formdata = new FormData();
            formdata.append("ID", ID);
            formdata.append("KIND", KIND);
            formdata.append("CODE", CODE);
            formdata.append("PHONE", PHONE);
            formdata.append("ISSMS", Number(ISSMS));
            formdata.append("STATE", Number(STATE));
            formdata.append("ONLUSER", ONLUSER);
            formdata.append("NOTE", NOTE);
            formdata.append("TSUSER", TSUSER);

            this.axios
                .post(
                    this.url.CUSTPHONEUPDATE, formdata
                    // myObjStr
                )
                .then(responce => {
                    // console.log(responce.body)
                    console.log(responce.data)
                    // this.$store.state.CUSTPHONE = responce.data.CUSTPHONE;

                })

                .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error.message);
                });

        },

    },
}
</script>

<style>

</style>
