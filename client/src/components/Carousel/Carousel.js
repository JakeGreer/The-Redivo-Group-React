import React from "react";
import './Carousel.css';

const Carousel = (props) => (
        <div className='carousel-div'>
            <div id="carouselExampleIndicators" className="carousel slide" interval="5000" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='slide-div' style={{backgroundImage:`url(${'../public/img/slide1a.jpg'})`}} />   
                    </div>

                    <div className="carousel-item">

                        <div className='slide-div' style={{backgroundImage:`url(${'../public/img/slide2a.jpg'})`}} />
                    </div>

                    <div className="carousel-item">
                        <div className='slide-div' style={{backgroundImage:`url(${'../public/img/slide3a.jpg'})`}} />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i class="fas fa-angle-left"></i>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <i class="fas fa-angle-right"></i>  
                </a>
            </div>
        </div>

)


export default Carousel;
