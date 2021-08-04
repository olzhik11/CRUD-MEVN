<template>
    <div class="post">
      <div class="post_content">
        <p id="title">{{post.title}}</p>
        <p id="description">{{post.description}}</p>
        <p id="body">{{post.body}}</p>
        <p id="date">{{post.createdAt.substring(0,10)}}</p>
      </div>
      <div class="buttons">
        <BaseWorkButton  @click="onClick">Read post</BaseWorkButton>
        <BaseWorkButton :color="one" @click="$emit('deleteOne', post)">Delete post</BaseWorkButton>
        <BaseWorkButton :color="two" @click="editPost">Edit post</BaseWorkButton>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {useRouter} from 'vue-router'
import {toRef} from 'vue'
export default {
  name: "PostListItem",
  computed: {
    ...mapState({
      one: state => state.miscellaneous.style.BSweet,
      two: state =>  state.miscellaneous.style.LSBrown,
      three: state => state.miscellaneous.style.CBlue
    }),
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props){
    const router = useRouter()
    const post = toRef(props, 'post')
    const editPost = () => {
      router.push(`/posts/edit/${post.value._id}`)
    }
    const onClick = () => {
      router.push(`/posts/${post.value._id}`)
    }
    return {editPost, onClick}

  },

}
</script>

<style scoped>
*{
  font-family: Poppins;
  color: white;
  text-decoration: none;
}
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 800px;
  border: 2px solid #a3fab4;
  border-radius: 5px;
  margin: 15px 5px;
  padding: 10px;
  transition: all 0.5s ease;
}
.post:hover{
  border-color: #deffe7;
  background: #1d3131;
}
.post_content{
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 10px;
  margin: 5px;
}
p {
  margin: 5px;
}
#title{
  font-size: 25px;
  font-weight: bold;
  max-width: 800px;
}
#description{
  font-size: 20px;
  max-width: 800px;
}
#body{
  max-width: 800px;
  font-size: 18px;
}
#date{
  font-size: 15px;
  color: gray;
  position: relative;
  top: 20px;
}
.buttons {
  display: flex;
  flex-direction: column;
}
</style>
