<template>
  <div class="navbar">
    <div>
      <BaseNavButton  @click="$router.push('/')" :style="{fontSize: '30px'}">CRUD App</BaseNavButton>
    </div>
    <div class="nav_btns">
      <BaseNavButton id="button" @click="$router.push('/')">Home</BaseNavButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
}
</script>

<style scoped>
.navbar{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #0e171d;
}
.nav_btns{
  display: flex;
  justify-content: space-between;
}

#button{
  padding: 5px;
  margin: 20px ;
}
</style>