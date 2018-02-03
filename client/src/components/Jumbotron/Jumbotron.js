import React from "react";
import './Jumbotron.css';

const Jumbotron = (props) => {

    let imageUrl = "../public/img/slide2.png";

    return(
    <header>
        <div className="jumbotron text-center" 
            style={{
                backgroundImage: 'url(' + imageUrl + ')'
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title">{props.header}</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
)}


export default Jumbotron;

