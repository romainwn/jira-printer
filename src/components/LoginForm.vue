<template>
<div class="container">
  <h1>Login Form</h1>
  <form>
    <div class="form-group">
      <label>Username</label>
      <input type="text" />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" />
    </div>

    <div class="form-group">
      <label>Host</label>
      <input type="text" placeholder="https://jira.mydomain.com"/>
    </div>

    <div class="form-group">
      <label>Port</label>
      <input type="text" placeholder="443" />
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'LoginForm',
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  width: 50%;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  color: green;
  font-size: 2vh;
}


</style>
