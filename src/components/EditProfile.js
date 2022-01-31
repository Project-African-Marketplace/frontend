import React,{useState} from "react";

const initialProfile = {
  username: "",
  file:'',
  profilePicture:'',
  isEditing: false
};

const EditProfile = () => {
  const [values,setValues] = useState(initialProfile);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      isEditing:!values.isEditing
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      isEditing: false
    })
    console.log(values)
  }

  const handleUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setValues({
        ...values,
        file: file,
        profilePicture: reader.result
      });
    }
    reader.readAsDataURL(file);
    
  }
  
  return (
    <div className="profile-container">
      <h2>Username: {values.username}</h2>
      <img className="ui medium circular image" src={values.profilePicture} alt="User"/>
      <button className = "edit-btn large ui inverted green button" onClick={handleEdit}>Edit Profile</button>

      {
        values.isEditing && 
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
          <label>Username:</label>
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
          />
          </div>
          
          <div className="field">
          <label>Profile picture:</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleUpload}
          />
          </div>

          <button className="large ui inverted blue button">Submit</button>
        </form>
      }
    </div>
  )
};

export default EditProfile;
