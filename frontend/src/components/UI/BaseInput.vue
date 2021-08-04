<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
<script>
export default {
  name: "BaseInput",
  props: {
      modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #0e171d;
  border-radius: 5px;
  margin: 2px;
}
</style>