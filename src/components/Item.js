import React from 'react';

const Item = (props) => {
    const {name,description,price,image} = props.item;
   
    return(
        <div className='ui card'>
            <img className='image' src={image} alt='item'/>
            <div className='content'>
            <h3 className='header'>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            </div>
        </div>
    )
}
export default Item;