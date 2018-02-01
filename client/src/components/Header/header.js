import React, { Component } from 'react'
import Logo from './Small-Logo.png'
import "./Header.css"

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="top col-md-12 col-sm-12 col-xs-12">
                        <div className="logo">
                            <a id="logo"><img src={Logo} className="logo-img img-responsive" /></a>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-xs-12 col-sm-12 main-color-txt address-header text-center">
                                    <strong>209 AVENIDA DEL MAR | SUITE 104 | SAN CLEMENTE, CALIFORNIA</strong>
                                </div>
                                <div className="col-md-2 col-xs-12 col-sm-12 phone main-color-txt phone" >
                                    <i className="fa fa-phone"></i><strong>949 838-5449</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="bottom col-md-12">
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
            </div>
        )
    }
}

export default Header




