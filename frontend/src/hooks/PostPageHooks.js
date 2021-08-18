import {ref} from 'vue'
import axios from "axios";

export default function postPageHooks(){
    const post = ref({})

    const getPost = async(id) => {
        axios.get('http://localhost:5000/posts/' + id)
            .then((res) => {
                post.value= res.data
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return {post, getPost}
}