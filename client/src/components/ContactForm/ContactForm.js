import React from "react"
import "./ContactForm.css"

const ContactForm = ( props ) => {
    return (
        <div>
            <div className="discover-text contact-info">
                <div className="discover-h-container">
                    <h1 className="discover-h-b">CONTACT FORM</h1>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <input type="text" id="email" class="form-control" placeholder="Email" />
                </div>
                <div className="row">
                    <textarea type="text" id="content" class="form-control" placeholder="Comments" />
                </div>
            </form>
        </div>
    )
}

export default ContactForm