<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <LoginForm />
    <IssueForm />
    <IssueList />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import IssueForm from '@/components/IssueForm.vue';
import IssueList from '@/components/IssueList.vue';

export default {
  name: 'app',
  components: {
    LoginForm,
    IssueForm,
    IssueList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
