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
          <!-- <form v-on:submit.prevent="addItem"> -->
            <td></td>
            <td>
              <input type="text" placeholder="PROJ-123" v-model="issueName"/>
            </td>
            <td>
              <button class="success" type="submit" v-on:click="addItem">Add</button>
            </td>
          <!-- </form> -->
        </tr>
        <tr v-for="issue in issueList" :key="issue.id">
          <td>DL</td>
          <td>{{issue.name}}</td>
          <td>
            <button class="danger">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IssueForm',
  data() {
    return {
      issueName: '',
      nextId: 4,
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
    };
  },
  methods: {
    addItem() {
      this.issueList.push({
        name: this.issueName,
        id: this.nextId,
      });
      this.nextId++;
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
