<template>
  <div class="window" v-if="show" @click="hideWindow">
    <div @click.stop class="windowContent">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "BaseInputWindow",
  props: {
    show: Boolean
  },
  methods: {
    hideWindow() {
      this.$emit('update:show', false)
    }
  }
}
</script>
<style scoped>
.window {
  top: 0; bottom: 0; left: 0; right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
  z-index: 1;
}
.windowContent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background: #a3fab4;
  border-radius: 12px;
  min-height: 200px;
  min-width: 400px;
  padding: 20px;
}
</style>