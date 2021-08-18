<template>
<p id="logStatus" :style="style"></p>
</template>

<script>
export default {
  name: "BaseLoginState",
  props: {
    color: String
  },
  computed: {
    style() {
      return ['box-shadow: 0 0 10px ' + this.color,
              'background: ' + this.color]
    }
  }
}
</script>

<style scoped>
#logStatus{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 30px;
  padding: 5px;
}
</style>