<template>
<v-btn class="button" elevation="5" :text-color="color">
  <slot></slot>
</v-btn>
</template>
<script>
export default {
  name: "BaseWorkButton",
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

.button{
  align-content: center;
  padding: 5px;
  margin: 10px;
  color: white;
  background: none;
  transition: all 0.5s ease;
  cursor: pointer;
}
</style>