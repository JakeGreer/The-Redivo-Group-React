import React from "react"
import SelectorBtn from "../../components/Selector-Button"

const InitSelector = ( props ) =>  {
    return (
        <div className="row">
            <div className="col-4">
                <SelectorBtn image={"../public/img/buy.jpg"} clickFunction={props.clickFunction}
                             id={"Buy"}/>
            </div>
            <div className="col-4">
                <SelectorBtn image={"../public/img/rent.jpg"} clickFunction={props.clickFunction}
                             id={"Sell"}/>
            </div>
            <div className="col-4">
                <SelectorBtn image={"../public/img/sell.jpg"} clickFunction={props.clickFunction}
                             id={"Rent"}/>
            </div>
        </div>
    )
}

export default InitSelector