import React from 'react'
import './Discover.css'

const Discover = (props) => {

    return(
        <div>
            <div className='container' id='discover-container'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='row' id='discover-first-row'>
                            <div className='col-md-9'>
                            <div className='discover-h-container'>
                                <h1 className='discover-h-a'>DISCOVER THE REDIVO</h1>
                                <h1 className='discover-h-b'>GROUP DIFFERENCE</h1> 
                            </div>
                            </div>
                            <div className='col-md-3'>
                                <img className='profile-image' src='../public/img/Rechelle.jpg' alt='Rachelle-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover