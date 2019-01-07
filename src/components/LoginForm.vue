<template>
<div class="container">
  <h1>Login Form</h1>
  <form @submit="saveInfos" class="form">
    <div class="form-group">
      <label>Username</label>
      <input type="text" v-model="username"/>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" v-model="password"/>
    </div>

    <div class="form-group">
      <label>Host</label>
      <input type="text" placeholder="https://jira.mydomain.com" v-model="host"/>
    </div>

    <div class="form-group">
      <label>Port</label>
      <input type="text" placeholder="443" v-model="port"/>
    </div>

    <Button class="success" type="submit" text="Valider" />
  </form>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Button from '@/components/Button.vue';

export default {
  name: 'LoginForm',
  components: {
    Button,
  },
  data() {
    return {
      username: '',
      password: '',
      host: '',
      port: '',
    };
  },
  methods: {
    ...mapActions([
      'saveLoginInfos'
    ]),
    saveInfos(e) {
      e.preventDefault();
      let infos = {
        username: this.username,
        password: this.password,
        host: this.host,
        port: this.port,
      };
      this.saveLoginInfos(infos);
    }

  }
};
</script>

<style scoped>
h1 {
  margin: 16px;
}
.container {
  border: 1px solid black;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.form {
  width: 90%;
  display: inherit;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin:8px 0;
}

label {
  color: green;
  font-size: 2vh;
}


</style>
