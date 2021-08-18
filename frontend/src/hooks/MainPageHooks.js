import axios from "axios";
import {onMounted, ref} from 'vue'
import store from '@/store'
import {useRouter} from 'vue-router'
export default function mainPageHooks() {
    const paginatedPosts = ref([])
    const currentPage = ref(1)
    const pageSize = ref(2)
    const pageNums = ref(0)
    const providedPosts = ref([])
    const router = useRouter()
    const paginate = () => {
        router.push({path: '/', query: {page: currentPage.value}})
        axios.get(`http://localhost:5000/posts?page=${currentPage.value}&limit=${pageSize.value}`)
            .then((res) => {
                paginatedPosts.value = res.data.paginatedPosts
                pageNums.value = Math.ceil(res.data.totalSize/pageSize.value)
            })
            .catch((err) => console.log(err))
        console.log('fetched')
    }
    const fetchPaginated = async() => {}
        axios.get(`http://localhost:5000/posts?page=${currentPage.value}&limit=${pageSize.value}`)
            .then((res) => {
                paginatedPosts.value = res.data.paginatedPosts
                pageNums.value = Math.ceil(res.data.totalSize/pageSize.value)
            })
            .catch((err) => console.log(err))

    const createPost = async (event) => {
        let newPost = {
            title: event.title,
            description: event.description,
            body: event.body,
        }
        await axios.post('http://localhost:5000/posts', newPost)
            .then((res) => {
                console.log(res)
                fetchPaginated()
            })
            .catch((err) => (console.log(err)))
    }
    const deletePost = async (post) => {
        if (store.state.users.isAuth) {
            await axios.delete(`http://localhost:5000/posts/${post._id}`)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => console.log(err))
            await fetchPaginated()
        }else {
            alert('Please log in.')
        }
    }
    onMounted(fetchPaginated)
    return {
        createPost,
        deletePost,
        providedPosts,
        currentPage,
        pageSize,
        pageNums,
        fetchPaginated,
        paginate,
        paginatedPosts
    }
}