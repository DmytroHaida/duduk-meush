import React from 'react';
import facebookTweet from '../../assets/img/facebook-messenger-white.svg'
import comments from '../../assets/img/comments.png'
import { Route, Redirect } from 'react-router-dom';
import NewPostsContainer from './Posts/PostsContainer'
import FeedbackCreatorReduxForm from './feedback';
import { feedbackReducer } from '../../redux/reducer/post-reducer';
import AboutMe from './aboutMe';


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
                <div className="widgets">
                    <div className="widget-wrapper">
                        <div className="widget-container">
                            <h5>Дописи з фейсбука </h5>
                            <div className="widget-row">
                                <div><img src={facebookTweet} width="25px" alt="" /></div>
                                <div className="widget-facebook-content" >
                                    <p>Заголовок дописа</p>
                                    <a href="https://www.facebook.com/events/1459339601120410" rel="noopener noreferrer" target="_blank"><p>https://www.facebook.com/events/1459339601120410</p></a>
                                    <p>01.01.2000 - 16-00</p>
                                </div>
                            </div>
                            <hr />
                            <div className="widget-row">
                                <div><img src={facebookTweet} width="25px" alt="" /></div>
                                <div className="widget-facebook-content">
                                    <p>Коронавірус (COVID-19): центр інформації</p>
                                    <a href="https://www.facebook.com/coronavirus_info/?page_source=bookmark" rel="noopener noreferrer" target="_blank"><p>https://www.facebook.com/coronavirus_info/?page_source=bookmark</p></a>
                                    <p>01.01.2000 - 16-00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-wrapper">
                        <div className="widget-container">
                            <h5>Популярні дописи</h5>
                            <div className="widget-row">
                                <div>
                                    <div className="widget-popular-posts-image">
                                        <img src="https://via.placeholder.com/90x70/262626" alt="" />
                                    </div>
                                </div>
                                <div className="widget-popular-posts">
                                    <p>Новина №1</p>
                                    <div><img src={comments} alt="" /><span> 51 коментарів</span></div>
                                </div>
                            </div>
                            <div className="widget-row">
                                <div>
                                    <div className="widget-popular-posts-image">
                                        <img src="https://via.placeholder.com/90x70/262626" alt="" />
                                    </div>
                                </div>
                                <div className="widget-popular-posts">
                                    <p>Новина №2</p>
                                    <div><img src={comments} alt="" /><span> 32 коментарів</span></div>
                                </div>
                            </div>
                            <div className="widget-row">
                                <div>
                                    <div className="widget-popular-posts-image">
                                        <img src="https://via.placeholder.com/90x70/262626" alt="" />
                                    </div>
                                </div>
                                <div className="widget-popular-posts">
                                    <p>Новина №3</p>
                                    <div><img src={comments} alt="" /><span> 12 коментарів</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-wrapper">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
