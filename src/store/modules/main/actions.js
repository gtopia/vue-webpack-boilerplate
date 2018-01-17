export default {
    setMessage: ({ commit }, newMsg) => {
        commit('SET_LOADING', true);

        // debugger;
        setTimeout(function() {
            commit('SET_MESSAGE', newMsg);
            commit('SET_LOADING', false);
        }, 2000);
    }
};
