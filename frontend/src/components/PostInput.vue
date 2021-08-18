<template>
  <form @submit.prevent class="inputForm">
    <BaseInput type="text" v-model="post.title" placeholder="Title"/>
    <BaseInput type="text" v-model="post.description" placeholder="Description"/>
    <textarea rows="10" cols="10" v-model="post.body" placeholder="Body"></textarea>
    <BaseWorkButton color="black" @click=createPost class="inputButton">{{method.name}}</BaseWorkButton>
  </form>
</template>

<script>
export default {
  name: "PostInput",
  data() {
    return {
      post: {
        title: '',
        description: '',
        body: '',
      }
    }
  },
  props: {
    method: {
      type: Object,
      required: true
    }
  },
  methods: {
    createPost() {
      if (this.post.title && this.post.body && this.post.description) {
        this.$emit('create', this.post)
        this.post = {title: '', body: '', description: '',}
      } else {this.$toast.show('Please fill all the fields.', {type: 'error'})}
    },
  }
}
</script>

<style scoped>
.inputButton{
  color: #0e171d;
  border-color: #0e171d;
}

.inputForm{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
textarea{
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #0e171d;
  border-radius: 5px;
  margin: 2px;
}
</style>