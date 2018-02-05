import React from "react"
import SelectorBtn from "../../components/Selector-Button"

const PropTypeSection = () => {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-5">
                <SelectorBtn image={ "../public/img/Residential.png" } clickFunction={this.handlePropType}/>
            </div>
            <div className="col-md-5">
                <SelectorBtn image={ "../public/img/Commercial.png" } clickFunction={this.handlePropType}/>
            </div>
        </div>
    )
}

export default PropTypeSection