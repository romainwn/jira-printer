<template>
  <button @click="onClick" class="className">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    onClick: {
      type: Function,
      required: false,
    }
  },
  methods: {

  }
}
</script>

<style scoped>
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

