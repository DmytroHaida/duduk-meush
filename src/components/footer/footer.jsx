import React from 'react'
import mailLogo from '../../assets/img/black-icon-social-media-logos-mail.png'
import phoneLogo from '../../assets/img/phone@2x.png'
import viberLogo from '../../assets/img/viber-icon.png'
import facebookLogo from '../../assets/img/facebook.png'
import twitterLogo from '../../assets/img/twitter.png'
import linkedinLogo from '../../assets/img/linkedin.png'
export const Footer =() => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-item">
                        <h6>ПРО МЕНЕ</h6>
                        <div className="footer-item-row">
                            <p>Панграма - це текст, який вміщає в собі всі літери абетки і тому ідеально підходить для перевірки шрифтів на сторінці.</p>
                        </div>
                        <div className="footer-aboutme-social">
                                <img src={facebookLogo} alt=""/>
                                <img src={twitterLogo} alt=""/>
                                <img src={linkedinLogo} height="20px" alt=""/>
                            </div>
                    </div>
                    <div className="footer-item">
                        <h6>КОНТАКТИ</h6>
                        <div className="footer-item-row">
                            <img src={mailLogo} width="25px" alt=""/>
                            <span>info@premiumcoding.com</span>
                        </div>
                        <div className="footer-item-row">
                            <img src={phoneLogo} width="25px" alt=""/>
                            <span>097-555-55-55</span>
                        </div>
                        <div className="footer-item-row">
                            <img src={viberLogo} width="25px" alt=""/>
                            <span>097-555-55-55</span>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6>Розширені можливості</h6>
                        <div>
                            <input type="text" placeholder="Імя"/>
                            <input type="text" placeholder="Емейл"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}