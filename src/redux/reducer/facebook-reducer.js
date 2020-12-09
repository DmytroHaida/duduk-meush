import { facebookAPI } from '../API/API';

const SET_FACEBOOK_POSTS = 'SET_FACEBOOK_POSTS';


let initialState = {

    facebookPosts: []
}


const FacebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FACEBOOK_POSTS:
            return {
                ...state, facebookPosts: action.facebookPosts
            }
        default:
            return state
    }
}
//action creator
export const setFacebookPosts = (facebookPosts) => ({ type: SET_FACEBOOK_POSTS, facebookPosts})

export const facebookGetPosts = () => async (dispatch) => {
    let facebookPosts = await facebookAPI.facebookPosts()
    dispatch(setFacebookPosts(facebookPosts.data.posts.data)) 

}


export default FacebookReducer;
