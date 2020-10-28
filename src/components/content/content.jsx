import React from 'react';
import placeImage from '../../assets/img/placeImage.jpg'
import facebookTweet from '../../assets/img/facebook-messenger-white.svg'
import comments from '../../assets/img/comments.png'
export const Content = (props) => {
    return (
        <div className="container">
            <div className="content-wrapper">
                <div className="main-content">
                    <div className="post">
                        <div className="post-image">
                            <img src={placeImage} alt="" />
                        </div>
                        <h4>Тут буде заголовок статті чи новини</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam quis officia temporibus omnis est laborum, accusamus et,
                             labore animi eveniet velit neque eos optio quidem, sequi illo quaerat assumenda necessitatibus.</p>
                        <span>cтворeнно 01:03:2020р</span>
                        <hr />
                    </div>
                    <div className="post">
                        <div className="post-image">
                            <img src={placeImage} alt="" />
                        </div>
                        <h4>Тут буде заголовок статті чи новини</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam quis officia temporibus omnis est laborum, accusamus et,
                             labore animi eveniet velit neque eos optio quidem, sequi illo quaerat assumenda necessitatibus.</p>
                        <span>cтворeнно 02:06:2020р</span>
                    </div>
                    <div className="post">
                        <div className="post-image">
                            <img src={placeImage} alt="" />
                        </div>
                        <h4>Тут буде заголовок статті чи новини</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam quis officia temporibus omnis est laborum, accusamus et,
                             labore animi eveniet velit neque eos optio quidem, sequi illo quaerat assumenda necessitatibus.</p>
                        <span>cтворeнно 02:06:2020р</span>
                    </div>

                </div>
                <div className="widgets">
                    <div className="widget-wrapper">
                        <div className="widget-container">
                            <h5>Дописи з фейсбука </h5>
                            <div className="widget-row">
                                <div><img src={facebookTweet} width="25px" alt="" /></div>
                                <div className="widget-facebook-content" >
                                    <p>Заголовок дописа</p>
                                    <a href="https://www.facebook.com/events/1459339601120410" target="_blank"><p>https://www.facebook.com/events/1459339601120410</p></a>
                                    <p>01.01.2000 - 16-00</p>
                                </div>
                            </div>
                            <hr />
                            <div className="widget-row">
                                <div><img src={facebookTweet} width="25px" alt="" /></div>
                                <div className="widget-facebook-content">
                                    <p>Коронавірус (COVID-19): центр інформації</p>
                                    <a href="https://www.facebook.com/coronavirus_info/?page_source=bookmark" target="_blank"><p>https://www.facebook.com/coronavirus_info/?page_source=bookmark</p></a>
                                    <p>01.01.2000 - 16-00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-wrapper">
                        <div className="widget-container">
                            <h5>Популярні пости</h5>
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