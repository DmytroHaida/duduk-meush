import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NewPostsContainer from './Posts/PostsContainer'
import FeedbackCreatorReduxForm from './feedback';
import { feedbackReducer } from '../../redux/reducer/post-reducer';
import AboutMe from './aboutMe';
import WidgetsContainer from './widgets/widgetsContainer';


export const Content = (props) => {
    const onSubmit = (obj)=> {
        feedbackReducer(obj)
        console.log(obj)
    }
    return (
        <div className="container">
            <div className="content-wrapper">
                <div className="main-content">
                    <Route exact path='/' render={() => <NewPostsContainer />} />
                    <Route path='/Зворотний_зв’язок' render={() => <FeedbackCreatorReduxForm onSubmit={onSubmit}/> } />
                    <Route path='/Про_мене' render={() => <AboutMe />} />
                    <Redirect  from='/' to='/'/>
                </div>
                <WidgetsContainer />
            </div>
        </div>
    );
}
