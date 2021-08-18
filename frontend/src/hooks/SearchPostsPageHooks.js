import axios from 'axios'
import {computed, onMounted, ref, watchEffect} from 'vue'
import store from "@/store";

export default function SearchPostsPageHooks() {
    const posts = ref([])
    const searchInput = ref('')
    const option = ref('title')
    const fetchPosts = async() => {
        axios.get(`http://localhost:5000/posts`)
            .then((res) => {
                posts.value = res.data.posts
            })
            .catch((err) => console.log(err))
    }
    const deletePost = async (post) => {
        if (store.state.users.isAuth) {
            await axios.delete(`http://localhost:5000/posts/${post._id}`)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => console.log(err))
            await fetchPosts()
        }else {
            alert('Please log in.')
        }
    }
    const searchedPosts = computed(() => {
        return posts.value.filter((post) => {return post.title.toLowerCase().includes(searchInput.value.toLowerCase())})
    })
    const sortPosts = computed(() => {
        return searchedPosts.value.sort((a, b) => {
            if (a[option.value].toLowerCase() > b[option.value].toLowerCase()) return 1
            if (a[option.value].toLowerCase() < b[option.value].toLowerCase()) return -1
            return 0
        })})
    const resolve = () => {
        option.value = ''
    }
    watchEffect(() => {(option.value) ? posts.value = sortPosts.value : posts.value = searchedPosts.value
     })
    onMounted(fetchPosts)
    return {
        posts, searchInput, option, searchedPosts, sortPosts, resolve, deletePost
    }
}