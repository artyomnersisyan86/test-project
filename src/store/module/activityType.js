import axios from 'axios'

export default {

    // տվյալները լրացված են LegalEntity.vue և IndividualEntrepreneur մեջ
    state: {
        //    Գործունեության տեսակ 
        activityType: []
    },
    actions: {
        //    Գործունեության տեսակ 

        GET_ACTIVITITYPE_ACTIONS({ commit }) {
            return axios('http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=SECTOR', {
                method: 'GET'
            }).then((responce) => {
                commit('SET_ACTIVITITYPE_TO_STATE', responce)
                return responce
            }).catch(function(error) {
                alert('կապի խափանում')
                console.log(error)
                return error
            })
        }

    },
    getters: {

        //    Գործունեության տեսակ 
        GETACTIVITITYPE(state) {
            return state.activityType
        }

    },

    mutations: {
        //    Գործունեության տեսակ 

        'SET_ACTIVITITYPE_TO_STATE': (state, responce) => {
            state.activityType = responce.data.data
        }

    }

}