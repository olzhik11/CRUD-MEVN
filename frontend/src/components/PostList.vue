<template>
  <div class="postList">
  <div v-if="posts.length > 0" class="ifPostList">
    <transition-group name="list" tag="p">
    <post v-for="post in posts" :post="post" :key="post._id" @deleteOne="$emit('deleteOne', post)" class="list-item"/>
    </transition-group>
  </div>
  <h1 v-else :style="{color: 'red'}"><strong>There are no posts</strong></h1>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

}
</script>

<style scoped>
.ifPostList{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-item {
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
h1{
  min-width: 800px;
  margin: 15px 5px;
  padding: 10px;
}
</style>