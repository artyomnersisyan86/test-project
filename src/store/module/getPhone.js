import axios from 'axios'

export default {
    // Հեռախոսահամրների կոդեր	getPhoneCode		լրացված է PhoneleftTabs.vue -ի մեջ
    // Հեռախոսահամրների տեսակներ	PHONEKIND	լրացված է PhoneleftTabs.vue -ի մեջ  
    state: {
        // Հեռախոսահամրների կոդեր
        getPhoneCode: [],

        // Հեռախոսահամրների տեսակներ
        getPHONEKIND: []
    },
    actions: {
        // Հեռախոսահամրների կոդեր
        GET_PHONECODE_API({
            commit
        }) {
            return axios("http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=PHONE&CCOLUMN=CODE", {
                method: "GET"
            }).then((responce) => {
                commit('SET_PHONECODE_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },

        // Հեռախոսահամրների տեսակներ
        GET_PHONEKIND_API({
            commit
        }) {
            return axios("http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=PHONEKIND", {
                method: "GET"
            }).then((responce) => {
                commit('SET_PHONEKIND_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },

    },
    getters: {
        // Հեռախոսահամրների կոդեր
        GETPHONECODE(state) {
            return state.getPhoneCode
        },
        // Հեռախոսահամրների տեսակներ

        GETPHONEKIND(state) {
            return state.getPHONEKIND
        },

    },

    // Հեռախոսահամրների կոդեր
    mutations: {
        SET_PHONECODE_TO_STATE: (state, responce) => {
            state.getPhoneCode = responce.data.data

        },
        // Հեռախոսահամրների տեսակներ
        SET_PHONEKIND_TO_STATE: (state, responce) => {
            state.getPHONEKIND = responce.data.data

        },



    },



}