import React from 'react';
import logo from '../../assets/img/Logo.svg';
import nameLogo from '../../assets/img/lotus--v1.png';
import NavigationBar from './NavigationBar';
const Header = () => {
    return (
        <header>
            <div className="hat-wrapper">
                <div className="container">
                    <div className="hat">
                        <div className="hatName">
                            <img src={nameLogo} width="40px" alt=""/>
                            <p>Д-М Ганна</p>
                        </div>
                        <ul>
                            <li>
                                <a href="">Головна</a>
                            </li>
                            <li>
                                <a href="">Робота</a>
                            </li>
                            <li>
                                <img src={logo} width="50px" alt="dd" />
                            </li>
                            <li>
                                <a href="">Соцмережі</a>
                            </li>
                            <li>
                                <a href="">Контакти</a>
                            </li>
                        </ul>
                        <h4>social</h4>
                    </div>
                </div>
            </div>
            <nav className="navigation-bar-wrapper">
                <div className="navigation-bar-content">
                    <div className="container">
                        <div className="navigation-bar">
                            <div className="navigation-bar-title">
                                <h3>Останні Новини Цього сайту</h3>
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

export default Header;