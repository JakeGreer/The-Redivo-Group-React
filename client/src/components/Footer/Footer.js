import React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <div id="footer">
            <div className="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <a href="#" class="logo"><img src="../public/img/Clear-Logo.png" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="text">
                            <div className="header">QUICK LINK</div>
                            <ul className="quick-links">
                                <li><a href="#">Agent</a></li>
                                <li><a href="properties.html">Properties</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
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
        </div>
    )
}

export default Footer