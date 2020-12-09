import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/img/icons/logo.png';
import nameLogo from '../../assets/img/headerOvnerPhoto.png';
import NavigationBar from './NavigationBar';
import { loginPopupMode } from '../../redux/reducer/login-reducer';
import { connect } from 'react-redux';

const Header = (props) => {
    let navigationBarStyle = "sticky-navigation-bar";
    const [a, setA] = useState(false);
    const popupToggler = () => {
        props.loginPopupMode(true)
    }
    // useEffect(()=> {
    //     window.addEventListener("scroll", toggleBodyClass)
    //     toggleBodyClass();
    // },[])
    // const toggleBodyClass = () => {
    //     if (window.scrollY > 62) {
    //         setA(true)
    //       console.log(navigationBarStyle)
    //     }else {
    //         setA(false)
    //     }
    //   }
    return (
        <header className="header">
            <div className="hat-wrapper">
                <div className="container">
                    <div className="hat">
                        <div className="hat-name">
                            <img src={nameLogo} width="190px" alt="" />
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <NavLink to="/">Головна</NavLink>

                                </li>
                                <li>
                                    <NavLink to="/Про_мене">Про Мене</NavLink>
                                </li>
                                <li>
                                    <img src={logo} width="80px" alt="dd" />
                                </li>
                                <li >
                                    <Link to="/" onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}>Соцмережі</Link>
                                </li>
                                <li onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}>
                                    <Link to="/">Контакти</Link>
                                </li>
                            </ul>
                            <h1> Дидик-Меуш Ганна</h1>
                        </div>
                        <div className="hat-callback">
                            <NavLink to="/Зворотний_зв’язок">Зворотний зв’язок</NavLink>
                            <Link to="/" className="_login" onClick={() => popupToggler()} >Вхід</Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={`navigation-bar-border${a ? navigationBarStyle : ''}`}>
                <div className="navigation-bar-wrapper">
                    <div className="container">
                        <div className="navigation-bar">
                            <div className="navigation-bar-title">
                                <h3>Новини Цього сайту</h3>
                                <p>Головна &gt;</p>
                            </div>
                            <div className="navigation-bar-menu">
                                <NavigationBar />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
const mapStateToProps = (state) => ({
    modalToggler: state.login.modalToggler
})
export default connect(mapStateToProps, { loginPopupMode })(Header)