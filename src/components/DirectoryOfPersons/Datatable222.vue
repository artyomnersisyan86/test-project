<template>
    <v-container fluid pa-0>
        <v-row no-gutters>
            <v-col cols="12" md="12" sm="8" xs="12">
                <div id="table-wrapper">
                    <div id="table-scroll">
                        <v-simple-table id="myTable" v-if="getTableShow" fixed-header :height="height" display dense class="borderTableRafius ">
                            <template v-slot:default>
                                <thead class="theadClass">
                                <tr class="">
                                    <th v-for="(value, proportyName) in tableHeader" :key="proportyName">
                                        <span @click="sortBy(proportyName)" class=""> {{value}} <v-icon left size="20">unfold_more</v-icon></span>
                                        <div class="myDiv mydivResize">
                                            <v-text-field color="light-green" prepend-inner-icon="search"
                                                          class="pa-0 caption wwwe"
                                                          @keyup="filterKeyUp(proportyName)"
                                                          :id="proportyName"></v-text-field>
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-bind:CUSTOMER="myGetData.CUSTOMER" class="aaaa"
                                    @dblclick="openDialog(myGetData.CUSTOMER)" :rez="myGetData.RESIDENCE"
                                    v-for="myGetData in getDataFunction" v-bind:key="myGetData.id">
                                    <td v-for="(propertyValue, propertyName) in myGetData" :key="propertyName" :class="propertyName">
<!--                                        <span v-if="propertyName == PERSON">-->
<!--                                            <v-icon left small>{{personTypes[value].icon}}</v-icon> {{personTypes[value].label}}-->
<!--                                        </span>-->
<!--                                        <select v-if="propertyName == RESIDENCE" class=" selectMy" disabled v-model="value">-->
<!--                                            <option :value="code.ID" class="black&#45;&#45;text caption select" id="selectMy"-->
<!--                                                    v-for="code in sitizenship " :key="code.ID"> {{ code.RESIDENCE}}-->
<!--                                            </option>-->
<!--                                        </select>-->
<!--                                        <span v-if="propertyName == 'SEX' && propertyValue === 1">-->
<!--                                                <v-icon color="" dense>fas fa-mars</v-icon>-->
<!--                                                <span class="pl-3 pr-8">Արական</span>-->
<!--                                        </span>-->
<!--                                        <span v-if="propertyName == 'SEX' && propertyValue === 0">-->
<!--                                            <v-icon class="" dense color="pink lighten-2">fas fa-venus</v-icon>-->
<!--                                                <span class="pl-4">Իգական</span>-->
<!--                                        </span>-->
                                        <span>{{propertyValue}}</span>
                                    </td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapActions} from 'vuex'
    import {eventEmitter} from './../../main'

    export default {
        name: 'Datatable222',
        data() {
            return {
                tableHeader: {
                    CUSTOMER: "Կոդ",
                    EXTNUM: "Ներքին համար",
                    PERSON: "Տիպ",
                    RESIDENCE: "Ռեզիդենտ է",
                    NAME_A: "Անուն/Անվանում",
                    SNAME_A: "Ազգանուն",
                    FNAME_A: "Հայրանուն",
                    ORGTYPE: "Կազմակերպաիրավական տեսակ",
                    PRATE: "Պետության մասնաբաժինը",
                    ORGNAME: "Կազմակերպության անվանումը",
                    SEX: "Սեռ",
                    BIRTHDAY: "Ծննդյան տարեթիվ",
                    DEDTIME: "Մահվան ամսաթիվ",
                    ISTWOCTRY: "Երկքաղաքացիություն",
                    COUNTRY: "Հաշվառման երկիր",
                    SOCCART: "ՀԾՀՀ",
                    DOCKIND: "Փաստաթղթի տեսակ",
                    DOCUMENT: "Փաստաթղթի համար",
                    DOCSRC: "Ում կողմից է տրված",
                    DOCDATE: "Տրման ամսաթիվ",
                    DOCISSUDT: "Վավեր է մինչև",
                    IDCARD: "Նույնականացման համար",
                    IDSRC: "Ում կողմից է տրվել",
                    IDISSUDT: "Տրման ամսաթիվ",
                    IDEXPIRDT: "Վավեր է մինչև",
                    DRVNUM: "Վարորդական վկայական",
                    DRVDATE: "Վարորդական վկայականի ժամկետ",
                    TAXPAYER: "ՀՎՀՀ",
                    REGNUM: "Պետական ռեգիստրի գրանցման համար",
                    SECTOR: "Տնտեսության հատված",
                    TRUSTED: "Հուսալի է",
                    ADDRESS_A: "Հասցե",
                    EMAIL: "Տնտեսության հատված",
                    FULLNAME_E: "Անուն/Անվանում(անգլերեն)",
                    FULLNAME_R: "Անուն/Անվանում(ռուսերեն)",
                    BIRTHPLACE: "Ծննդավայր",
                    WORKPLACE: "Աշխատավայր",
                    WORKER: "Տնօրենի ԱԱՀ",
                    BRANCH: "Մասնաճյուղ",
                    FULLKIND: "Լրացման ճշտություն",
                    TSOWNER: "մուտքագրող",
                    OPENDATE: "Մուտքագրման ամսաթիվ",
                    CLOSEDATE: "Փակման ամսաթիվ",
                    TSUSER: "Փոփոխող",
                    TSTIME: "Փոփոխում",
                    BROKER: "Գործակալ",
                    LICENCEDATE: "Գործակալի հաշվառման ամսաթիվ",
                    LICENCENUM: "Գործակալի հաշվառման համար",
                    CONTNUM: "Աշխատանքային պայմանագրի համար",
                    CONTDATE: "Աշխատանքային պայմանագրի սկիզբ",

                },
                personTypes: [
                    {icon: 'account_balance', label: 'Բանկ'},
                    {icon: 'domain', label: 'Իրավաբանական անձ'},
                    {icon: 'accessibility', label: 'Ֆիզիկական անձ'},
                    {icon: 'accessibility', label: 'Անհատ ձեռներեց'},
                    {icon: 'fas fa-flag', label: 'Հայաստանի Հանրապետություն/ՈՉՖՆ.ԸՆԿ'},
                    {icon: 'fas fa-flag', label: 'Օտարերկրյա պետություն / ՈՉՖՆ.ԸՆԿ'},
                    {icon: 'fas fa-city', label: 'Համայնք / ՈՉՖՆ.ԸՆԿ'},
                    {icon: 'fas fa-flag', label: 'Միջազգային կազմակերպություն / ՖՆ.ԸՆԿ'},
                ],
                windowSize: {x: 0, y: 0,},
                height: 0,
                rez: '',
                usersPerPage: 10,
                pageNumber: 1,
                sitizenship: [
                    {
                        RESIDENCE: "Ռեզիդենտ ",
                        ID: 5,
                    },{
                        RESIDENCE: "Ոչ ռեզիդենտ ",
                        ID: 6,
                    },
                ],
                search: '',
                myGetdata2: '',
                url: {
                    getUrl: "http://192.168.100.153:8000/customer/customer-retrieve",
                    // փաստաթղթերի տվյալներ հիմնական էջի & popup -i & CUSTDOCS տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ
                    getDocType: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTDOCS&CCOLUMN=DOCKIND",
                    // Անձանց տեսակներ լրացված է OtherBasicInformation.vue
                    personType: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=KIND",
                    // Լրացման ճշտություն "Անձի լրացման տեսակ API" լրացված է BranchOtherBasicinfo.vue
                    fillingAccuracy: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=FULLKIND",
                    // //  Մարզերի ցուցակ "Ռեգիոնների ցուցակ API" լրացված է LeftAdresses.vue ?COUNTRY=ARM
                    //    getRegionArm: "http://192.168.100.153:8000/country/get-region-list/",
                    //    Ռայոնների ցուցակ Erevan լրացված է LeftAdresses.vue գրացման տվյալներ -ի մեջ հանել եմ =YR
                    //  getYerReg:  "http://192.168.100.153:8000/country/get-district-list/?COUNTRY=ARM&REGION=YR",
                    //  Փողոցներ ցուցակ Erevan լրացված է LeftAdresses.vue գրացման տվյալներ -ի մեջ =YR03
                    getStreet: "http://192.168.100.153:8000/country/get-street-list/?DCHARID",
                    // գրանցման տեսակ registrationTypeLeftAdresses.vue
                    getLives: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=ADRESKIND",
                },
            }
        },
        computed: {
            pages() {
                let arr = this.$store.state.getData
                const result = Math.ceil(arr.length / this.usersPerPage);
                console.log(result)
                return (result < 1) ? 1 : result
            },
            paginatedCUSTOMER() {
                let from = (this.pageNumber - 1) * this.usersPerPage;
                let to = from + this.usersPerPage;
                return this.$store.state.getData.slice(from, to);
            },
            getCUSTADDRES() {return this.$store.state.CUSTADDRES},
            getDataFunction() {return this.$store.state.getData},
            getTableShow() {return this.$store.state.myTable},
            filteredInput() {
                var self = this;
                const filtered = this.$store.state.getData.filter(function (myGetData) {
                    return Object.keys(myGetData).some(function (key) {
                        console.log(String(myGetData[key]).toLowerCase().indexOf(self.search) > -1);
                        return String(myGetData[key]).toLowerCase().indexOf(self.search) > -1
                    })
                });
                return filtered;
            }
        },
        mounted() {
            this.onResize();
            this.resize();
            this.GET_COUNTRY_LIST();
        },
        methods: {
            ...mapActions([
                'GET_COUNTRY_LIST',
            ]),
            filterKeyUp(colId) {
                var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById(colId);
                console.log(input);
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].querySelector('.'+colId);
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
            sortBy(colName) {
                this.$store.state.getData.sort((a, b) => a[colName] - b[colName]);
            },
            onResize() {this.windowSize = {x: window.innerWidth, y: window.innerHeight}},
            resize() {this.height = this.windowSize.y - (294 - 32) + 'px';},
            sortBYname() {this.$store.state.getData.sort((a, b) => a.NAME_A.localeCompare(b.NAME_A))},
            sortBYCustomer() {this.$store.state.getData.sort((a, b) => a.CUSTOMER - b.CUSTOMER)},
            sortBYEXTNUM() {this.$store.state.getData.sort((a, b) => a.EXTNUM - b.EXTNUM)},
            sortBYPERSON() {this.$store.state.getData.sort((a, b) => a.PERSON - b.PERSON)},
            sortBYRESIDENCE() {this.$store.state.getData.sort((a, b) => a.RESIDENCE - b.RESIDENCE)},
            sortBYSNAME_A() {this.$store.state.getData.sort((a, b) => a.SNAME_A.localeCompare(b.SNAME_A))},
            sortBYFNAME_A() {
                this.$store.state.getData.sort((a, b) => {
                    if (a.FNAME_A === "" || b.FNAME_A === "") {
                        return a.FNAME_A.localeCompare(b.FNAME_A)
                    }
                })
            },
            pageClick(page) {this.pageNumber = page;},
            scrollToEnd: function () {
                var container = this.$el.querySelector("#table");
                container.scrollTop = container.scrollHeight;
            },
            openDialog(CUSTOMER) {
                if (eventEmitter.$emit('dialogOpened',)) {
                    this.getCustomerDataMethod(CUSTOMER);
                    this.getDocTypeFunc();
                    this.getPersonTypeFunc();
                    this.getFillingAccuracyFunc();
                    this.getStreetFunc();
                    this.getLivesFunc();
                }
            },
            getLivesFunc() {
                this.axios.get(this.url.getLives,).then(responce => {
                    console.log(this.$store.state.getLives)
                    this.$store.state.getLives = responce.data.data;
                }).catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
            },
            getStreetFunc() {
                this.axios.get(this.url.getStreet,).then(responce => {
                    console.log("POXOC" + this.$store.state.getStreet)
                    this.$store.state.getStreet = responce.data.data;
                }).catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
            },
            getFillingAccuracyFunc() {
                this.axios.get(this.url.fillingAccuracy, {},).then(responce => {
                    console.log(this.$store.state.fillingAccuracy)
                    this.$store.state.fillingAccuracy = responce.data.data;
                }).catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
            },
            getPersonTypeFunc() {
                this.axios.get(this.url.personType, {},).then(responce => {
                    console.log(this.$store.state.personType);
                    this.$store.state.personType = responce.data.data;
                }).catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
            },
            getDocTypeFunc() {
                this.axios.get(this.url.getDocType,).then(responce => {
                    this.$store.state.getDocType = responce.data.data;
                }).catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
            },
            getCustomerDataMethod(CUSTOMER,) {
                this.axios.get(this.url.getUrl, {params: {CUSTOMER: CUSTOMER,}},).then(responce => {
                    // CUSTUMER ընդհանուր
                    this.$store.state.getCustomerData = responce.data;
                    // CUSTPHONE տվյալներ լրացված է PhoneleftTabs.vue -ի մեջ
                    this.$store.state.CUSTPHONE = responce.data.CUSTPHONE;
                    // CUSTADDRES տվյալներ լրացված է AdresseLeftTabs.vue ի մեջ
                    this.$store.state.CUSTADDRES = responce.data.CUSTADDRES;
                    // CUSTDOCS տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ
                    this.$store.state.CUSTDOCS = responce.data.CUSTDOCS;
                    // CUSTACNT տվյալներ
                    this.$store.state.CUSTACNT = responce.data.CUSTACNT;
                }).catch(function (error) {
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

    .wwwe {
        color: red
    }

    .borderTableRafius {
        border: 3px solid #8BC34A;

    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: #F5F5F5;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        /* background-color: #F5F5F5; */
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #c0c0c0
        /* background-image: -webkit-linear-gradient(top,  rgb(206, 218, 192) 0%, rgb(149, 168, 128) 50%,  rgb(172, 224, 112) 51%, #8BC34A 100%); */
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 5px;
        background-color: #757575
        /* background-image: -webkit-linear-gradient(top,  rgb(206, 218, 192) 0%, rgb(149, 168, 128) 50%,  rgb(172, 224, 112) 51%, #8BC34A 100%); */
    }

    .genderheight {
        width: 200px !important;
    }

    .v-table_pagination {
        display: flex !important;
        /* flex-wrap:wrap !important; */
        justify-content: center !important;
        background-color: #c4c0bd !important;
        height: 32px
        /* margin-top:20px !important; */
    }

    .page {
        padding: 8px !important;
        height: 32px;
        /* border:1px solid grey !important; */
        /* border-radius: 12px solid grey !important;; */
        margin-right: 10px;
    }

    .page:hover {
        background-color: #F48FB1;
        cursor: pointer;
        color: white
    }

    .page_selected {
        background-color: #8BC34A;
        cursor: pointer;

        color: white;
        /* z-index: -1; */
    }
</style>
