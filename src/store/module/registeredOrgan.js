import axios from 'axios'

export default {

    // տվյալները լրացված են LegalEntity.vue և IndividualEntrepreneur մեջ
    state: {
        //    Գրանցված մարմին
        registeredOrgan: []
    },
    actions: {
        //    Գրանցված մարմին

        GET_REGISTEREDORGAN_ACTIONS({ commit }) {
            return axios('http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=ORGNAME', {
                method: 'GET'
            }).then((responce) => {
                commit('SET_REGISTEREDORGAN_TO_STATE', responce)
                return responce
            }).catch(function(error) {
                alert('կապի խափանում')
                console.log(error)
                return error
            })
        }

    },
    getters: {

        //    Գրանցված մարմին
        GETREGISTEREDORGAN(state) {
            return state.registeredOrgan
        }

    },

    mutations: {
        //    Գրանցված մարմին

        'SET_REGISTEREDORGAN_TO_STATE': (state, responce) => {
            state.registeredOrgan = responce.data.data
        }

    }

}
