import React from "react";
import Carousel from '../../components/Carousel'
import Discover from '../../components/Discover'
import Testimonial from '../../components/Testimonial'
import './Home.css'

const Home = (props) => {

    return(
        <div>
            <div className='carousel-container'>
                <Carousel />
            </div>
            <div className='discover-container'>
                <Discover />
            </div>
        </div>
    )
}

export default Home