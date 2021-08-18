<template>
    <v-card variant="outlined" elevation="10" class="post">
      <div class="post_content">
        <p id="title">{{post.title}}</p>
        <p id="description">{{post.description}}</p>
        <p id="body">{{post.body}}</p>
        <p id="date">{{post.createdAt.substring(0,10)}}</p>
      </div>
      <div class="buttons">
        <BaseWorkButton @click="onClick"><v-icon color="#a3fab4">mdi-book-open</v-icon></BaseWorkButton>
        <BaseWorkButton :color="one" @click="$emit('deleteOne', post)"><v-icon color="#ef6461">mdi-delete</v-icon></BaseWorkButton>
        <BaseWorkButton :color="two" @click="editPost"><v-icon color="#e4b363">mdi-pencil</v-icon></BaseWorkButton>
      </div>
    </v-card>
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
      three: state => state.miscellaneous.style.CBlue,
      isAuth: state => state.users.isAuth
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
  color: white;
}
.post {
  display: flex;
  align-items: center;
  width: 950px;
  background: #162129;
  margin: 15px 5px;
  padding: 10px;
  transition: all 0.5s ease;
  border-radius: 25px 5px;
}
.post:hover{
  background: #1d3131;
}
.post_content{
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 10px;
  margin: 5px;
  width: 100%;
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
