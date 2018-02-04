import React from 'react';
import './AccordionMenu.css'

const AccordionMenu = (props) => {
    console.log('accordion props', props)
    
    const content = props.content
    console.log('accordion props', content)
    return (
        <div className='accordion-div' id='accordion'>
            {content.map(function(content, i){
            return(
            <div className="card" key={i}>
                <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <div className="header-div" data-toggle="collapse" data-target={`#collapse${i+1}`} aria-expanded={i <= 0 ? `true` : `false`} aria-controls={`collapse${i+1}`}>
                    {content.header}
                    </div>
                </h5>
                </div>
                <div id={`collapse${i+1}`} className={i <= 0 ? `collapse show` : `collapse`} aria-labelledby={`heading ${i+1}`} data-parent="#accordion">
                    <div className="card-body">
                        <div className='row accordion-panel'>
                            <div className='col-6'>
                                <h4 className='accordion-text-content-header'>{content.leftHeader}</h4>
                                <ul className='accordian-list list-left'>
                                    {content.leftList.map(function(item,i){
                                        return(
                                            <li className='accordian-list-item'>
                                                <i className={`${item.icon} list-icon`}/>
                                                <p>{item.text}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className='col-6 '>
                            <h4 className='accordion-text-content-header'>{content.rightHeader}</h4>
                            <ul className='accordian-list list-right'>
                                    {content.rightList ? content.rightList.map(function(item,i){
                                        return(
                                            <li className='accordian-list-item'>
                                                <i className={`${item.icon} list-icon`}/>
                                                <p>{item.text}</p>
                                            </li>
                                        )
                                    }): ""}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            })}
        </div>
    )
}
  


export default AccordionMenu