import axios from 'axios'

export default {

    // տվյալները լրացված են DirectoryOfPersons.vue մեջ
    state: {
        //    tesak
        docDetHome: [],
    },


    actions: {
        // tesak
        GET_DOCDETHOME({ commit }) {
            // փաստաթղթերի տվյալներ հիմնական էջի Document details on the home page API
            return axios("http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTDOCS&CCOLUMN=DOCKIND&SUBSYS=1", {
                method: "GET"
            }).then((responce) => {
                commit('SET_DOCDETHOME', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },

    },
    getters: {

        // tesak NAVBARI
        DOCDETHOME(state) {
            return state.docDetHome
        },

    },


    mutations: {
        //tesak
        SET_DOCDETHOME: (state, responce) => {
            state.docDetHome = responce.data.data

        },


    },



}
