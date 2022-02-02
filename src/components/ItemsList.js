//npm imports
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//component imports
import Item from './Item';

//action imports
import { getItems } from "../actions/itemActions";

const ItemsList = ({
  isFetching,
  items,
  error, 
  dispatch
}) => {

  useEffect(()=> {
    dispatch(getItems());
    console.log(items);
  },[])

  return(
    <>
    {
      error && 
      <h2>{error}</h2>
    }
    {
      isFetching &&
      <h2>Fetching</h2>
    }
    {!isFetching && !error &&
    <div className="ui grid container">
      {items.map(item=> <div className="four wide column"><Item key={item.ean} item={item}/></div>)}
      <div className="row">
        <Link to="/additem">
          <button className="large ui inverted green button">Add Item</button>
        </Link>
      </div>
    </div>
    }
    </>
  ) 
};

const mapStateToProps = state => ({
  isFetching: state.item.isFetching,
  items: state.item.items,
  error: state.item.error
})

// const mapDispatchToProps = (dispatch) => ({
//   getItems: () => dispatch(getItems())
// })

export default connect (
  mapStateToProps,
)(ItemsList);
