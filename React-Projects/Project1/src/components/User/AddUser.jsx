import React, { useState} from 'react';

const AddUser = (props) => {
  const [userDetails, setUserDetail] = useState({
    username: '',
    age: '',
    gender: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userDetails.username ==="" || userDetails.age=== "" || userDetails.gender === ""  ){
      alert ("Plase Enter all fields")
      return
    }
    if(userDetails.age <=0){
      alert ("Age cant be negative and zero ")
      return
    }
    props.onAddUser(userDetails.username, userDetails.age , userDetails.gender)
    setUserDetail({
      username: '',
      age: '',
      gender: ''
    });
  };

  const handleChange = (event) => {
    setUserDetail((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input className="input" type="text" name="username" value={userDetails.username} onChange={handleChange} />
        <label className="label">Age</label>
        <input className="input" type="number" name="age" value={userDetails.age} onChange={handleChange} />
        <label className="label">Gender</label>
        <input className="input" type="text" name="gender" value={userDetails.gender} onChange={handleChange} />
        <input className="button" type="submit" value="Add User" />
      </form>
    </>
  );
};

export default AddUser;
