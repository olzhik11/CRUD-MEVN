<template>
  <div class="navbar">
    <div class="nav_btns">
      <BaseNavButton @click="$router.push({path: '/', query: {page: 1}})">[crud app]</BaseNavButton>
      <BaseLoginState :color="color" :key="isAuth"/>
    </div>
    <div class="nav_btns">
      <BaseNavButton icon @click="$router.push('/')"><v-icon>mdi-home</v-icon></BaseNavButton>
      <div v-if="isAuth">
        <BaseNavButton icon="mdi-account" @click="$router.push(`/user/${username}`)"></BaseNavButton>
      </div>
      <v-divider vertical color="#1d3131"></v-divider>
      <div v-if="!isAuth">
        <BaseNavButton @click="$router.push('/user/register')" >Sign up</BaseNavButton>
        <BaseNavButton @click="$router.push('/user/login')" >Log in</BaseNavButton>
      </div>
      <div v-if="isAuth" class="nav_btns">
        <BaseNavButton @click="logOut">Log out</BaseNavButton>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import TheNavbarHooks from "@/hooks/TheNavbarHooks";
import BaseLoginState from "@/components/UI/BaseLoginState";
export default {
  name: "TheNavbar",
  components: {BaseLoginState},
  computed: {
    ...mapState({
      one: state => state.miscellaneous.style.BSweet,
      two: state =>  state.miscellaneous.style.LSBrown,
      three: state => state.miscellaneous.style.CBlue,
      isAuth: state => state.users.isAuth,
      color: state => state.users.logInfo.color,
      username: state => state.users.username,
    }),
  },
  methods: {
    ...mapActions({
      updateUsers: 'updateUsers'
    }),
  },
  setup() {
    const {logOut} = TheNavbarHooks()
    return {
      logOut,
    }
  },
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
  align-items: center;
}

</style>