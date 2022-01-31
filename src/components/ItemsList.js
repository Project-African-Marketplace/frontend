import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Item from './Item';

const ItemsList = () => {
  const [items,setItems] = useState([]);
  useEffect(()=> {
    axios.get('https://fakerapi.it/api/v1/products')
    .then(res =>{
      console.log(res.data.data)
      setItems(res.data.data)
    })
    .catch(err => console.log(err))
  },[])

  

  return(
   
    <div className="ui grid container">
      {items.map(item=> <div className="four wide column"><Item key={item.ean} item={item}/></div>)}
    <div className="row">
      <Link to="/additem">
        <button className="large ui inverted green button">Add Item</button>
      </Link>
    </div>
    
    </div>
  ) 
};

export default ItemsList;
