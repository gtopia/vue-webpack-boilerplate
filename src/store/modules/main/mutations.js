import types from './mutation-types';

let mutations = {
    [types.SET_MESSAGE](state, message) {
        state.message = message;
    },
    [types.SET_LOADING](state, status) {
        state.loading = status;
    }
};

export default mutations;
