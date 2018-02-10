import React from "react"
import "./PropertySearchField.css"

const PropertySearchField = ( props ) => {
    return (
        <div className="row">
            <div className="col-2"> </div>
            <div className="col-8">
                <form className="form-wrapper">
                    <input type="text" name="data" id="search-field" value={ props.data }
                           placeholder = "Enter an address, neighborhood, city or ZIP code"
                           onChange={props.handleChange} />
                    <button type="submit" id="form-btn" className="btn btn-lg">Submit</button>
                </form>
            </div>
            <div className="col-2"> </div>
        </div>
    )
}

export default PropertySearchField