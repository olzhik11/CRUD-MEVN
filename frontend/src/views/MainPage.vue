<template>
  <div class="main">
  <TheNavbar/>
  <div class="app">
    <div class="controlButtons">
      <BaseWorkButton @click="showWindow" class="create">Create post</BaseWorkButton>
      <BaseWorkButton :color="one" @click="deleteAllPosts">Delete all posts</BaseWorkButton>
    </div>
    <div class="content">
    <BaseInputWindow v-model:show="show" @showWindow="showWindow">
      <PostInput @create="createPost" :method="{name: 'Create post'}"/>
    </BaseInputWindow>
      <PostList :posts="posts" @deleteOne="deletePost"/>
  </div>
  </div>
  <TheFooter/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import postsMain from "@/hooks/postsMain";
import windowMain from "@/hooks/windowMain";
import PostInput from "@/components/PostInput";
import PostList from "@/components/PostList";
import TheNavbar from "@/components/UI/TheNavbar";
import TheFooter from "@/components/UI/TheFooter";
export default {
  name: "MainPage",
  components: {TheFooter, TheNavbar, PostList, PostInput},
  computed: {
    ...mapState({
      one: state => state.miscellaneous.style.BSweet,
      two: state =>  state.miscellaneous.style.LSBrown,
      three: state => state.miscellaneous.style.CBlue
    }),
  },
  setup() {
    const {posts, createPost, deletePost, deleteAllPosts} = postsMain()
    const {show, showWindow} = windowMain()
    return {posts, createPost, deletePost, deleteAllPosts, show, showWindow}
  }
}
</script>
<style scoped>
.app{
  display:flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  background: #162129;
  min-height: 80.2vh;
}
.controlButtons{
  margin: 10px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
</style>

