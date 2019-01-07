export default {
  addIssue(state, issue) {
    state.issueList.push(issue);
    state.nextIssueId += 1;
  },
  removeIssue(state, issue) {
    state.issueList.splice(state.issueList.indexOf(issue), 1);
  },
  fetchIssues(state, issues) {
    state.formattedIssues = issues;
  },
  saveLoginInfos(state, infos) {
    state.infos = infos;
  },
};
