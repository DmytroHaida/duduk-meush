import React from 'react'
import { connect } from 'react-redux'
import Widgets from './widgets'
import {facebookGetPosts} from '../../../redux/reducer/facebook-reducer'

const WidgetsContainer = (props) => {
    if(props.facebookPosts.length === 0) {
        props.facebookGetPosts()
    }
    return (
        <>
        <Widgets facebookPosts={props.facebookPosts}/>
        </>
    )
}
const mapStateToProps =(state) => ({
    facebookPosts: state.facebook.facebookPosts
})
export default connect(mapStateToProps,{facebookGetPosts})(WidgetsContainer) ;