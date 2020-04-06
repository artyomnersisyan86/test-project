import axios from 'axios'

export default {

    // տվյալները լրացված են LegalEntity.vue և IndividualEntrepreneur մեջ
    state: {
        //    Ռեզիդենտություն 
        residence: []
    },
    actions: {
        //    Ռեզիդենտություն 

        GET_RESIDENCE_ACTIONS({ commit }) {
            return axios('http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=RESIDENCE', {
                method: 'GET'
            }).then((responce) => {
                commit('SET_RESIDENCE_TO_STATE', responce)
                return responce
            }).catch(function(error) {
                alert('կապի խափանում')
                console.log(error)
                return error
            })
        }

    },
    getters: {

        //    Ռեզիդենտություն 
        GETRESIDENCE(state) {
            return state.residence
        }

    },

    mutations: {
        //    Ռեզիդենտություն 

        'SET_RESIDENCE_TO_STATE': (state, responce) => {
            state.residence = responce.data.data
        }

    }

}