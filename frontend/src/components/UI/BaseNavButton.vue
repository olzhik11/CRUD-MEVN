<template>
  <v-btn class="button" color="#1d3131" text-color="#a3fab4" >
    <slot>
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: "BaseNavButton"
}
</script>

<style scoped>
.button{
  margin: 20px ;
}
</style>