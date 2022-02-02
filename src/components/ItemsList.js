//npm imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

//component imports
import Item from './Item';

//action imports
import { getItems } from "../actions/itemActions";

const ItemsList = ({
  isFetching,
  items,
  error,
  categorySelected, 
  dispatch
}) => {

  const push = useNavigate();

  useEffect(()=> {
    dispatch(getItems(categorySelected));
    console.log(items);
  },[])

  const handleAddItem = (e) => {
    e.preventDefault();
    push("/additem", {replace: true})
  }

  return(
    <>
    {
      error && 
      <h2>Tough Luck: {error}</h2>
    }
    {
      isFetching &&
      <h2>Fetching</h2>
    }
    {!isFetching && !error &&
    <div className="ui grid container">
      {items.map(item=> <div className="four wide column"><Item key={item.product_id} item={item}/></div>)}
      <div className="row">
          <button className="large ui inverted green button" onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
    }
    </>
  ) 
};

const mapStateToProps = state => ({
  isFetching: state.item.isFetching,
  items: state.item.items,
  error: state.item.error,
  categorySelected: state.item.categorySelected
})

export default connect (
  mapStateToProps
)(ItemsList);
