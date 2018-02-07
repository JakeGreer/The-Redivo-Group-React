import React from "react"
import SelectorBtn from "../../components/Selector-Button"

const PropTypeSection = (props) => {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-5">
                <SelectorBtn image={ "../public/img/Residential.png" } id="Residential" clickFunction={props.clickFunction}/>
            </div>
            <div className="col-md-5">
                <SelectorBtn image={ "../public/img/Commercial.png" } id="Commercial" clickFunction={props.clickFunction}/>
            </div>
        </div>
    )
}

export default PropTypeSection