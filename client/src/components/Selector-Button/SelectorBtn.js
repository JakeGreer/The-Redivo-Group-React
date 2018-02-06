import React from "react";
import "./SelectorBtn.css";
import { Link } from "react-router-dom"

const SelectorBtn = (props) =>
{
    return (
        <a className="area-selector" onClick={ props.clickFunction }>
            <img className="area-img" id={ props.id } src={ props.image } />
        </a>
    )
}

export default SelectorBtn;