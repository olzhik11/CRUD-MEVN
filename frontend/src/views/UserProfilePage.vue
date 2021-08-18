<template>
  <TheNavbar/>
  <div class="userProfilePage">
    <v-card class="card" rounded>
      <v-card-title>User profile</v-card-title>
      <v-card-header>Username: {{username}}</v-card-header>
      <v-card-header>Authenticated: {{isAuth}}</v-card-header>
    </v-card>
  </div>
  <TheFooter/>
</template>

<script>
import TheNavbar from "@/components/UI/TheNavbar";
import TheFooter from "@/components/UI/TheFooter";
import axios from 'axios'
import {mapState} from "vuex";
export default {
  name: "UserProfilePage",
  components: {TheFooter, TheNavbar},
  methods: {
    getUser() {
      axios.get(`http://localhost:5000/user/${this.username}`)
    }
  },
  computed: {
    ...mapState({
      one: state => state.miscellaneous.style.BSweet,
      two: state =>  state.miscellaneous.style.LSBrown,
      three: state => state.miscellaneous.style.CBlue,
      isAuth: state => state.users.isAuth,
      username: state => state.users.username,
      token: state => state.users.username,
    }),
  }
}
</script>

<style scoped>
*{
  color: black;
}
.userProfilePage{
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background: #162129;
  min-height: 78vh;
}
.card{
  max-width: 400px;
  max-height: 400px;
}
</style>