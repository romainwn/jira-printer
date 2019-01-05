export default {
  addIssue({ state, commit }, issueName) {
    commit('addIssue', {
      name: issueName,
      id: state.nextIssueId,
    });
  },
  removeIssue({ commit }, id) {
    commit('removeIssue', id);
  },
};
