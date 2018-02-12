import React from "react"

const AboutCards = ( props ) => {
    return (
        <div className="row">
            <div className="col-8">
            <div className="discover-text contact-info">
                <div className="discover-h-container">
                    <h1 className="discover-h-a">About</h1>
                    <h1 className="discover-h-b">{ props.name }</h1>
                    <br />
                    <h4 className="discover-subtitle">{ props.role }</h4>
                    <h4 className="discover-subtitle">{ props.attributes }</h4>
                </div>
                <p>
                    { props.text }
                </p>
            </div>
            </div>
            <div className="col-4">
                <img src={ props.image } className="img-fluid"/>
            </div>
        </div>
    )
}

export default AboutCards