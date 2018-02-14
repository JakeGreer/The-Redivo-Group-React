import React from "react"
import "./PropertySearchField.css"
import Autocomplete from '../Autocomplete'


const PropertySearchField = (props) => { 
    return (        
        <div className="auto-complete-div">
                <Autocomplete queryString={props.queryString} typeString={props.typeString} />
                {/*I commented this out, I don't know if you need anything off it still, delete it if you dont */}
                {/* <form className="form-wrapper">
                    <input
                        type="text"
                        name="data"
                        id="search-field"
                        value={props.data}
                        placeholder="Enter an address, neighborhood, city or ZIP code"
                        onChange={props.handleChange}/>
                    <button type="submit" id="form-btn" className="btn btn-lg">Submit</button>
                </form> */}
            </div>

    )
}

export default PropertySearchField