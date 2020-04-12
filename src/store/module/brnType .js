import axios from 'axios'

export default {

    // տվյալները լրացված են LegalEntitystateRegistrationData մեջ
    state: {
        //    ստորաբաժանման առկայություն
        BRNTYPE: []
    },
    actions: {
        //    ստորաբաժանման առկայություն

        GET_BRNTYPE_ACTIONS({ commit }) {
            return axios('http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=BRNTYPE', {
                method: 'GET'
            }).then((responce) => {
                commit('SET_BRNTYPE_TO_STATE', responce)
                return responce
            }).catch(function(error) {
                alert('կապի խափանում')
                console.log(error)
                return error
            })
        }

    },
    getters: {

        //    ստորաբաժանման առկայություն
        GETBRNTYPE(state) {
            return state.BRNTYPE
        }

    },

    mutations: {
        //    ստորաբաժանման առկայություն

        'SET_BRNTYPE_TO_STATE': (state, responce) => {
            state.BRNTYPE = responce.data.data
        }

    }

}
