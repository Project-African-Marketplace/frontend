import React, { useState } from "react";

const initialValues = {
  name: "",
  description: "",
  price: "",
  commoditycat: "",
  subcategory: "",
  commoditycountry: "",
  commoditymarket: "",
};

const AddItem = () => {
  const [item, setItem] = useState(initialValues);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

return (
  <div className="box-container">
    <h1>Add Item</h1>

    <form className="ui form">

      <div className="field">
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={item.name}
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
      <label>Commidity Category:</label>
      <select name="commoditycat" className="ui selection dropdown">
        <option value=""></option>
        <option value="Animal Products">Animal Products</option>
        <option value="Fruits">Fruits</option>
        <option value="Seeds and Nuts">Seeds and Nuts</option>
        <option value="Vegetables">Vegetables</option>
      </select>
      </div>

      <div className="field">
      <label>Subcategory:</label>
      <select name="subcategory"class="ui selection dropdown" >
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
      <label>Commidity Country:</label>
      <select name="commoditycountry" class="ui selection dropdown">
        <option value=""></option>
        <option value="Kenya">Kenya</option>
        <option value="Uganda">Uganda</option>
      </select>
      </div>

      <div className="field">
      <label>Commidity Market:</label>
      <select name="commoditymarket" class="ui selection dropdown">
        <option value=""></option>
        <option value="Eldoret">Eldoret</option>
        <option value="Embu">Embu</option>
        <option value="Kisii">Kisii</option>
        <option value="Loitoktok">Loitoktok</option>
        <option value="Kampala">Kampala</option>
        <option value="Jinja">Jinja</option>
      </select>
      </div>
      </div>

      <button className="large ui inverted green button">Submit</button>
    </form>
  </div>
  );
};

export default AddItem;
