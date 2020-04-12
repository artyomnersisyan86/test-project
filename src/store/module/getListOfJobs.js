import axios from 'axios'

export default {
    //	Աշխատավայրերի ցուցակ	լրացված է WorkPlaceLeftTabs.vue

    state: {

        listOfJobs: [],
    },
    actions: {

        GET_LIS_OF_JOBS_API({
            commit
        }) {
            return axios("http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=WORKPLACE&CCOLUMN=NAME", {
                method: "GET"
            }).then((responce) => {
                commit('SET_LIS_OF_JOBS_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },

    },
    getters: {

        GETLISTOFJOBS(state) {
            return state.listOfJobs
        },

    },


    mutations: {
        SET_LIS_OF_JOBS_TO_STATE: (state, responce) => {
            state.listOfJobs = responce.data.data

        },


    },



}
