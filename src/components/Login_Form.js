import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css'


function Login_Form () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function subFunction (e) {
    e.preventDefault(e)
    const url = "http://127.0.0.1:5000/login"
    const headers = {
      "Content-Type": "application/json"
    }
    const data = {
      email: email,
      password: password
    }
    console.log(data);
    axios.post(url, data, { headers }).then((res) => {
      alert("User Signed in Successfully")
      navigate('/after')
      console.log(res)

    }).catch((error) => {
      // console.log(error)
      if (error.response.status === 404) {
        // alert("Login Failed")
        alert("Invalid Username")
      } else if (error.response.status === 409) {
        alert("Invalid Password")
        alert("Login Failed")
      } else {
        alert("User not Found")
        // console.log('nO ok')
      }

    }
    )








  }
  return (
    <div className='formDiv'>
      <div className="container m-3  ms-5 border ">


        {/* Pills navs */}
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item " role="presentation">
            <Link className="nav-link buttonFormIn active col-5 " to="/signIn"  >Login</Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link border-bottom buttonFormUp col-5" to="/signUp"  >Register</Link>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active " id="login" role="tabpanel" aria-labelledby="tab-login">

            <form action="">
              <div className="text-center mb-3">
                <p>Sign in with:</p>
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
              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="text" id="loginEmail" onChange={(e) => { setEmail(e.target.value) }} className="col-5  mx-auto form-control form-control-md" />
                <label className="form-label email" htmlFor="loginEmail"> Email</label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} id="loginPassword" className="form-control form-control-md col-5  mx-auto" />
                <label className="form-label password" htmlFor="loginPassword">Password</label>
              </div>
              {/* 2 column grid layout */}
              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">

                </div>

              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4 col-5  mx-auto" onClick={subFunction}>Sign in</button>
              {/* Register buttons */}
              <div className="text-center">
                <p>Not a member? <a href="/signUp">Register</a></p>
              </div>
            </form>

          </div>

        </div>

      </div>

    </div>
  )








}

export default Login_Form