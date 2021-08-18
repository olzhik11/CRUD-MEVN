<template>
  <TheNavbar/>
  <div class="registerPage">
    <div class="window">
      <form class="register">
        <BaseInput class="input" v-model="user.username" type="text" placeholder="Username"/>
        <BaseInput class="input" v-model="user.password" type="text" placeholder="Password"/>
        <BaseWorkButton :color="three" class="signUpButton" @click="sendUser">Sign Up</BaseWorkButton>
      </form>
    </div>
  </div>
  <TheFooter/>
</template>

<script>
import {mapState} from 'vuex'
import TheNavbar from "../components/UI/TheNavbar";
import TheFooter from "../components/UI/TheFooter";
import axios from 'axios'
export default {
  name: "RegisterPage",
  components: {TheFooter, TheNavbar},
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      one: state => state.miscellaneous.style.BSweet,
      two: state =>  state.miscellaneous.style.LSBrown,
      three: state => state.miscellaneous.style.CBlue
    }),
  },
  methods: {
    async sendUser() {
      await axios.post("http://localhost:5000/user/register", this.user)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>
.registerPage{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #162129;
  min-height: 80.2vh;
}
.window{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 12px;
  min-height: 200px;
  min-width: 400px;
  background: #a3fab4;
}
.register{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.signUpButton{
  color: #0e171d;
  border-color: #0e171d;
}
</style>