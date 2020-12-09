import * as axios from 'axios';
const token = 'EAAB8Oh178T8BANiGAwUzfODSVZCRnk8HzbUDD7EjYizRbGbEJHMjg0n2WeH33tL66YmOg56L8ZADJwqSbGoIc1vnndXr64RrrOlU1kOt5ezZBinWZCgaubaseLn4i0XrHTsn7Nn8qPMnZB5b9lfVB1iTHFXZCqFTO9Ym1C7JI46OcxhpbjUsDUv3rDiT0xnAbMz407VmQlTN96dAULXlSssJs4o7zyJkADKP0ZBsPqHMwZDZD'

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
        