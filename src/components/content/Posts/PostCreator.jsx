import React, { useState } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const PostCreator = (props) => {
    const [editorState, setEditorState] = useState();
    const [image, setImage] = useState();
    const [headerText, setHeader] = useState();
    const [bodyText, setBody] = useState();
    let bodyTextOnChange = (e) => {
        setEditorState(e)
        if (editorState !== undefined) {
            let raw = convertToRaw(editorState.getCurrentContent())
            setBody(draftToHtml(raw))
        }
    }
    const getImage = (e) => {
        setImage(e.target.files[0])
    }
    const getHeader = (e) => {
        setHeader(e.target.value)
    }
    const addCreatedPost = () => {
        debugger
        const data = new FormData()
        data.append('BlogHeader', headerText)
        data.append('bodyText', bodyText)
        data.append('loadImage', image)
        props.addPost(data)
    }

    return (
            < div className='postCreator'  >
                <div >
                    <input type="file"
                        id="postCreatorFile"
                        accept="image/jpeg,image/png"
                        onChange={getImage} />
                    <label htmlFor="postCreatorFile">Вставте картинку</label>
                    {image === undefined ? null : <span> {image.name} </span>}
                </div>
                <div>
                    <input type="text"
                        placeholder="Заголовок"
                        onChange={getHeader} />
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
                <button onClick={() => addCreatedPost()} >Зберегти пост</button>
            </div>
    )
}

export default PostCreator;