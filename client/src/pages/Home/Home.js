import React from "react";
import Accolades from '../../components/Accolades'
import Carousel from '../../components/Carousel'
import Discover from '../../components/Discover'
import HeaderSlide from '../../components/HeaderSlide'
import Testimonial from '../../components/Testimonial'
import './Home.css'

const Home = (props) => {

    return(
        <div>
            <div className='carousel-container'>
                <div className='carousel-div'>
                    <HeaderSlide />
                </div>
            </div>
            <div className='discover-container'>
                <Discover />
            </div>
            <div className='testimonial-container' style={{backgroundImage:`url(${'../public/img/testimonial-bg.jpg'})`}}>
                <Testimonial />
            </div>
            <div className='accolades-container'>
                <Accolades />
            </div>
        </div>
    )
}

export default Home