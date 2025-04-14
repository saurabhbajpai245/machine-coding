import React from 'react'

const Profile = (props) => {
    const {updateState} = props
    const {firstName, lastName, age, address} = props.formData;
    const handleData = (event) => {
        updateState(event.target.name, event.target.value);
    }
  return (
    <>
    <div>
        <label>First Name</label>
        <input type='text' name='firstName' value={firstName} onChange={handleData}></input>
    </div>
    <div>
        <label>Last Name</label>
        <input type='text' name='lastName' value={lastName} onChange={handleData}></input>
    </div>
    <div>
        <label>age</label>
        <input type='number' name='age' value={age} onChange={handleData}></input>
    </div>
    <div>
        <label>address</label>
        <input type='text' name='address' value={address} onChange={handleData}></input>
    </div>
    </>
  )
}

export default Profile