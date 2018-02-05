import React from 'react'
import './Discover.css'
import { Link } from 'react-router-dom'

const Discover = (props) => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>

                    <div className='row' id='discover-first-row'>
                        <div className='col-md-8'>
                            <div className='discover-text'>
                                <div className='discover-h-container'>
                                    <h1 className='discover-h-a'>DISCOVER THE REDIVO</h1>
                                    <h1 className='discover-h-b'>GROUP DIFFERENCE</h1> 
                                </div>
                                <h4 className='discover-subtitle'>Experienced Real Estate Pro's you can trust</h4>
                                <p>The Redivo Group performs real estate transactions at the highest level.
                                    Get the most out of your real estate transaction, work with a cutting edge
                                    Orange County real estate team that lives to give their clients the best service possible.
                                    Live Southern California luxury at its finest.</p>

                                <div className='row'>
                                <div className='col-md-4 profile-image-mobile text-center mx-auto'>
                            <img className='profile-image img-fluid text-center mx-auto' src='../public/img/Rechelle.jpg' alt='Rachelle-img' />
                        </div>
                                    <div className='col-6'>
                                        <ul className='checklist'>
                                            <li>
                                                <i class="far fa-check-circle"/>
                                                Locals
                                            </li>
                                            <li>
                                                <i class="far fa-check-circle"/>
                                                Family Oriented
                                            </li>
                                            <li>
                                                <i class="far fa-check-circle"/>
                                                Devoted
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-6'>
                                        <ul className='checklist'>
                                            <li>
                                                <i class="far fa-check-circle"/>
                                                Logical
                                            </li>
                                            <li>
                                                <i class="far fa-check-circle"/>
                                                Knowledgeable
                                            </li>
                                            <li>
                                                <i class="far fa-check-circle"/>
                                                Right Choice
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Link to='/contact' className="btn know-btn">KNOW MORE</Link>
                            </div>
                        </div>
                        <div className='col-md-4 profile-image-desktop'>
                            <img className='profile-image img-fluid' src='../public/img/Rechelle.jpg' alt='Rachelle-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover