import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import "./Header.css"

const Header = () => {

    return(
        <div className="header">
            <div className="row">
                <div className="top col-md-12 col-sm-12 col-xs-12">
                    <div className="logo">
                        <a id="logo"><img src='../public/img/Small-Logo.png' className="logo-img img-responsive" /></a>
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
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/properties">Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header




