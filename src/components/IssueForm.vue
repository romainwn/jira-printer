<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Issue Form</h1>

      <div class="right-group">
        <v-button :onClick="fetchAllIssues" class="action" text="Download issues" />
        <v-button :onClick="test" class="action" text="Print issues" />
        <v-button :onClick="removeAllIssues" class="danger" text="Remove Issues" />
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
            <v-button class="success" type="submit" :onClick="addItem" text="Add" />
          </td>
        </tr>
        <tr v-for="issue in issueList" :key="issue.id">
          <td>DL</td>
          <td>{{issue.name}}</td>
          <td>
            <v-button class="danger" :onClick="removeItem" text="Remove"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

import Button from '@/components/Button.vue';

export default {
  name: 'IssueForm',
  components: {
    'v-button': Button,
  },
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
      'removeAllIssues',
      'fetchIssues',
    ]),
    addItem() {
      this.addIssue(this.issueName);
    },
    removeItem(e, issue) {
      console.log(issue);
      e.preventDefault();
      console.log(issue);
      if (this.issueList.length > 0) {
        this.removeIssue(issue);
      }
    },
    fetchAllIssues() {
      this.fetchIssues();
    },
    downloadIssues() {
      this.fetchIssues();
    },
    removeIssues() {
      this.removeAllIssues();
    },
    test() {
      console.log('test');
    },
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

</style>
