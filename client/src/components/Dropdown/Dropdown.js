import React from 'react'

const Dropdown = (props) =>{


    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.title}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {props.items.map(function(item,i){
                    return <button class="dropdown-item" key={`${item.name}${i}`} id={item.name} onClick={item.onClick} type="button">{item.name}</button>
                })}
            </div>
        </div>
    )
}


export default Dropdown