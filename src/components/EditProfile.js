//npm imports
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { resolvePath } from "react-router";

//action imports
import {
  pToggleEdit,
  getProfile,
  postProfile
} from '../actions/profileActions';


const EditProfile = ({
  error, 
  isPosting,
  isFetching,
  isEditing,
  profile,
  pToggleEdit,
  postProfile,
  getProfile
}) => {

  useEffect(() => {
    getProfile();
  }, [])

  const [newProfile, setNewProfile] = useState(profile);

  const handleChange = (e) => {
    setNewProfile({
      ...newProfile,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = (e) => {
    e.preventDefault();
    pToggleEdit();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postProfile(newProfile);
  }

  const handleUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setNewProfile({
        ...newProfile,
        file: file,
        profilePicture: resolvePath(reader.result)
      })
    }
    reader.readAsDataURL(file);
  }
  
  return (
    <div className="profile-container">
      {
        isFetching &&
        <>
        <h1>fetching profile....</h1>
        </>
      }
      
      { !isFetching &&
      <div>
      <h2>Username: {profile.username}</h2>
      <h3>Bio: {profile.bio}</h3>
      <img className="ui medium circular image" src={profile.profilePicture} alt="User"/>
      <button className = "edit-btn large ui inverted green button" onClick={handleEdit}>Edit Profile</button>
      </div>
      }
      {
        isEditing && !isPosting && 
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
          <label>Username:</label>
          <input
            name="username"
            type="text"
            value={newProfile.username}
            onChange={handleChange}
          />
          </div>

          <div className="field">
          <label>Username:</label>
          <input
            name="bio"
            type="text"
            value={newProfile.bio}
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

const mapStateToProps = state => ({
  isPosting: state.profile.isPosting,
  isEditing: state.profile.isEditing,
  isFetching: state.profile.isFetching,
  profile: state.profile.profile,
  error: state.profile.error
})

const mapDispatchToProps = (dispatch) => ({
  pToggleEdit: () => dispatch(pToggleEdit()),
  postProfile: (profile) => dispatch(postProfile(profile)),
  getProfile: () => dispatch(getProfile())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
