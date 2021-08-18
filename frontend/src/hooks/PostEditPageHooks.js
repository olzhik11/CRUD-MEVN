import axios from "axios";
import {ref, onMounted} from 'vue'

export default function postEditPageHooks(id, router) {
    const post = ref({
        title: '',
        description: '',
        body: '',
    })
    const fetching = async () => {
        axios.get('http://localhost:5000/posts')
            .then((res) => {
                console.log(res.data)
                this.posts = res.data
            })
            .catch((err) => {console.log(err)})
    }
    const editPost = async () => {
        axios.put(`http://localhost:5000/posts/${id}`, {
            title: post.value.title,
            description: post.value.description,
            body: post.value.body})
            .then((res) => {
                console.log(res, 'Post has been updated!')
            })
            .catch((err) => console.log(err))
        await fetching()
        await router.push('/')
    }
    const deletePost = async () => {
        axios.delete(`http://localhost:5000/posts/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        await fetching()
        await router.push('/')
    }
    const getPost = async () => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then((res) => {
                console.log(res)
                post.value.title = res.data.title
                post.value.description = res.data.description
                post.value.body = res.data.body
            })
            .catch((err) => console.log(err))
    }
    onMounted(getPost)
    return {deletePost, editPost, fetching, post}
}


