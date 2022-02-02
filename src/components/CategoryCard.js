//npm imports
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    const { name, category_id, handleSetCategory } = props;
    return(
        <div className='ui card'>
            <div className='content'>
                <h3 className='name'>{name}</h3>
                    <button value={category_id}  className='large ui inverted green button' onClick={handleSetCategory}>Select</button>
            </div>
        </div>
    )
}

export default CategoryCard;