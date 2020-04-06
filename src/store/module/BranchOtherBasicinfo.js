import axios from 'axios'

export default {

    // տվյալները լրացված են BranchOtherBasicinfo.vue մեջ
    state: {
        //    Մասնաճյուղերի լիստ Branch List
        branch: [],
    },
    actions: {
        // Branch List
        GET_BANCH_LIST({ commit }) {
            return axios("http://192.168.100.153:8000/diction_s/get-branch-list/", {
                method: "GET"
            }).then((responce) => {
                commit('SET_BRANCH_TO_STATE', responce);
                return responce;


            }).catch(function(error) {
                alert("կապի խափանում");
                console.log(error);
                return error;
            });
        },

    },
    getters: {

        // Branch List
        BRANCH(state) {
            return state.branch
        },

    },


    mutations: {
        // Branch List
        SET_BRANCH_TO_STATE: (state, responce) => {
            state.branch = responce.data.data

        },


    },



}