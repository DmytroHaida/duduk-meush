import React from 'react'
import facebookTweet from '../../../assets/img/facebook-messenger-white.svg'
import comments from '../../../assets/img/comments.png'
import Preloader from '../../../common/Preloader'
import moment from '../../../../node_modules/moment/min/moment-with-locales'

const Widgets = (props) => {
    return (
        <div className="widgets">
            { props.facebookPosts.length === 0
                ? <Preloader width="200px" />
                : <div className="widget-wrapper">
                    <div className="widget-container">
                        <h5>Мої дописи з фейсбука </h5>
                        <div className="widget-row">
                            <div><img src={facebookTweet} width="25px" alt="" /></div>
                            <div className="widget-facebook-content" >
                                <p>{props.facebookPosts[0].message}</p>
                                <a href={`https://www.facebook.com/` + props.facebookPosts[0].id} rel="noopener noreferrer" target="_blank">
                                    <p>{`https://www.facebook.com/` + props.facebookPosts[0].id}</p>
                                </a>
                                <p>{moment(props.facebookPosts[0].created_time).lang("uk").format('lll')}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="widget-row">
                            <div><img src={facebookTweet} width="25px" alt="" /></div>
                            <div className="widget-facebook-content">
                                <p>{props.facebookPosts[1].message}</p>
                                <a href={`https://www.facebook.com/` + props.facebookPosts[1].id} rel="noopener noreferrer" target="_blank">
                                    <p>{`https://www.facebook.com/` + props.facebookPosts[1].id}</p>
                                </a>
                                <p>{moment(props.facebookPosts[0].created_time).lang("uk").format('lll')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
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
    )
}
export default Widgets;