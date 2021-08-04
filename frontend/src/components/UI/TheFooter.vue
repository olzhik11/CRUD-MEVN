<template>
  <div class="footer">
    <div class="info">
      <p>Built with</p>
      <div class="infoIcons" v-for="icon in icons" :key="icon.id">
        <img class="icon"  :src="icon.src" :alt="icon.alt">
      </div>
    </div>
    <div class="links">
      <a href="https://github.com/olzhik11">
      <img class="icon" src="../../assets/iconmonstr-github-1.svg" alt="GitHub">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      icons: [{src: require("../../assets/mongodb-icon.svg"), alt: "MongoDB"},
          {src: require("../../assets/expressjs-icon.svg"), alt: "Express.js"},
          {src: require("../../assets/vuejs-icon.svg"), alt: "Vue.js"},
          {src: require("../../assets/nodejs-icon.svg"), alt: "GitHub"}]
    }
  }
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