import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick'
import ImageSlide from '../ImgSlide'
import './Accolades.css'


const Accolades = () => {
    
    const slides=[
        'award1.jpg',
        'award2.jpg',
        'award3.png',
        'award4.jpg',
        'award5.jpg'
    ]

    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        initialSlide: 0,
        slidesToScroll: 4,
        slidesToShow: 4,
        speed: 500,
        responsive: [ 
            { 
                breakpoint: 1024, 
                settings: { 
                    slidesToShow: 3,
                    slidesToScroll: 3 
                } 
            }, 
            { 
                breakpoint: 767, 
                settings: { 
                    initailSlide: 2,
                    slidesToShow: 2,
                    slidesToScroll: 2
                } 
            },
            { 
                breakpoint: 480, 
                settings: { 
                    slidesToShow: 1,
                    slidesToScroll: 1 
                } 
            },
 
        ],
    }
      return (
        <div className='container'>

        
        <Slider {...settings}>
          {slides.map(function(slide,i){
            let dirPath = `../public/img/${slide}`
            return(
                <div className='accolade-slide-div text-center' id={`text-slide-${i}`} key={`text-slide-${i}`}>
                    <img className='accolades-slide text-center' id={`${slide.split('.')[0]}-slide-${+i}`} src={dirPath} key={`acc-slide-${i}`} />
                </div>
            )})
        }
        </Slider>
        </div>
      )
}

export default Accolades