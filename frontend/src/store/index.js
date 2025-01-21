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
            console.log("mutation: " + address);
            state.address = address;
            console.log(state.address);
        }
    },
    actions: {
        console
    }
});