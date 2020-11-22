import React from 'react'
import mailLogo from '../../assets/img/black-icon-social-media-logos-mail.png'
import phoneLogo from '../../assets/img/phone@2x.png'
import viberLogo from '../../assets/img/viber-icon.png'
import facebookLogo from '../../assets/img/icons/facebook.png'
import twitterLogo from '../../assets/img/icons/twitter.png'
import linkedinLogo from '../../assets/img/icons/Linkedin.png'
import instagram from '../../assets/img/icons/Instagram.png'
import { Link } from 'react-router-dom'
export const Footer =() => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-item" >
                        <h6>Я у соцмережах</h6>
                        <Link to="/" className="footer-item-row">
                            <img src={facebookLogo} width="20px" alt="facebooks"/><span>Facebook</span>
                        </Link>
                        <Link to="/" className="footer-item-row">
                            <img src={twitterLogo} width="20px" alt="twitter"/><span>Twitter</span>
                        </Link>
                        <Link to="/" className="footer-item-row">
                            <img src={linkedinLogo} height="20px" alt="linkedin"/><span>LinkedIn</span>
                        </Link>
                        <Link to="/" className="footer-item-row">
                            <img src={instagram} height="20px" alt="instagram"/><span>Instagram</span>
                        </Link>

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
                    {/* <div className="footer-item">
                        <h6>Розширені можливості</h6>
                        <div>
                            <input type="text" placeholder="Імя"/>
                            <input type="text" placeholder="Емейл"/>
                            <span>Реєстрація</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}