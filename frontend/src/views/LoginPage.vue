<template>
  <TheNavbar/>
  <div class="loginPage">
    <div class="window">
      <form class="login">
        <BaseInput class="input" v-model="user.username" type="text" placeholder="Username"/>
        <BaseInput class="input" v-model="user.password" type="text" placeholder="Password"/>
        <BaseWorkButton :color="three" class="loginButton" @click="loginUser">Login</BaseWorkButton>
      </form>
    </div>
  </div>
  <TheFooter/>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import TheNavbar from "../components/UI/TheNavbar";
import TheFooter from "../components/UI/TheFooter";
import axios from "axios";
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
      three: state => state.miscellaneous.style.CBlue,
      User: state => state.users.isAuth
    }),
  },
  methods: {
    ...mapActions({
      updateUsers: 'updateUsers'
    }),
    async loginUser() {
      await axios.post("http://localhost:5000/user/login", this.user)
      .then((res) => {
        (res.data) ? this.updateUsers(res.data) : this.updateUsers({isAuth: false, username: '', token: '', expiresIn: ''})
        console.log(res)
        this.$router.push('/')
        this.$toast.show('Logged in!', {type: 'success'})
      })
      .catch((err) => console.log(err))
    }
  }
}
</script>
<style scoped>

.loginPage{
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
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.loginButton{
  color: #0e171d;
  border-color: #0e171d;
}
</style>