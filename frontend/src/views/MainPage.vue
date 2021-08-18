<template>
  <div class="main">
    <TheNavbar/>
  <div class="app">
    <div class="controlButtons">
      <BaseWorkButton @click="showWindow">Create</BaseWorkButton>
      <BaseWorkButton :color="one" @click="deleteAllPosts">Delete all</BaseWorkButton>
      <BaseWorkButton :color="two" @click="$router.push('/posts/searchPosts')">Search</BaseWorkButton>
    </div>
    <div class="content">
    <BaseInputWindow v-model:show="show" @showWindow="showWindow">
      <PostInput @create="createPost" :method="{name: 'Create post'}"/>
    </BaseInputWindow>
      <PostList :posts="paginatedPosts" @deleteOne="deletePost"/>
      <v-pagination :length="pageNums" color="white" v-model="currentPage" @click="paginate"></v-pagination>
  </div>
  </div>
  <TheFooter/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import mainPageHooks from "@/hooks/MainPageHooks";
import mainPageWindowHooks from "@/hooks/MainPageWindowHooks";
import PostInput from "@/components/PostInput";
import PostList from "@/components/PostList";
import TheNavbar from "@/components/UI/TheNavbar";
import TheFooter from "@/components/UI/TheFooter";
import axios from "axios";
export default {
  name: "MainPage",
  components: {TheFooter, TheNavbar, PostList, PostInput},
  computed: {
    ...mapState({
      one: state => state.miscellaneous.style.BSweet,
      two: state =>  state.miscellaneous.style.LSBrown,
      three: state => state.miscellaneous.style.CBlue,
      isAuth: state => state.users.isAuth,
      token: state => state.users.token,
      username: state => state.users.username,
    }),
  },
  setup() {
    const {posts, createPost, deletePost, currentPage, pageSize, pageNums, paginate,
    paginatedPosts} = mainPageHooks()
    const {show, showWindow} = mainPageWindowHooks()
    return {posts, createPost, deletePost, show, showWindow, currentPage, pageSize, pageNums, paginate,
    paginatedPosts}
  },
  methods: {
    deleteAllPosts() {
      if (this.isAuth) {
        if (this.searchedPosts.length === 0) {
          this.$toast.info('No posts.', {type: ''})
        } else{
          axios.delete('http://localhost:5000/posts')
              .then((res) => {
                console.log(res)
              })
              .catch((err) => {
                console.log(err)
              })
           }
      } else{
        this.$toast.error('Please log in.')
      }
    },
  },

}
</script>
<style scoped>

.app{
  display:flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  background: #162129;
  min-height: 78vh;
}
.controlButtons{
  margin: 10px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
.upper{
  display: flex;
  flex-direction: row;
}

</style>

