import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const module = {
    namespaced: true,
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: state
};

export default module;
