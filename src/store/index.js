import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

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
    nextIssueId: 4,
  },
  actions,
  mutations,
});
