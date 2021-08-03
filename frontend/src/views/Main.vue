<template>
  <div class="main">
  <Navbar/>
  <div class="app">
    <div class="controlButtons">
      <work-button @click="showWindow" class="create">Create post</work-button>
      <work-button :color="$store.state.colors.style.one" @click="deleteAllPosts">Delete all posts</work-button>
    </div>
    <div class="content">
    <input-window v-model:show="show" @showWindow="showWindow">
      <post-input @create="createPost" :method="{name: 'Create post'}"/>
    </input-window>
      <post-list :posts="posts" @deleteOne="deletePost"/>
  </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import postsMain from "@/hooks/postsMain";
import windowMain from "@/hooks/windowMain";
export default {
  name: "Main",
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

