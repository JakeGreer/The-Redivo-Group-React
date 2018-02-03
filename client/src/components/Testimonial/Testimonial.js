import React from 'react'
import './Testimonial.css'

const Testimonial = (props) => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>

                    <div className='row' id='testimonial-first-row'>
                        <div className='col-md-8'>
                            <div className='testimonial-text'>
                                <div className='testimonial-h-container'>
                                    <h1 className='testimonial-h-a'>testimonial THE REDIVO</h1>
                                    <h1 className='testimonial-h-b'>GROUP DIFFERENCE</h1> 
                                </div>
                                <h4 className='testimonial-subtitle'>Experienced Real Estate Pro's you can trust</h4>
                                <p>The Redivo Group performs real estate transactions at the highest level.
                                    Get the most out of your real estate transaction, work with a cutting edge
                                    Orange County real estate team that lives to give their clients the best service possible.
                                    Live Southern California luxury at its finest.</p>

                                <div className='row'>
                                    <div className='col-sm-6'>
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
                                    <div className='col-sm-6'>
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
                                <button href="#" class="btn know-btn">KNOW MORE</button>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <img className='profile-image' src='../public/img/Rechelle.jpg' alt='Rachelle-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial