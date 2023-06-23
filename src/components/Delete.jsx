import React from 'react'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Delete() {

    const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");
    const navigate = useNavigate()

    function subFunc (e) {
        e.prevenDefault()
        const url = "http://localhost:5000/delete_user_email"
        const headers = {
          "Content-Type": "application/json"
        }
        const data = {
            email: email,
        //   password: pass
        }
    
        axios.post(url, data, { headers }).then((res) => {
          console.log(res)
          alert("Delete Your Account")
          navigate("/")
        }).catch((err) => {
            console.log(err)
            alert("User not Found")
        
        })
      }


  return (
    <div className='formDiv'>
    
    <div className="tab-content border">

<div className="  show active" id="login" role="tabpanel" aria-labelledby="tab-login">

  <form action="">

    {/* Username input */}
    <div className="form-outline mb-4">
      <input type="text" id="loginName" onChange={(e) => { setEmail(e.target.value) }} className="col-5  mx-auto form-control form-control-md" />
      <label className="form-label email" htmlFor="loginName"> Email</label>
    </div>
    {/* Password input */}
    {/* <div className="form-outline mb-4">
      <input type="password" onChange={(e) => { setPass(e.target.value) }} id="loginPassword" className="form-control form-control-md col-5  mx-auto" />
      <label className="form-label" htmlFor="loginPassword">Password</label>
    </div> */}
    {/* 2 column grid layout */}
    <div className="row mb-4">
      
     
    </div>
    {/* Submit button */}
    <button type="submit" className="btn btn-danger btn-block mb-4 col-5  mx-auto" onClick={subFunc}>Delete Your Account</button>
    
  </form>

</div>

</div>
    </div>
  )
}

export default Delete