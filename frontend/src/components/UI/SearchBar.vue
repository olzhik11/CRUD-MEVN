<template>
  <div class="searchBar">
    <input class="input" type="text" placeholder="Search..." :value="modelValue" @input="updateInput">
    <v-btn icon="mdi-magnify" color="white" size="small"></v-btn>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    modelValue: [String],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.searchBar{
  max-width: 400px;
  display: flex;
  width: 100%;
  margin: 10px;
  border: 1px solid white;
  border-radius: 25px 5px;
  padding: 10px;
}
.input{
  outline: none;
  color: white;
  margin: 0 5px;
}

</style>