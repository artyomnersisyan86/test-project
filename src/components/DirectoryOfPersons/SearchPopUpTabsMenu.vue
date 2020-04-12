<template>
    <div>
        <v-container fluid pa-1>
            <v-row no-gutters class="pa-0 ">
                <v-col class="">
                    <div>
                        <v-btn color="pink" width="200" height="32" outlined class="text-capitalize justify-start"
                                small dark>
                            <v-icon size="24" color="dark" left>mdi-autorenew</v-icon>
                            <span class="pl-9">Նորացնել</span>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn @click="getCustomerDataMethod()" color="pink" class="text-capitalize justify-start"
                               width="200" height="32" outlined small dark>
                            <v-icon size="24" left color="dark">save</v-icon>
                            <span class="pl-9">Հիշել</span>
                        </v-btn>
                    </div>
                    <div>
                        <v-menu disabled offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn color="pink" width="200" class="text-capitalize justify-start" height="32"
                                        outlined small dark v-on="on">
                                    <v-icon size="24" left color="dark">add</v-icon>
                                    <span class="pl-9">Ավելացնել</span>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item class="deep-purple">
                                    <v-list-item-title class="white--text p-0"></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-col>
                <v-col class="pl-5">
                    <div>
                        <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32"
                                outlined small dark>
                            <v-icon size="24" left color="dark">delete_forever</v-icon>
                            <span class="pl-9">Հեռացնել</span>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32" outlined
                                small dark>
                            <v-icon size="24" left color="dark">emoji_people</v-icon>
                            <span class="pl-9">Կասեցնել</span>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32" outlined
                                small dark>
                            <v-icon size="24" left color="dark">remove_red_eye</v-icon>
                            <span class="pl-2">Կարդալ ID Card-ից</span>
                        </v-btn>
                    </div>
                </v-col>
                <v-col class="pl-5">
                    <div>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn color="pink" class="text-capitalize justify-start" width="215" height="32"
                                        outlined small dark v-on="on">
                                    <v-icon size="24" left color="dark">help</v-icon>
                                    <span class="pl-9">ԲՄ հարցում</span>
                                </v-btn>
                            </template>
                            <v-list class="overflow-y-auto">
                                <v-list-item class="pink" v-for="(item, index) in items3" :key="index">
                                    <v-list-item-title class="white--text caption">{{item}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <div>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn color="pink" width="215" class="text-capitalize justify-start" height="32"
                                        outlined small dark v-on="on">
                                    <v-icon size="24" left color="dark">help</v-icon>
                                    <span class="pl-2">ԲՄ կրկնակի հարցում</span>
                                </v-btn>
                            </template>
                            <v-list class="overflow-y-auto">
                                <v-list-item class="deep-purple" v-for="(item, index) in items3" :key="index">
                                    <v-list-item-title class="white--text p-0">{{item}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <div>
                        <v-btn color="pink" class="text-capitalize" width="215" height="32" outlined small dark>
                            <v-icon left color="dark">phone</v-icon>
                            <span>Դիտել հեռախոսահամարը</span>
                        </v-btn>
                    </div>
                </v-col>
                <v-col class="pl-5">
                    <div>
                        <v-btn color="pink" class="text-capitalize justify-start" width="310" height="32"
                                outlined small dark>
                            <v-icon size="24" left color="dark">people_alt</v-icon>
                            <span>Համեմատել ահաբեկիչների ցանկի հետ</span>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn color="pink" class="text-capitalize justify-start" width="310" height="32"
                                outlined small dark>
                            <v-icon size="24" left color="dark">cancel</v-icon>
                            <span class="pl-9">Փակել առանց ստուգման</span>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items3: [],
                phone1: '',
                url: {
                    CUSTPHONEUPDATE: "http://192.168.100.153:8000/customer/custphone-update"
                }
            }
        },
        mounted() {
            let arr = this.getCUSTPHONE;
            for (let i = 0; i < arr.length; i++) {
                this.phone1 = arr[i];
                console.log(this.phone1)
            }
        },
        computed: {
            getCUSTPHONE() {
                return this.$store.state.CUSTPHONE
            },
        },
        methods: {
            getCustomerDataMethod() {
                var gridData = this.$store.state.CUSTPHONE;var rowData;
                for (rowData of gridData) {
                    var formdata = new FormData();
                    formdata.append("ID", rowData.ID);
                    formdata.append("KIND", rowData.KIND);
                    formdata.append("CODE", rowData.CODE);
                    formdata.append("PHONE", rowData.PHONE);
                    formdata.append("ISSMS", Number(rowData.ISSMS));
                    formdata.append("STATE", Number(rowData.STATE));
                    formdata.append("ONLUSER", rowData.ONLUSER);
                    formdata.append("NOTE", rowData.NOTE);
                    formdata.append("TSUSER", rowData.TSUSER);
                    this.axios.post(this.url.CUSTPHONEUPDATE, formdata).then(responce => {
                        console.log(responce.data)
                    }).catch(function (error) {
                        alert("կապի խափանում");
                        console.log(error.message);
                    });
                }
            },
        },
    }
</script>

