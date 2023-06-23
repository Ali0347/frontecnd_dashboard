
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth'
import './Form.css'
function Admin_SignIn () {


  const [username, setUsername] = useState("");
  const { auth, setAuth } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret_key, setSecret_key] = useState("");
  const navigate = useNavigate()



  function subFunc (e) {
    e.preventDefault(e)
    const url = "http://localhost:5000/all_usersysignUp_Admin"
    const headers = {
      "Content-Type": "application/json"
    }
    const data = {
      username: username,
      email: email,
      password: password,
      secret_key: secret_key,
    }
    console.log(data);
    axios.post(url, data, { headers }).then((res) => {
      alert("Admin Form Submitted")
      navigate("/main")
      setAuth(res)
      console.log(auth)
    }).catch((error) => {
      alert("Admin Form  failed to submit")
      console.log(error)
    }
    )

    // console.log(data);
  }



  return (
    <div className='formDiv bg-dark rounded mt-2 pt-3'>
      <div className="container  ms-5 border-rounded-4">
        {/* Pills navs */}
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <Link className="nav-link border-bottom active buttonFormIn col-5" to="/adminSignIn" >Login
            </Link>
          </li>
          <li className=" nav-item " role="presentation">
            <Link className="nav-link  buttonFormUp col-5" to="/adminSignUp"  >Register</Link>
          </li>
        </ul>
        <div className="tab-pane " id="register"  >
          <form action="">
            <div className="text-center mb-3">
              <p className='text-bold  my-2' style={{ fontsize: "30px" }}>Admin Sign Up</p>

            </div>
            {/* Username input */}
            <div className="form-outline mb-4">
              <input type="text" onChange={(e) => { setUsername(e.target.value) }} id="registerUserName" className="form-control form-control-md col-5  mx-auto" />
              <label className="form-label user" htmlFor="registerUserName">Username</label>
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
            {/* secre_key input */}
            <div className="form-outline mb-4">
              <input type="password1" onChange={(e) => { setSecret_key(e.target.value) }} id="registerSecret_key" className="form-control form-control-md col-5  mx-auto" />
              <label className="form-label secret_key" htmlFor="registerSecret_key">Secret_key</label>
            </div>
            {/* <div className="form-outline mb-4">
              <button data-toggle="collapse" data-target="#demo">Collapsible</button>
              <div id="demo" class="collapse">
                ALi
              </div></div> */}



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

export default Admin_SignIn