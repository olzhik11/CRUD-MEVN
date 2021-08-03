<template>
<button class="button">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "workButton",
  props: {
    color: {
      type: String,
      required: false,
      default: '#a3fab4'
    }
  },
}
</script>

<style scoped>
*{
  font-family: Poppins;
  font-size: 20px;
}
.button{
  padding: 5px;
  margin: 10px;
  color: white;
  background: none;
  border: 2px solid white;
  border-radius: 5px;
  transition: all 0.5s ease;
  cursor: pointer;
}
.button:hover{
  border-color: v-bind(color);
  color: v-bind(color);
}

</style>