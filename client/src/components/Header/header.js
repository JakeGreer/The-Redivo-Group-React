import React, { Component } from 'react'
import Logo from './Small-Logo.png'
import "./Header.css"

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="logo clearfix">
                    <img src={Logo} className="top-logo" className="logo-img img-responsive" />
                </div>
                <div className="top">
                    <div className="container">
                        <div className="tabLine">
                            209 AVENIDA DEL MAR | SUITE 104 | SAN CLEMENTE, CALIFORNIA
                        </div>
                        <div className="phoneNum">
                            <i className="fa fa-phone"></i>949 838-5449
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="bottom">
                    <div className="container">
                        <div className="navbar">
                            <a className="btn navbar-btn navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="menu-btn-name">Menu</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </a>
                            <div className="navbar-collapse collapse">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="index.html">HOME</a></li>
                                    <li><a href="properties.html">Properties</a></li>
                                    <li><a href="about.html">ABOUT</a></li>
                                    <li ><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">CONTACT US</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header




