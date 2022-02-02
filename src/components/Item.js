//npm imports
import React from 'react';

const Item = (props) => {
    const {product, category, price} = props.item;
   
    return(
        <div className='ui card'>
            <div className='content'>
            <h3 className='header'>{product}</h3>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            </div>
        </div>
    )
}
export default Item;