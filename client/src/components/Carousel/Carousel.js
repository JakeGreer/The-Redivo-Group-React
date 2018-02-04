import React from "react";
import ImgSlide from '../ImgSlide'
import './Carousel.css';

const Carousel = (props) => {

    return(
            <div id={props.carouselName} className="carousel slide" interval="5000" data-ride="carousel">
                <ol className="carousel-indicators">
                    {props.slides.map(function(slides,i){
                            return (
                                <li data-target={`#${props.carouselName}`} key={i} data-slide-to={i} className={i <= 0 ? "active" : ""}></li>
                            )
                        })
                    }
                </ol>
                <div className="carousel-inner">
                        {props.slides.map(function(slide,i){
                            return(
                                <div className={i <= 0 ? "carousel-item active" : "carousel-item"} key={`${slide}-${i}` }>
                                    <ImgSlide id={`id-${slide}-${i}` } image={slide}  />
                                </div>
                            )
                        })
                    }                        
                </div>
                <a className="carousel-control-prev" href={`#${props.carouselName}`} role="button" data-slide="prev">
                    <i class="fas fa-angle-left"></i>
                </a>
                <a className="carousel-control-next" href={`#${props.carouselName}`}  role="button" data-slide="next" onClick={function(){
                    console.log('clicked')
                }}>
                    <i class="fas fa-angle-right"></i>  
                </a>
            </div>
    )

}


export default Carousel;
