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
        <tr v-for="issue in issues" :key="issue.id">
          <th>DL</th>
          <th>{{issue.name}}</th>
          <th>
            <button class="danger">Remove</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IssueForm',
  data () {
    return {
      issues: [
        {
          id:1,
          name: 'RT-123'
        },
        {
          id:2,
          name: 'WS-52'
        },
        {
          id:3,
          name: 'CLI-784'
        },
      ]
    }
  }
};
</script>

<style scoped>
table {
  border: 1px solid #6a89cc;
}

.container {
  width: 75%;
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
</style>
