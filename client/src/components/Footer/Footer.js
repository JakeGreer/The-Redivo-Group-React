import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div id="footer">
            <div className="top-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <Link to="#" class="footer-logo"><img src="../public/img/Clear-Logo.png" alt="" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="text">
                            <div className="header">QUICK LINK</div>
                            <ul className="quick-links-footer">
                                <li><Link to="#">Agent</Link></li>
                                <li><Link to="properties.html">Properties</Link></li>
                                <li><Link to="#">Features</Link></li>
                                <li><Link to="blog.html">Blog</Link></li>
                                <li><Link to="contact.html">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="text">
                            <div className="header">OUR OFFICE</div>
                            <ul className="foot-address">
                                <li>
                                    <i className="fa fa-globe"></i>
                                     The Redivo Group, Inc.<br />
                                    209 Avenida Del Mar<br />
                                    Suite 104 <br />
                                    San Clemente, CA 92673
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                     p. 949-838-5449
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i>
                                     hello@realestatepro.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <a href="#"><img id="star" src="../public/img/Star-Estates.png" alt="" /></a>
                    </div>
                </div>
            </div>
            </div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    Copyright The Redivo Group 2018
                </li>
            </ul>
        </div>
    )
}

export default Footer