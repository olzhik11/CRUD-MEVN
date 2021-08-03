<template>
  <div class="footer">
    <div class="info">
      <p>Built with</p>
      <div class="infoIcons">
        <img class="icon" src="../assets/mongodb-icon.svg">
        <img class="icon" src="../assets/expressjs-icon.svg">
        <img class="icon" src="../assets/vuejs-icon.svg">
        <img class="icon" src="../assets/nodejs-icon.svg">
      </div>
    </div>
    <div class="links">
      <a href="https://github.com/olzhik11">
      <img class="icon" src="../assets/iconmonstr-github-1.svg" :style="{color: 'white'}">
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer"
}
</script>

<style scoped>
*{
  font-family: Poppins;
  color: white;
}
.footer{
  background: #0e171d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

}
.info{
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
}
.infoIcons{
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}
.links{
  margin: 0 20px;
}
p{
  color: #ef6461;
  font-size: 20px;
  margin: 0 15px;
}
.icon{
  max-width: 30px;
  max-height: 30px;
  margin: 0 10px;
}
</style>