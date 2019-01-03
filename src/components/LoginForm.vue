<template>
<div>
  <h1>Login Form</h1>
  <form>
    <div>
      <label>Username</label>
      <input type="text" />
    </div>

    <div>
      <label>Password</label>
      <input type="password" />
    </div>

    <div>
      <label>Host</label>
      <input type="text" placeholder="https://jira.mydomain.com"/>
    </div>

    <div>
      <label>Port</label>
      <input type="text" placeholder="443" />
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>
