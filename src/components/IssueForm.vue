<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Issue Form</h1>

      <div class="right-group">
        <button class="action">Download issues</button>
        <button class="action">Print issues</button>
        <button class="danger">Remove Issues</button>
      </div>
    </div>

    <!-- Table with issues -->
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Issue</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input type="text" placeholder="PROJ-123" v-model="issueName"/>
          </td>
          <td>
            <button class="success" type="submit" v-on:click="addItem">Add</button>
          </td>
        </tr>
        <tr v-for="issue in issueList" :key="issue.id">
          <td>DL</td>
          <td>{{issue.name}}</td>
          <td>
            <button class="danger" v-on:click="removeItem(issue.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'IssueForm',
  data() {
    return {
      issueName: '',
    };
  },
  computed: mapState([
    'issueList',
  ]),
  methods: {
    ...mapActions([
      'addIssue',
      'removeIssue',
      'fetchIssues'
    ]),
    addItem() {
      this.addIssue(this.issueName);
    },
    removeItem(id) {
      if (issueList.length > 0) {

        this.removeIssue(id);
      }
    },
    downloadIssues() {
      this.fetchIssues();
    }
  },
};
</script>

<style scoped>
table {
  border: 1px solid #6a89cc;
  width: 100%;
}

.container {
  width: 75%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

.header {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

button {
  padding: 8px 16px;
  color: whitesmoke;
  border: none;
  text-transform: uppercase;
  margin: 8px;
}
.action {
  background-color: #6a89cc;
}
.danger {
  background-color: #eb2f06;
}

.success {
  background-color: #78e08f;
  color: #0a3d62;
}
</style>
