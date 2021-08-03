import axios from "axios";
import {ref, onMounted} from 'vue'
export default function postsMain() {
    const posts = ref([])
    const fetching = async () => {
        axios.get('http://localhost:5000/posts')
            .then((res) => {
                console.log(res.data)
                posts.value = res.data
            })
            .catch((err) => {console.log(err)})
    }
    const deleteAllPosts = async () => {
        await axios.delete('http://localhost:5000/posts')
            .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)})
        await fetching()
    }
    const createPost = async (event) => {
        let newPost = {
            title: event.title,
            description: event.description,
            body: event.body,
        }
        await axios.post('http://localhost:5000/posts', newPost)
            .then((res) => {
                console.log(res)
                fetching()
            })
            .catch((err) => (console.log(err)))
    }
    const deletePost = async (post) => {
        await axios.delete(`http://localhost:5000/posts/${post._id}`)
            .then((res) => {console.log(res)})
            .catch((err) => console.log(err))
        await fetching()
    }
    onMounted(fetching)
    return {
        posts,
        createPost,
        deletePost,
        deleteAllPosts
    }

}