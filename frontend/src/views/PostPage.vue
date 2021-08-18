<template>
  <TheNavbar/>
  <div class="postPage">
    <div class="post">
      <p id="title">{{post.title}}</p>
      <p id="description">{{post.description}}</p>
      <p id="body">{{post.body}}</p>
    </div>
  </div>
  <TheFooter/>
</template>

<script>
import postPageHooks from "@/hooks/PostPageHooks";
import {useRoute} from 'vue-router'
import {onMounted} from "vue";
import TheNavbar from "@/components/UI/TheNavbar";
import TheFooter from "@/components/UI/TheFooter";
export default {
  name: "PostPage",
  components: {TheFooter, TheNavbar},
  setup() {
    const route = useRoute()
    const id = route.params.id
    const {post, getPost} = postPageHooks(id)
    onMounted(getPost(id))
    return {post}
  }
}
</script>
<style scoped>
.postPage{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 80.2vh;
  background: #162129;
}
.post{
  min-width: 400px;
  max-width: 1000px;
  padding: 20px;
  margin: 30px;
  border: 2px solid #a3fab4;
  border-radius: 10px;
  color: white;
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
p {
  margin: 10px;
}
</style>