import React, { useState } from 'react';
import { convertToRaw, EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { stateFromHTML } from 'draft-js-import-html';

const PostEditor = (props) => {
    let {postText, id, postHeader, postImage} = props.currentPostValue
    const [editorState, setEditorState] = useState();
    const [image, setImage] = useState();
    const [headerText, setHeader] = useState(postHeader);
    const [bodyText, setBody] = useState();
    
    if (editorState === undefined) {
        setBody(postText)
        let contentState = stateFromHTML(postText);
        let state = EditorState.createWithContent(contentState)
        setEditorState(state)
    }

    const bodyTextOnChange = (e) => {
        setEditorState(e)
        let raw = convertToRaw(editorState.getCurrentContent())
        setBody(draftToHtml(raw))
        
    }
    const getImage = (e) => {
        setImage(e.target.files[0])
    }
    const getHeader = (e) => {
        setHeader(e.target.value)
    }
    const addCreatedPost = () => {
        const data = new FormData()
        data.append('BlogHeader', headerText)
        data.append('bodyText', bodyText)
        data.append('loadImage', image)
        props.addPost(data)
    }
    return (
            < div className="postCreator"  >
                <div >
                    <input type="file"
                        id={id}
                        accept="image/jpeg,image/png"
                        onChange={getImage} />
                    <label htmlFor={id}>Вставте картинку</label>
                    
                    {image === undefined ? null : <span> {image.name} </span>}
                </div>
                <div className="post-image">
                    <img src={postImage} alt=""/>
                </div>
                <div>
                    <input type="text"
                        placeholder="Заголовок"
                        onChange={getHeader}
                        value={headerText}
                        />
                </div>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={bodyTextOnChange}
                    placeholder="Текст поста"
                    toolbar={{
                        options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history']
                    }
                    }
                />
                <button onClick={() => addCreatedPost() } >Зберегти пост</button>
                <button onClick={() => props.setEditMode(false)}>Вийти без змін</button>
            </div>
    )
}
export default PostEditor;