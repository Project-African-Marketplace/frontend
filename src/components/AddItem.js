//npm imports
import React, { useState } from "react";
import { connect } from "react-redux";

//action imports
import { postItem } from "../actions/itemActions";

const initialValues = {
  products: '',
  description: '',
  price: '',
  category: ''
};

const AddItem = ({
  postItem
}) => {
  const [item, setItem] = useState(initialValues);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem(item);
  }


return (
  <div className="box-container">
    <h1>Add Item</h1>

    <form className="ui form" onSubmit={handleSubmit}>

      <div className="field">
      <label>Name:</label>
      <input
        type="text"
        name="products"
        value={item.products}
        onChange={handleChange}
      />
      </div>
      
      <div className="field">
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={item.description}
        onChange={handleChange}
      /> 
      </div>

      <div className="field">
      <label>Price:</label>
      <input
        type="text"
        name="price"
        value={item.price}
        onChange={handleChange}
      />
      </div>

      <div className="two fields">
      <div className="field">
      <label>Commodity Category:</label>
      <select name="category" className="ui selection dropdown" onChange={handleChange}>
        <option value="Animal Products">Animal Products</option>
        <option value="Beans">Beans</option>
        <option value="Cereals - Maize">Cereals - Maize</option>
        <option value="Cereals - Other">Cereals - Other</option>
        <option value="Cereals - Rice">Cereals - Rice</option>
        <option value="Fruits">Fruits</option>
        <option value="Other">Other</option>
        <option value="Peas">Peas</option>
        <option value="Roots & Tubers">Roots & Tubers</option>
        <option value="Seeds & Nuts">Seeds & Nuts</option>
        <option value="Vegetables">Vegetables</option>
      </select>
      </div>
      </div>
      {/* <div className="field">
      <label>Subcategory:</label>
      <select name="subcategory"className="ui selection dropdown" >
        <option value=""></option>
        <option value="Animal Products - Other">
          Animal Products - Other
        </option>
        <option value="Livestock">Livestock</option>
        <option value="Poultry">Poultry</option>
        <option value="Avocado">Avocado</option>
        <option value="Oranges">Oranges</option>
        <option value="Sunflowers">Sunflowers</option>
        <option value="Brinjals">Brinjals</option>
        <option value="Cabbages">Cabbages</option>
        <option value="Capsicums">Capsicums</option>
      </select>

      </div>
      </div>

      <div className="two fields">
      <div className="field">
      <label>Commodity Country:</label>
      <select name="commoditycountry" className="ui selection dropdown">
        <option value=""></option>
        <option value="Kenya">Kenya</option>
        <option value="Uganda">Uganda</option>
      </select>
      </div>

      <div className="field">
      <label>Commodity Market:</label>
      <select name="commoditymarket" className="ui selection dropdown">
        <option value=""></option>
        <option value="Eldoret">Eldoret</option>
        <option value="Embu">Embu</option>
        <option value="Kisii">Kisii</option>
        <option value="Loitoktok">Loitoktok</option>
        <option value="Kampala">Kampala</option>
        <option value="Jinja">Jinja</option>
      </select>
      </div>
      </div> */}

      <button className="large ui inverted green button">Submit</button>
    </form>
  </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postItem: (item) => postItem(dispatch)(item)
})

export default connect(null, mapDispatchToProps)(AddItem);
