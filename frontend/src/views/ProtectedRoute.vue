<template>
  <h1>Welcome to the Protected route</h1>
  <h1>{{message}}</h1>
</template>

<script>
import axios from 'axios'
export default {
  name: "ProtectedRoute",
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    axios.get('http://localhost:8080/user/protected')
    .then((res) => {
      this.message = res.data.message
    })
    .catch((err) => {
      this.message = err
    })
  }
}
</script>

<style scoped>

</style>