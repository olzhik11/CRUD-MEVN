<template>
  <div class="wrapper-select">
    <BaseWorkButton @click="$emit('option', 'createdAt')" :color="'#e4b363'">
      By date
    </BaseWorkButton >
    <BaseWorkButton @click="$emit('option', 'title')" :color="'#e4b363'">
      By title
    </BaseWorkButton>
  </div>
</template>

<script>
export default {
  name: "SelectSort",
}
</script>

<style scoped>
.wrapper-select{
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>