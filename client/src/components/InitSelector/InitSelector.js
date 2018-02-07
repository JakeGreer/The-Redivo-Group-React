import React from "react"
import SelectorBtn from "../../components/Selector-Button"

const InitSelector = ( props ) =>  {
    return (
        <div className="row">
            <div className="col-md-4">
                <SelectorBtn image={"../public/img/Residential.png"} clickFunction={props.clickFunction}
                             id={"Buy"}/>
            </div>
            <div className="col-md-4">
                <SelectorBtn image={"../public/img/Residential.png"} clickFunction={props.clickFunction}
                             id={"Rent"}/>
            </div>
            <div className="col-md-4">
                <SelectorBtn image={"../public/img/Residential.png"} clickFunction={props.clickFunction}
                             id={"Sell"}/>
            </div>
        </div>
    )
}

export default InitSelector