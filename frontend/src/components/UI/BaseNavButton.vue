<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseNavButton"
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
  border: none;
  transition: all 0.5s ease;
  cursor: pointer;
}
.button:hover{
  color: #a3fab4;
}
</style>