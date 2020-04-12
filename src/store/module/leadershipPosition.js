import axios from 'axios'

export default {

    // տվյալները լրացված են LegalEntity.vue  մեջ
    state: {
        //    ղեկավար պաշտոն
        leadershipPosition: []
    },
    actions: {
        //    ղեկավար պաշտոն

        GET_LIDERSHIPPOSITION_ACTIONS({ commit }) {
            return axios('http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=WPOSTID', {
                method: 'GET'
            }).then((responce) => {
                commit('SET_LIDERSHIPPOSITION_TO_STATE', responce)
                return responce
            }).catch(function(error) {
                alert('կապի խափանում')
                console.log(error)
                return error
            })
        }

    },
    getters: {

        //    ղեկավար պաշտոն
        GETLIDERSHIPPOSITION(state) {
            return state.leadershipPosition
        }

    },

    mutations: {
        //    ղեկավար պաշտոն

        'SET_LIDERSHIPPOSITION_TO_STATE': (state, responce) => {
            state.leadershipPosition = responce.data.data
        }

    }

}
