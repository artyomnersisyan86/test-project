import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import getData from './getData'
import bankAcaunt from './module/bankAcaunt'
import BranchOtherBasicinfo from './module/BranchOtherBasicinfo'
import getCountry from './module/getCountry'
import getPhone from './module/getPhone'
import getListOfJobs from './module/getListOfJobs'
import determinantsOfPerson from './module/determinantsOfPerson'
import resizeWindow from './module/resizeWindow'
import docDetHome from './module/docDetHome'
import organizationalType from './module/organizationalType'
import activityType from './module/activityType'
import residence from './module/residence'
import registeredOrgan from './module/registeredOrgan'
import leadershipPosition from './module/leadershipPosition'
import brnType from './module/brnType '
// import getCustomerData from './getCustomerData'
import getDatGenderData from './getDatGenderData'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        brnType,
        leadershipPosition,
        registeredOrgan,
        residence,
        activityType,
        organizationalType,
        getListOfJobs,
        getPhone,
        getCountry,
        resizeWindow,
        docDetHome,
        determinantsOfPerson,
        bankAcaunt,
        BranchOtherBasicinfo,
        getData,
        // getCustomerData,
        getDatGenderData
    },
    state: {
        // popup
        // getCustomerData: [],
        tabs: [],
        show: false,
        // // directoryOfPersosns
        // getData: [],
        // table show
        myTable: false,

        // show dynamic tabSize:
        showDynamicTabs: false,

        // ----------------------------
        // getDocType տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ
        getDocType: [],

        // Պետությունների ցուցակ		լրացված է PersonalDocuments.vue -ի մեջ
        // getCountry1: [],

        // ------------------------------

        // ---------------------------
        //  լրացված է PhoneleftTabs.vue -ի մեջ
        // getPhoneCode: [],

        // PHONEKIND տվյալներ լրացված է PhoneleftTabs.vue -ի մեջ

        // PHONEKIND: [],
        // ------------------------------------------

        // // directoryOfPersosns CUSTOMER Api
        // գտնվում են DataTable222 getCustomerDataMethod -ի մեջ
        getCustomerData: [],

        // CUSTPHONE տվյալներ լրացված է PhoneleftTabs.vue -ի մեջ

        CUSTPHONE: [],
        phone: '',
        // CUSTADDRES տվյալներ լրացված է AdresseLeftTabs.vue ի մեջ

        CUSTADDRES: [],
        // CUSTDOCS տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ

        CUSTDOCS: [],

        // getDocType տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ
        CUSTACNT: [],

        // Արայն խմբեր լրացված է EmailBloodGroupsleftTabs.vue

        bloodType: [],

        // Անձանց տեսակներ լրացված է OtherBasicInformation.vue
        personType: [],

        // Լրացման ճշտություն "Անձի լրացման տեսակ API" լրացված է BranchOtherBasicinfo.vue
        fillingAccuracy: [],

        //  Մարզերի ցուցակ "Ռեգիոնների ցուցակ API" լրացված է LeftAdresses.vue

        getRegionArm: [],

        //    Ռայոնների ցուցակ Erevan լրացված է LeftAdresses.vue գրացման տվյալներ -ի մեջ

        getYerReg: [],

        //    Ռայոնների ցուցակ Erevan լրացված է LeftAdresses.vue գրացման տվյալներ -ի մեջ
        getStreet: [],

        // գրանցման տեսակ registrationTypeLeftAdresses.vue
        getLives: [],

        // Բանկային հաշվի տեսակներ BankAccounts.vue ի մեջ
        // bankAccountsType: [],

    },
    // actions: {
    //     GETCURRENCYFROMAPI({ commit }) {
    //         return axios("http://192.168.100.153:8000/diction_s/get-currency-list/", {
    //             method: "GET"
    //         }).then((responce) => {
    //             commit('SET_CURRENCY_TO_STATE', responce)
    //             return responce

    //         }).catch(function(error) {
    //             alert("կապի խափանում")
    //             console.log(error)
    //             return error
    //         })
    //     }
    // },
    // getters: {
    //     CURRENCY(state) {
    //         return state.currency
    //     }
    // },

    // mutations: {
    //     SET_CURRENCY_TO_STATE: (state, responce) => {
    //         state.currency = responce.data.data

    //     }

    // },
    // getters: {
    //     competedGetData(state) {
    //         return state.getCustomerData
    //     },
    //     tabsData(state) {
    //         return state.tabs
    //     }
    // }
})
