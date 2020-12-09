import { NewsPostsAPI } from '../API/API';

const SET_NEWS_POSTS = 'SET_NEWS_POSTS';
const SET_EDIT_POST_DATA = 'SET_EDIT_POST_DATA';


let initialState = {

    posts: [
        {
            _id: 1,
            postImage: 'https://korali.info/uploads/images/default/osin.jpg',
            postHeader: 'Тут буде заголовок статті',
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quis officia temporibus omnis est laborum, accusamus et,labore animi eveniet velit neque eos optio quidem, sequi illo quaerat assumenda necessitatibus.',
            createdAt: null,
            updatedAt: null
        },
        {
            _id: 2,
            postImage: 'https://korali.info/uploads/images/default/osin.jpg',
            postHeader: 'Тут буде заголовок статті',
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quis officia temporibus omnis est laborum, accusamus et,labore animi eveniet velit neque eos optio quidem, sequi illo quaerat assumenda necessitatibus.',
            createdAt: null,
            updatedAt: null
        }
    ],
    isAdmin: false
}


const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_POSTS:
            return {
                ...state, posts: action.posts
            }
        case SET_EDIT_POST_DATA:
            return {

                ...state, currentPostsValueForEdit: action.CurrentPostsValue
            }
        default:
            return state
    }
}
//action creator
export const setPosts = (posts) => ({ type: SET_NEWS_POSTS, posts })
export const setCurrentPostsValue = (CurrentPostsValue) => ({ type: SET_EDIT_POST_DATA, CurrentPostsValue })

//thunk dispatch
export const feedbackReducer = (obj) => {
    NewsPostsAPI.addFeedback(obj)
}
export const getPosts = (posts) => async (dispatch) => {
    // let response = await NewsPostsAPI.getPosts(posts)
    // let postsData = response.data.blogs
    // dispatch(setPosts(postsData))
}
export const addPost = (posts) => async (dispatch) => {
    await NewsPostsAPI.addPost(posts)
    // dispatch(getPosts())
}
export const deletePost = (id) => async (dispatch) => {
    // await NewsPostsAPI.deletePost(id);
    // dispatch(getPosts());
}
export const editPost = (obj) => async (dispatch) => {
    // await NewsPostsAPI.editPost(obj)
    // dispatch(getPosts());
}

export default PostsReducer;
