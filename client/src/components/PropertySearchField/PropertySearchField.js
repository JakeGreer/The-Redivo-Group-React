import React from "react"
import "./PropertySearchField"

const PropertySearchField = ( props ) => {
    return (
        <div className="row text-center">
            <form action="#">
                <input type="text" name="username" className = "name" placeholder = "Enter an address, neighborhood, city or ZIP code"/>
                <button href="#" className="btn btn-xl btn-light">Send</button>
            </form>
        </div>
    )
}

export default PropertySearchField