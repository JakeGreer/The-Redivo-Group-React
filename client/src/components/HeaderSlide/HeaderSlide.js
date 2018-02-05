import React from 'react'
import Carousel from '../Carousel'
import './HeaderSlide.css'

const HeaderSlide = (props) => {

    return(
        <div className='container'>
            <Carousel 
                carouselName='headerCarousel' 
                images={true} 
                slides={[
                    'slide1a.jpg',
                    'slide2a.jpg',
                    'slide3a.jpg'
                ]}
            />
        </div>
    )
}

export default HeaderSlide