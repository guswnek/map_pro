import { createStore } from 'vuex'

export default createStore({
    state: () => {
        return {
            address: ''
        }
    },
    getters: {
        getAddress(state){
            console.log("123");
            return state.address;
        }
    },
    mutations: {
        setAddress(state, address){
            state.address = address;
            console.log("3");
            console.log("4");
        }
    },
    actions: {

    }
});