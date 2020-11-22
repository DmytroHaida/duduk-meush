import React from 'react';
import Posts from './Posts';
import PostCreator from "./PostCreator";
import { connect } from 'react-redux';
import { addPost, getPosts, deletePost, editPost } from '../../../redux/reducer/post-reducer';

const NewPostContainer = (props) => {

    const postEditor = (obj) => {
        props.editPost(obj)
    }
    const deletePost = (id) => {
        props.deletePost(id)
    }
    const addPost = (data) => {
        props.addPost(data)
    }
    return (
        <div>
            {props.isAdmin === true
                ? <PostCreator
                    addPost={addPost}
                />
                : null
            }
            <Posts
                posts={props.posts}
                isAdmin={props.isAdmin}
                deletePost={deletePost}
                postEditor={postEditor}
            />

        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    isAdmin: state.posts.isAdmin
})

export default connect(mapStateToProps, { addPost, getPosts, deletePost, editPost })(NewPostContainer)