<template>
  <TheNavbar/>
  <div class="searchPostsPage">
    <div class="controlButtons">
      <SelectSort @option="updateOption"/>
    </div>
    <div>
    <v-badge v-model="posts.length" :value="Number" :content="posts.length" color="#a3fab4">
      <SearchBar v-model="searchInput" />
    </v-badge>
      <PostList :posts="searchedPosts" @deleteOne="deletePost"/>
    </div>
  </div>
  <TheFooter/>
</template>

<script>
import TheFooter from "@/components/UI/TheFooter";
import TheNavbar from "@/components/UI/TheNavbar";
import SearchBar from "@/components/UI/SearchBar";
import SelectSort from "@/components/UI/SelectSort";
import PostList from "@/components/PostList";
import SearchPostsPageHooks from "@/hooks/SearchPostsPageHooks";
export default {
  name: "SearchedPosts",
  components: {PostList, SelectSort, SearchBar, TheNavbar, TheFooter},
  methods: {
    updateOption(event) {
      this.option = event
    },
  },
  setup() {
    const {posts, searchInput, option, searchedPosts, sortPosts, resolve, deletePost} = SearchPostsPageHooks()
    return {
      posts, searchedPosts, sortPosts, option, searchInput, resolve, deletePost
    }
  },

}
</script>

<style scoped>
.searchPostsPage{
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
</style>