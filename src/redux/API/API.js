import * as axios from 'axios';
const token = 'EAAB8Oh178T8BAAOId5PpuntdnXeF6NTSZBA0ytBdGXyoFb1ZCOSdiI6NPiykX3zYVrZBa1JkzCIYlMqXPZCQyJDSisXycXcNwieVeNlT9vU4pqOeR51n0nAbEHu9zEaipFatGwMus7fsMACmiey628Lz88ImLSENrWuyTBsW9DX4YesMeVcgNRpymZAnurA8ZD'

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
export const facebookAPI = {
    facebookPosts(e) {
        return axios.get(`https://graph.facebook.com/v9.0/me?fields=id,name,posts&access_token=${token}`)
    }
}
        