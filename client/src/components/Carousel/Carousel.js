import React from "react";
import './Carousel.css';

const Carousel = (props) => (

            <div id="carouselExampleIndicators" className="carousel slide" interval="5000" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-fluid" src="../public/img/slide1a.jpg" alt="slide1 pic" />                        
                    </div>

                    <div className="carousel-item">
                        <img className="" src="../public/img/slide2a.jpg" alt="slide2 pic" />
                    </div>

                    <div className="carousel-item">
                        <img className="" src="../public/img/slide3a.jpg" alt="slide3 pic" />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <div className='testimg'>
                arhehagfhadfa
                </div>
            </div>

)


export default Carousel;
