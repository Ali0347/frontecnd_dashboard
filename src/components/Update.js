import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function Update() {


  const [oldEmail, setOldEmail] = useState("");
  const [username, setUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate()

  function subFunc (e) {
    e.preventDefault()
    const url = "localhost:5000/update_user"
    const headers = {
        "Content-Type": "application/json"
    }
    const data = {
      oldEmail: oldEmail,
      username: username,
      newEmail: newEmail,
      password: password
    }

    axios.post(url, data, { headers }).then((res) => {
        alert("Account Updated Successfully")
        // navigate("/after")
         console.log(res)
    }).catch((err) => {
        alert("Not Updated account")
        console.log(err)
    })
}

  return (
    <div className='formDiv'>
    <div className="container m-3   ms-5 border ">


      {/* Pills navs */}
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <Link className="nav-link border-bottom buttonBack col-5" to="/after"  >Back</Link>
        </li>
      
      </ul>


      <div className="tab-pane " id="register"  >

        <form action="">
          <div className="text-center mb-3">
            <h4 className='text-muted mt-4 mb-4'>Update Your Account Here:</h4>
            {/* <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github" />
            </button> */}
          </div>
      

  {/* Old Email input */}
  <div className="form-outline mb-4">
            <input type="email" onChange={(e) => { setOldEmail(e.target.value) }} id="registerOldEmail" className="form-control form-control-md col-5  mx-auto" />
            <label className="form-label email" htmlFor="registerOldEmail">Old Email</label>
          </div>

          {/* Username input */}
          <div className="form-outline mb-4">
            <input type="text" onChange={(e) => { setUsername(e.target.value) }} id="registerUsername" className="form-control form-control-md col-5  mx-auto " />
            <label className="form-label user" htmlFor="registerUsername">Username</label>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" onChange={(e) => { setNewEmail(e.target.value) }} id="registerNewEmail" className="form-control form-control-md col-5  mx-auto" />
            <label className="form-label email" htmlFor="registerNewEmail">New Email</label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} id="registerPassword" className="form-control form-control-md col-5  mx-auto" />
            <label className="form-label password" htmlFor="registerPassword">Password</label>
          </div>

          {/* Checkbox */}
          {/* <div className="form-check d-flex justify-content-center mb-4">
            <input className="form-check-input me-2" type="checkbox" defaultValue id="registerCheck" defaultChecked aria-describedby="registerCheckHelpText" />
            <label className="form-check-label" htmlFor="registerCheck">
              I have read and agree to the terms
            </label>
          </div> */}
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-3 col-5  mx-auto" onClick={subFunc}>Update</button>
        </form>

      </div>

    </div>
  </div>
  )
}

export default Update