import React, { useState } from 'react';
// import moment from 'moment';
// import 'moment/locale/uk';
import PostEditor from './PostEditor';

const Posts = (props) => {
    let { isAdmin, posts } = props
    const [editMode, setEditMode] = useState();
    const [currentPostValue, setCurrentPostValue] = useState();

    const onEditorSubmit = (e) => {
        props.postEditor(e)
        console.log(e)
        setEditMode(false)
        setCurrentPostValue(null)

    }
    const initialValueForEdit = (id, Image, Header, Body) => {
        setCurrentPostValue(
            {
                id: id,
                postImage: Image,
                postHeader: Header,
                postText: Body
            }
        )
    }
    return (
        <>
            {posts.map(n => editMode === n._id
                ? <PostEditor onSubmit={onEditorSubmit} testPosts={props.testPosts} currentPostValue={currentPostValue} setEditMode={setEditMode}/>
                : < div className="post" key={n._id} >
                    <div className="post-image">
                        <img src={n.postImage} alt="Зображення статті" />
                    </div>
                    <h4>{n.postHeader}</h4>
                    <p dangerouslySetInnerHTML={{ __html: n.postText }}></p>
                    <div className="post-footer">
                        <div>Час Створення</div>
                        <div>Прочитати всю статтю</div>
                    </div>
                    {isAdmin === true 
                    ?<div className="post-footer">
                        <button onClick={() => props.deletePost(n._id)}>Видалити пост</button>
                        <button onClick={() => initialValueForEdit(n._id, n.postImage,
                            n.postHeader, n.postText, setEditMode(n._id))}>Відредагувати</button>
                    </div>
                    : null
                    }
                    <div className="post-footer-more-detail">
                        <button>Детальніше</button>
                    </div>
                </div >
            )}
        </>
    )
}
export default Posts;