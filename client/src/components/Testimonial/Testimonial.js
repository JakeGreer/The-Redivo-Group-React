import React from 'react'
import Carousel from '../Carousel'
import Testimonials from './Testimonials'
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import './Testimonial.css'

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const Testimonial = (props) => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row' id='testimonial-first-row'>
                        <div className='col-md-6'>
                            <div className='testimonial-h-container-a'>
                                <h1 className='testimonial-h-a'>TESTIMONIAL</h1>
                            </div>
                            <ReactCarousel
                                emulateTouch={1}
                                infiniteLoop={1}
                                dynamicHeight={1}
                                showArrows={0}
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
                                )
                            })
                        }
                            </ReactCarousel>
                            {/* <Carousel images={false} carouselName='tesimonialCarousel' testimonials={[
                                {
                                    title: 'We guarantee excellence and work hard to help you find your dream home',
                                    body: `"Words cannot express our gratitude for the service and professionalism that Richelle Redivo provided us.
                                    We had an almost impossible task of selling our home in Oceanside to secure our dream home in San Clemente.
                                    Thanks to Shelley, she made our dream come true. She was tenacious regarding our open
                                    houses , even at the expense of her own personal schedule. She led us through the difficult process of seller-buyer with ease
                                    and provided technical  assistance along the way. We have bought and sold many homes throughout our lives and Shelley is the most
                                    outstanding realtor we have ever met."`,
                                    clients:[`Peggy`, `Terry Marecic`],
                                    sources:[`Zillow Reviewer`],
                                    stars: 5
                                },
                                {
                                    title: `From one family to another, we know what it takes to find that perfect house`,
                                    body: `"Richelle Redivo worked tirelessly to help us get our condo in great shape even though it was shamefully neglected. 
                                    She even enlisted the help of her family members to make sure the place was ready for showing as soon as possible! 
                                    Because she knew we needed the sale to happen as quickly as possible, she split  her commission with another realtor 
                                    who brought us a buyer on the very first weekend it was showed and at the full asking price! She cheerfully helped with 
                                    the smallest detail giving advice and generously sharing excellent workmen resources. Because we are physically limited 
                                    and had already moved out of the neighborhood, she even helped with manual chores and decorative choices. 
                                    She is unusually intelligent and very kind. Strangely enough, I gave her a referral this same day."`,
                                    clients:[`joycogan`],
                                    sources:[`Zillow Reviewer`],
                                    stars: 5

                                },
                                {
                                    title: `From one family to another, we know what it takes to find that perfect house`,
                                    body: `"We had the BEST experience with Richelle. She helped my husband and I buy our first home. 
                                    We were intimidated about buying a home and I can honestly say she made the process so smooth and fun. 
                                    She has a lot of knowledge and is so good at what she does. Richelle has such a caring heart and truly 
                                    wants the best for you and will make it happen. Richelle was referred to us by family friends and after getting to know her, 
                                    I'd refer Richelle to anyone!"`,
                                    clients:[`diver12sh`],
                                    sources:[`Zillow Reviewer`],
                                    stars: 5
                                },

                            ]}/>
                            <div className='testimonial-carousel'>

                            </div> */}
                         </div> 
                        <div className='col-md-6'>
                            <div className='testimonial-h-container-b'>
                                <h1 className='testimonial-h-b'>MOVING RESOURCES</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial