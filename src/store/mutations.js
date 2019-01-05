export default {
  addIssue(state, issue) {
    state.issueList.push(issue);
    state.nextIssueId += 1;
  },
  removeIssue(state, id) {
    state.issueList.splice(id, 1);
  },
};
