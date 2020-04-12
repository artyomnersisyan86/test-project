<template>

    <v-container fluid pa-0>
        <v-row no-gutters>
            <v-col cols="12">
                <v-simple-table id="myTable" fixed-header dense height="500">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th>
                                <span class="pl-7"> Կոդ</span>

                                <div class="myDiv">
                                    <v-form>
                                        <v-text-field
                                                color="light-green"
                                                class="pa-0"
                                                @keyup="myFunction"

                                                id="myInput"
                                        ></v-text-field>
                                    </v-form>

                                    <!-- <v-btn slot="activator" icon> <v-icon>filter_list</v-icon> </v-btn> -->

                                </div>
                            </th>

                            <th><span>Ներքին համար </span>
                                <div class="myDiv">
                                    <v-form>
                                        <v-text-field
                                                color="light-green"
                                                class="pa-0"
                                        ></v-text-field>
                                    </v-form>
                                </div>

                            </th>


                            <th><span class="pl-7">Տիպ</span>
                                <div class="myDiv">
                                    <v-form>
                                        <v-text-field
                                                color="light-green"
                                                class="pa-0 caption"


                                                placeholder="Որոնել"

                                                prepend-inner-icon="searche"
                                        ></v-text-field>

                                    </v-form>
                                </div>


                            </th>
                            <th><span class="pl-2">Ռեզիդենտ է</span>
                                <div class="myDiv">
                                    <v-form>
                                        <v-text-field
                                                color="light-green"
                                                class="pa-0 caption"


                                                placeholder="Որոնել"

                                                prepend-inner-icon="searche"
                                        ></v-text-field>

                                    </v-form>
                                </div>


                            </th>
                            <th> <span class="pa-0
                  ">Անուն/Անվանում </span>
                                <div class="myDiv">
                                    <v-form>
                                        <v-text-field
                                                color="light-green"
                                                class="pa-0 caption"
                                                @keyup="myFunction1"

                                                id="myInput1"

                                                placeholder="Որոնել"

                                        ></v-text-field>

                                    </v-form>
                                </div>


                            </th>
                            <th>Ազգանուն</th>
                            <th>Հայրանուն</th>
                            <th>Կազմակերպաիրավական տեսակ</th>
                            <th>Պետության մասնաբաժինը</th>
                            <th>Կազմակերպության անվանումը</th>
                            <th>Սեռ</th>
                            <th>Ծննդյան տարեթիվ</th>
                            <th>Մահվան ամսաթիվ</th>
                            <th>Երկքաղաքացիություն</th>
                            <th>Հաշվառման երկիր</th>
                            <th>ՀԾՀՀ</th>
                            <th>Փաստաթղթի տեսակ</th>
                            <th>Փաստաթղթի համար</th>
                            <th>Ում կողմից է տրված</th>
                            <th>Տրման ամսաթիվ</th>
                            <th>Վավեր է մինչև</th>
                            <th>Նույնականացման համար</th>
                            <th>Ում կողմից է տրվել</th>
                            <th>Տրման ամսաթիվ</th>
                            <th>Վավեր է մինչև</th>
                            <th>Վարորդական վկայական</th>
                            <th>Վարորդական վկայականի ժամկետ</th>
                            <th>ՀՎՀՀ</th>
                            <th>Պետական ռեգիստրի գրանցման համար</th>
                            <th>Տնտեսության հատված</th>
                            <th>Հուսալի է</th>
                            <th>Հասցե</th>
                            <th>Էլեկտրոնային հասցե</th>
                            <th>Անուն/Անվանում(անգլերեն)</th>
                            <th>Անուն/Անվանում(ռուսերեն)</th>
                            <th>Ծննդավայր</th>
                            <th>Աշխատավայր</th>
                            <th>Տնօրենի ԱԱՀ</th>
                            <th>Մասնաճյուղ</th>
                            <th>Լրացման ճշտություն</th>
                            <th>մուտքագրող</th>
                            <th>Մուտքագրման ամսաթիվ</th>
                            <th>Փակման ամսաթիվ</th>
                            <th>Փոփոխող</th>
                            <th>Փոփոխում</th>
                            <th>Գործակալ</th>
                            <th>Գործակալի հաշվառման ամսաթիվ</th>
                            <th>Գործակալի հաշվառման համար</th>
                            <th>Աշխատանքային պայմանագրի համար</th>
                            <th>Աշխատանքային պայմանագրի սկիզբ</th>
                        </tr>

                        </thead>
                        <tbody>
                        <!--   v-for="myGetData in filteredInput"
                            v-bind:key="myGetData.id"   -->
                        <tr

                                v-bind:CUSTOMER="myGetData.CUSTOMER"

                                @dblclick="openDialog(myGetData.CUSTOMER)"

                                v-for="myGetData in getDataFunction"
                                v-bind:key="myGetData.id"
                        >
                            <!-- <td>
                              {{myGetData}}
                            </td> -->

                            <td> {{myGetData.CUSTOMER}}</td>
                            <td>{{myGetData.EXTNUM}}</td>
                            <td>{{myGetData.PERSON}}</td>
                            <td>{{myGetData.RESIDENCE}}</td>

                            <td>{{myGetData.NAME_A}}</td>
                            <td>{{myGetData.SNAME_A}}</td>
                            <td>{{myGetData.FNAME_A}}</td>
                            <td>{{myGetData.ORGTYPE}}</td>

                            <td>{{myGetData.PRATE}}</td>
                            <td>{{myGetData.ORGNAME}}</td>
                            <td>{{myGetData.SEX}}</td>

                            <td>{{myGetData.BIRTHDAY}}</td>
                            <td>{{myGetData.DEDTIME}}</td>
                            <td>{{myGetData.ISTWOCTRY}}</td>
                            <td>{{myGetData.COUNTRY}}</td>
                            <td>{{myGetData.SOCCART}}</td>
                            <td>{{myGetData.DOCKIND}}</td>
                            <td>{{myGetData.DOCUMENT}}</td>
                            <td>{{myGetData.DOCSRC}}</td>
                            <td>{{myGetData.DOCDATE}}</td>
                            <td>{{myGetData.DOCISSUDT}}</td>
                            <td>{{myGetData.IDCARD}}</td>
                            <td>{{myGetData.IDSRC}}</td>
                            <td>{{myGetData.IDISSUDT}}</td>
                            <td>{{myGetData.IDEXPIRDT}}</td>
                            <td>{{myGetData.TAXPAYER}}</td>
                            <td>{{myGetData.REGNUM}}</td>
                            <td>{{myGetData.SECTOR}}</td>
                            <td>{{myGetData.TRUSTED}}</td>
                            <td>{{myGetData.ADDRESS_A}}</td>
                            <td>{{myGetData.EMAIL}}</td>
                            <td>{{myGetData.FULLNAME_E}}</td>
                            <td>{{myGetData.FULLNAME_R}}</td>
                            <td>{{myGetData.BIRTHPLACE}}</td>
                            <td>{{myGetData.WORKPLACE}}</td>
                            <td>{{myGetData.WORKER}}</td>
                            <td>{{myGetData.BRANCH}}</td>
                            <td>{{myGetData.FULLKIND}}</td>
                            <td>{{myGetData.TSOWNER}}</td>
                            <td>{{myGetData.OPENDATE}}</td>
                            <td>{{myGetData.CLOSEDATE}}</td>
                            <td>{{myGetData.TSUSER}}</td>
                            <td>{{myGetData.TSTIME}}</td>
                            <td>{{myGetData.BROKER}}</td>
                            <td>{{myGetData.LICENCEDATE}}</td>
                            <td>{{myGetData.LICENCENUM}}</td>
                            <td>{{myGetData.CONTNUM}}</td>
                            <td>{{myGetData.CONTDATE}}</td>
                        </tr>

                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>

        <!--  -->

    </v-container>

</template>


<script>

    import {eventEmitter} from './../../main'

    export default {
        name: 'TableDirectoryOfPersosn',
        data() {
            return {
                search: '',
                myGetdata2: '',
                url: {
                    getUrl: "http://192.168.100.153:8000/customer/customer-details"
                },
            }
        },
        computed: {
            getDataFunction() {
                return this.$store.state.getData
            },
            filteredInput() {
                var self = this
                const filtered = this.$store.state.getData.filter(function (myGetData) {
                    return Object.keys(myGetData).some(function (key) {
                        return String(myGetData[key]).toLowerCase().indexOf(self.search) > -1
                    })
                })
                console.log(filtered)
                return filtered
            }
        },
        methods: {

            myFunction() {
                console.log(this)
                var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[0];
                    if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";

                        } else {
                            tr[i].style.display = "none";


                        }
                    }
                }
            },
            myFunction1() {
                var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("myInput1");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[4];
                    if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            },


            openDialog(CUSTOMER) {

                if (eventEmitter.$emit('dialogOpened',)) {
                    this.getDataMethod(CUSTOMER);

                }

            },
            getDataMethod(CUSTOMER) {


                this.axios
                    .get(
                        this.url.getUrl,
                        {
                            params: {
                                CUSTOMER: CUSTOMER
                            }
                        },
                    )
                    .then(responce => {
                        console.log(responce.data);
                        this.$store.state.getCustomerData = responce.data;
                        console.log(this.$store.state.getCustomerData)
                    })
                    .catch(function (error) {
                        alert("կապի խափանում");
                        console.log(error);
                    });


            }
        }
    }
</script>
<style>
    .myDiv {
        width: 110px;

    }
</style>
