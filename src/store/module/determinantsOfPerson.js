import axios from 'axios'

export default {

    // տվյալները լրացված են DirectoryOfPersons.vue մեջ
    state: {
        //    որոշիչներ 
        determinantsOfPerson: [],
    },
    actions: {
        // որոշիչներ
        GET_DETERMINANTS_OF_PERSON({ commit }) {
            return axios("http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=OPTION", {
                method: "GET"
            }).then((responce) => {
                commit('SET_DETERMINANTS_OF_PERSON', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },

    },
    getters: {

        // VOROSHICNER NAVBARI 
        DETERMINANTSOFPERSON(state) {
            return state.determinantsOfPerson
        },

    },


    mutations: {
        //որոշիչներ
        SET_DETERMINANTS_OF_PERSON: (state, responce) => {
            state.determinantsOfPerson = responce.data.data

        },


    },



}