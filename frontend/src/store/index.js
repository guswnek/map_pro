import { createStore } from 'vuex'

export default createStore({
    state: () => {
        return {
            address: ''
        }
    },
    getters: {
        getAddress(state){
            return state.address;
        }
    },
    mutations: {
        setAddress(state, address){
            state.address = address;
            console.log("1");
            console.log("3");
        }
    },
    actions: {
    }
});