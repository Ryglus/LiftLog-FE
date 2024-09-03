import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isDark: JSON.parse(localStorage.getItem('isDark')) || false
        };
    },
    mutations: {
        toggleDark(state) {
            state.isDark = !state.isDark;
            localStorage.setItem('isDark', JSON.stringify(state.isDark));
        },
        setDark(state, value) {
            state.isDark = value;
            localStorage.setItem('isDark', JSON.stringify(state.isDark));
        }
    },
    actions: {
        toggleDark({ commit }) {
            commit('toggleDark');
        },
        setDark({ commit }, value) {
            commit('setDark', value);
        }
    },
    getters: {
        isDark(state) {
            return state.isDark;
        }
    }
});

export default store;
