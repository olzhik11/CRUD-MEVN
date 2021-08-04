<template>
  <TheNavbar/>
  <div class="editPage">
    <div class="window">
      <form class="postInput">
        <BaseInput class="input" type="text" v-model="post.title" placeholder="Title"/>
        <BaseInput class="input" type="text" v-model="post.description" placeholder="Description"/>
        <textarea class="input" rows="10" cols="10" v-model="post.body" placeholder="Body"></textarea>
      <BaseWorkButton :color="three" class="inputButton" @click="editPost">Edit post</BaseWorkButton>
      <BaseWorkButton :color="three" class="inputButton" @click="deletePost">Delete post</BaseWorkButton>
      </form>
    </div>
  </div>
  <TheFooter/>
</template>
<script>
import {mapState} from 'vuex'
import postEditPost from '@/hooks/postEditPost'
import {useRoute, useRouter} from 'vue-router'
import TheNavbar from "@/components/UI/TheNavbar";
import TheFooter from "@/components/UI/TheFooter";
export default {
  name: "PostEditPage",
  components: {TheFooter, TheNavbar},
  computed: {
    ...mapState({
      one: state => state.miscellaneous.style.BSweet,
      two: state =>  state.miscellaneous.style.LSBrown,
      three: state => state.miscellaneous.style.CBlue
    }),
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const id = route.params.id
    const {deletePost, editPost, fetching, post} = postEditPost(id, router)
    return {deletePost, editPost, fetching, post}
  }
}
</script>

<style scoped>
*{
  font-family: Poppins;
  font-size: 15px;
}
.editPage{
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
  border-radius: 12px;
  min-height: 200px;
  min-width: 400px;
  background: #a3fab4;
}
.input{
  padding: 10px 15px;
  border: 2px solid #0e171d;
  border-radius: 5px;
  margin: 2px;
}
.postInput{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.inputButton{
  color: #0e171d;
  border-color: #0e171d;
}
.inputButton:hover{
  border-color: #0e171d;
}
</style>