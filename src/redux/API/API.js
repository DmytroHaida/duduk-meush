import * as axios from 'axios';

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://uadictionary.herokuapp.com/',
    headers:  {
        'content-type': 'application/json'
    }
})


export const NewsPostsAPI = {
    addFeedback(obj) {
        axios.post("https://uadictionary.herokuapp.com/feedback", obj).then(res => console.log(res)).catch(err => console.log(err))
    },
    addPost(obj) {
       return instance.post("blog/post", obj).then(res => console.log(res)).catch(err => console.log(err))
    },
    editPost(obj){
        return instance.put(`blog/newsPosts/${obj._id}`, obj)
    },
    deletePost(postsId) {
        return instance.delete(`/blog/newsPosts/${postsId}`)
    }
}