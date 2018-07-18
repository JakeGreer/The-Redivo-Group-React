import React from 'react'
import axios from 'axios'
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete'
import defaultStyles from './defaultStyles.js'
import './Autocomplete.css'

class Autocomplete extends React.Component {

    state = {
        address: '', //autocomplete address
        placeId: '', //autocomplete placeId
        cityString: '', //formatted string with spaces replaced by +'s
        locationObject: {}, //autocomplete result after submitting
	}
	//this is checking the <input>
    onChange = (address, placeId) => this.setState({address, placeId})

    //Sets the state with autocomplete values if you click on an city
    handleSelect = (address, placeId) => {
        this.setState({
            address,
            placeId
        }, () => null)
    }

    //Sets the state with autocomplete values of the top city if press enter
    handleEnter = (address, placeId) => {
        this.setState({
            address,
            placeId
        }, () => null)
    }

    // this fires when you click submit, its what gets the geocode data from google
    // I've already written something take makes the city into a string to add to a
    // query string for simplyRETS
    handleFormSubmit = (e) => {
        e.preventDefault()
        geocodeByAddress(this.state.address).then(x => {
            console.log('autocomplete result', x[0])
            this.setState({
                cityString: x[0]
                    .formatted_address
                    .replace(/\s*,\s*|\s+,/g, ' ')
                    .replace(/\s/g, '+')
                    .toLowerCase()
                    .trim()
            }, //in this callback is probably where you would make the query string using the city, maybe even call the API from here, up to you
                    () => this.props.handleSearch(this.state.cityString,""))
        }).catch(error => console.error(error))


    }

    //Says what the autocomplete is looking for
    options = {
        types: ['(regions)']
    }

    // Log error status and clear dropdown when Google Maps API returns an error.
    onError = (status, clearSuggestions) => {
        console.log('Google Maps API returned error with status: ', status)
        clearSuggestions()
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange
        }

        //dropdown autocomplete
        const renderSuggestion = ({formattedSuggestion}) => (
            <div>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small>{formattedSuggestion.secondaryText}</small>
            </div>
        )

        return (
            <div className='row mx-auto'>
                <div className='col-md-12'>
                    <form className=''onSubmit={this.handleFormSubmit}>
                        <div class="row">
							<div className='col-md-10'>
								<PlacesAutocomplete
									inputProps={inputProps}
									renderSuggestion={renderSuggestion}
									onSelect={this.handleSelect}
									onEnterKeyDown={this.handleEnter}
									highlightFirstSuggestion={true}
									onError={this.onError}
									options={this.options}
									styles={defaultStyles}/>
								</div>
							<div className='col-md-2'>
								<button className='btn autocomplete-btn' type="submit">Search</button>
							</div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Autocomplete