import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issueList: [
      {
        id: 1,
        name: 'RT-123',
      },
      {
        id: 2,
        name: 'WS-52',
      },
      {
        id: 3,
        name: 'CLI-784',
      },
    ],
    nextIssueId: 0,
  },
  mutations: {
    addIssue(state, name) {
      state.issueList.push({
        name,
        id: state.nextIssueId,
      });
      state.nextIssueId += 1;
    },

  },
  actions: {

  },
});
