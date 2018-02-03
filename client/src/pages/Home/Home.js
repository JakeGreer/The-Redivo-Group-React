import React from "react";
import Carousel from '../../components/Carousel'
import Discover from '../../components/Discover'
import Testimonial from '../../components/Testimonial'
import './Home.css'

const Home = (props) => {

    return(
        <div>
            <div className='carousel-container'>
                <div className='carousel-div'>
                    <Carousel carouselName='headerCarousel' images={true} slides={['slide1a.jpg','slide2a.jpg','slide3a.jpg']} />
                </div>
            </div>
            <div className='discover-container'>
                <Discover />
            </div>
            <div className='testimonial-container' style={{backgroundImage:`url(${'../public/img/testimonial-bg.jpg'})`}}>
                <Testimonial />
            </div>
        </div>
    )
}

export default Home