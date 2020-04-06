import axios from 'axios'

export default {

    // տվյալները լրացված են BankAccounts.vue մեջ
    state: {
        // արժույթ
        currency: [],
        bank: [],
        // տեսակ
        bankAccountsType: []

    },
    actions: {
        // /բանկ
        GETBANK({
            commit
        }) {
            return axios("http://192.168.100.153:8000/diction_s/get-banks-list/", {
                method: "GET"
            }).then((responce) => {
                commit('SET_BANK_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },
        // արժույթ
        GETCURRENCYFROMAPI({
            commit
        }) {
            return axios("http://192.168.100.153:8000/diction_s/get-currency-list/", {
                method: "GET"
            }).then((responce) => {
                commit('SET_CURRENCY_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },


        // տեսակ


        GET_BANKACAUNTSTYPE_FROM_API({
            commit
        }) {
            return axios("http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTAC&CCOLUMN=KIND", {
                method: "GET"
            }).then((responce) => {
                commit('SET_BANKACAUNTSTYPE_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },


    },
    getters: {
        // տեսակ
        BANKACAUNTSTYPE(state) {
            return state.bankAccountsType
        },
        // արժույթ
        CURRENCY(state) {
            return state.currency
        },

        // բանկ
        BANK(state) {
            return state.bank
        }
    },


    mutations: {
        //տեսակ
        SET_BANKACAUNTSTYPE_TO_STATE: (state, responce) => {
            state.bankAccountsType = responce.data.data
        },
        // արժույթ
        SET_CURRENCY_TO_STATE: (state, responce) => {
            state.currency = responce.data.data

        },
        // բանկ
        SET_BANK_TO_STATE: (state, responce) => {
            state.bank = responce.data.data
        }

    },







}