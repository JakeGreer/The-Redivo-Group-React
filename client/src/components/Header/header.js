import React, { Component } from 'react'
import Logo from './Small-Logo.png'
import "./Header.css"

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="logo clearfix">
                    <a id="logo"><img src={Logo} className="logo-img img-responsive top-logo" /></a>
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
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header




