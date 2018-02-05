import React from 'react'
import Testimonials from './Testimonials'
import AccordionData from './AccordionData'
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import AccordionMenu from '../AccordionMenu'
import './Testimonial.css'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'




const Testimonial = (props) => {
    return(
        <div className='container'>
            <div className='row'>
                <div className=''>
                    <div className='row' id='testimonial-first-row'>
                        <div className='col-md-6 mx-auto'>
                            <div className='testimonial-h-container-a'>
                                <h1 className='testimonial-h-a'>TESTIMONIAL</h1>
                            </div>
                            <ReactCarousel
                                emulateTouch={true}
                                infiniteLoop={true}
                                dynamicHeight={true}
                                showArrows={false}
                            >
                            {Testimonials.map(function(testimony,i){
                                return(
                                    <div className='testimony-div' id={`text-slide-${i}`} key={`text-slide-${i}`}>
                                        <h3 className='testimony-title'>{`${testimony.title}`}</h3>
                                        <ul className='ratings'>
                                            <li>
                                                <i class="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star"></i>
                                            </li>
                                        </ul>
                                        <p className='testimony-p'>{`${testimony.body}`}</p>
                                        <div className='client-div'>
                                            <h3 className='client-h'>{`- ${testimony.client}, ${testimony.source}`}</h3>
                                        </div>
                                    </div>
                                )})
                            }
                            </ReactCarousel>
                         </div> 
                        <div className='col-md-6 mx-auto'>
                            <div className='testimonial-h-container-b'>
                                <h1 className='testimonial-h-b'>MOVING RESOURCES</h1>                           
                            </div>
                            <div className='accordion-container'>
                                <AccordionMenu content={AccordionData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial