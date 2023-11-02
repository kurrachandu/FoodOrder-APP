/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FormInput from './FormInput';
import "../../../../src/App.css";
import { useNavigate } from 'react-router-dom';

const PostLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    gender: "", // Added gender property
  });
  const [duplicateError, setDuplicateError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const isDuplicate = existingData.some((data) => {
      return JSON.stringify(data.username) === JSON.stringify(values.username);
    });

    if (isDuplicate) {
      alert('Data already exists. Please login');
      navigate('/');
      return;
    }

    const newData = [...existingData, values];
    localStorage.setItem('formData', JSON.stringify(newData));
    navigate('/');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setDuplicateError(false);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>

        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          errorMessage="Username should be a combination of letters and digits of 3 to 16 characters"
          label="Username"
          pattern="^[A-Za-z]{3,16}$"
          required={true}
          value={values.username}
          onChange={onChange}
        />

        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          errorMessage="It should be a valid email address"
          label="Email"
          required={true}
          value={values.email}
          onChange={onChange}
        />

        <FormInput
          name="password"
          type="text"
          placeholder="Password"
          errorMessage="Password should be 8 characters"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          label="Password"
          required={true}
          value={values.password}
          onChange={onChange}
        />

        {/* Replace the radio buttons with a dropdown list for gender */}
        <div className='gender'>
          <label className='label1'>
            <h3 className='header'>Gender</h3>
          </label>
          <select
          className='gender'
            name="gender"
            value={values.gender}
            onChange={onChange}
            required={true}  
          >
            {/* <option value="">Select Gender</option> */}
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button className="btn" type="submit" onClick={() => navigate("/login")}>Submit</button>
      </form>
    </div>
  );
};

export default PostLogin;
