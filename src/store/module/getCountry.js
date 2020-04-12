import axios from 'axios'

export default {
    // Պետությունների ցուցակ		լրացված է PersonalDocuments.vue  OtherBasicInformation.vue -ի մեջ,
    // LeftAdresses (գրանցման տվյալների մեջ)

    //         // Պետությունների ցուցակ		լրացված է PersonalDocuments.vue -ի մեջ

    state: {

        getCountry: [],
    },
    actions: {

        GET_COUNTRY_LIST({
            commit
        }) {
            return axios("http://192.168.100.153:8000/country/get-country-list/", {
                method: "GET"
            }).then((responce) => {
                commit('SET_COUNTRY_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },

    },
    getters: {

        GETCOUNTRY(state) {
            return state.getCountry
        },

    },


    mutations: {
        SET_COUNTRY_TO_STATE: (state, responce) => {
            state.getCountry = responce.data.data

        },


    },



}
