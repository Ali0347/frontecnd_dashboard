import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Sign_Form () {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()



  function subFunc (e) {
    e.preventDefault(e)
    const url = "https://nervous-rose-coypu.cyclic.app/login"
    const headers = {
      "Content-Type": "application/json"
    }
    const data = {
      username: username,
      email: email,
      password: password
    }
    console.log(data);
    
    axios.post(url, data, { headers }).then((res) => {
      alert("Form Submitted")
      navigate("/main")
      console.log(res)
    }).catch((error) => {
      alert("Form failed to submit")
      console.log(error)
    }
    )

    // console.log(data);
  }



  return (
    <div className='formDiv mt-2'>
      <div className="container  pt-3  ms-5 border ">
        {/* Pills navs */}
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <Link className="nav-link border-bottom buttonFormIn col-5" to="/signIn" >Login
            </Link>
          </li>
          <li className=" nav-item " role="presentation">
            <Link className="nav-link active buttonFormUp col-5" to="/signUp"  >Register</Link>
          </li>
        </ul>
        <div className="tab-pane " id="register"  >
          <form action="">
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
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
              </button>
            </div>
            <p className="text-center">or:</p>
            {/* Username input */}
            <div className="form-outline mb-4">
              <input type="text" onChange={(e) => { setUsername(e.target.value) }} id="registerUsername" className="form-control form-control-md col-5  mx-auto " />
              <label className="form-label user" htmlFor="registerUsername">Username</label>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" onChange={(e) => { setEmail(e.target.value) }} id="registerEmail" className="form-control form-control-md col-5  mx-auto" />
              <label className="form-label email" htmlFor="registerEmail">Email</label>
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
            <button type="submit" className="btn btn-primary btn-block mb-3 col-5  mx-auto" onClick={subFunc}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Sign_Form