import axios from 'axios'

export default {

    // տվյալները լրացված են LegalEntity.vue  մեջ
    state: {
        //    կազմակերպաիրավական տեսակ 
        organizationalType: []
    },
    actions: {
        //    կազմակերպաիրավական տեսակ 

        GET_ORGANIZATIONALTYPE_ACTIONS({ commit }) {
            return axios('http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=ORGTYP', {
                method: 'GET'
            }).then((responce) => {
                commit('SET_ORGANIZATIONALTYPE_TO_STATE', responce)
                return responce
            }).catch(function(error) {
                alert('կապի խափանում')
                console.log(error)
                return error
            })
        }

    },
    getters: {

        //    կազմակերպաիրավական տեսակ 

        GETORGANIZATIONALTYPE(state) {
            return state.organizationalType
        }

    },

    mutations: {
        //    կազմակերպաիրավական տեսակ 
        'SET_ORGANIZATIONALTYPE_TO_STATE': (state, responce) => {
            state.organizationalType = responce.data.data
        }

    }

}