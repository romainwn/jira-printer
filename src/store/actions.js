import axios from 'axios';

export default {
  addIssue({ state, commit }, issueName) {
    commit('addIssue', {
      name: issueName,
      id: state.nextIssueId,
    });
  },
  removeIssue({ commit }, issue) {
    commit('removeIssue', issue);
  },
  fetchIssues({ commit }) {
    let issues;
    axios.get('')
      .then((response) => {
        issues = response.data;
      })
      .catch(() => {
        console.log('ERROR WHILE FETCHING ISSUES');
      });

    commit('fetchIssues', issues);
  },
  saveLoginInfos({ commit }, infos) {
    commit('saveLoginInfos', infos);
  },
};
