<template>
  <div class="navbar">
    <div>
      <just-button  @click="$router.push('/')" :style="{fontSize: '30px'}">CRUD App</just-button>
    </div>
    <div class="nav_btns">
      <just-button id="button" @click="$router.push('/')">Home</just-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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