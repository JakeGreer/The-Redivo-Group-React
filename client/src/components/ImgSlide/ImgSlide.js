import React from 'react'
import './ImgSlide.css'

const ImgSlide = (props) => {
    let dirPath = `../public/img/${props.image}`
    return(
            <div className='slide-div' id={`slide-${props.image.split('.')[0]}`} style={{backgroundImage:`url(${dirPath})`}}/>
    )
}

export default ImgSlide