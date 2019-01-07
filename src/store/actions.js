import axios from 'axios';

const apiCall = (host, port, username, password, issueId) => {
  return axios({
    method: 'get',
    baseURL: `${host}:${port}/`,
    url: `rest/api/latest/issue/${issueId}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    auth: {
      username,
      password,
    },
    timeout: 2 * 60 * 1000,
  });
};

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
  removeAllIssues({ commit }) {
    commit('removeAllIssues');
  },
  fetchIssues({ state, commit }) {
    const { infos } = state;
    const {
      username,
      password,
      host,
      port,
    } = infos;
    const issuesToFetch = state.issueList;

    let issues;

    const downloadedIssues = [];
    const promises = [];

    issuesToFetch.forEach((issue) => {
      const promise = apiCall(host, port, username, password, issue)
        .then((response) => {
          downloadedIssues.push(response.data);
        })
        .catch(error => console.log(error));
      promises.push(promise);
    });

    Promise.all(promises).then((issuesList) => {
      issuesList.forEach((issue) => {
        const formattedIssue = {
          reference: issue.key,
          summary: issue.fields.summary,
          assignee: issue.fields.assignee.name,
          estimatedTime: issue.fields.timetracking.originalEstimate,
          icon: issue.fields.issuetype.iconUrl,
          priority: issue.fields.priority,
          avatar: issue.fields.assignee.avatarUrls['48x48'],
        };
        if (issue.fields.fixVersions.length > 0) {
          formattedIssue.version = issue.fields.fixVersions[0].name;
        }

        issues.push(formattedIssue);
      });
    });

    commit('fetchIssues', issues);
  },
  saveLoginInfos({ commit }, infos) {
    commit('saveLoginInfos', infos);
  },
};
