import React from "react"
import "./ContactInfo.css"
import { Container } from "../../components/Grid"

const ContactInfo = () => {
    return (
        <div>
            <div className="discover-text contact-info">
                <div className="discover-h-container">
                    <h1 className="discover-h-b">ADDRESS, PHONE & EMAIL</h1>
                </div>
                <Container>
                    <ul className="contact-li">
                        <li className="contact-text">
                            <i className="fa fa-globe contact-icon"></i>
                            209 AVENIDA DEL
                            MAR
                            SUITE 104
                            SAN CLEMENTE, CA
                        </li>
                        <li className="contact-text">
                            <i className="fa fa-phone contact-icon"></i>
                            p. (949) 838-5449
                        </li>
                        <li className="contact-text">
                            <i className="fa fa-envelope contact-icon"></i>
                            hello@realestatepro.com
                        </li>
                    </ul>
                </Container>
            </div>
        </div>
    )
}

export default ContactInfo