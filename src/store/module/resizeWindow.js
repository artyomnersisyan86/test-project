export default {

    state: {
        document: {
            height: 'auto'
        }
    },
    mutations: {
        setHeight(state) {
            state.document.height = `${document.documentElement.clientHeight}px`
        }
    }

}