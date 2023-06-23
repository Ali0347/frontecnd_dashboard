import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth'
import './Form.css'

function Admin_SignUp () {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret_key, setSecret_key] = useState("");
  const navigate = useNavigate()
  const {auth,setAuth}= useAuth("")
  const {admin,setAdmin}= useAuth("");

  const [data,setData]= useState(
   {}
  )


  useEffect(() => {

    let url = 'http://localhost:5000/all_users'

    //    GET or POST?
    axios.get(url)
      .then((item) => {
        // console.log(item)
        // setAuth(data)
        // console.log(auth);
    setData(item.data[0].secret_key)
        console.log(data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  function subFunc (e) {
    e.preventDefault(e)
    const url = "https://lcalhost:5000/signUp_Admin"
    // const headers = {
    //   "Content-Type": "application/json"
    // }
    const data = {  
      username: username,
      email: email,
      password: password,
      secret_key: secret_key,
    }
    // console.log(data);
    // console.log(auth)

    axios.post(url, data).then((res) => {
      alert("Admin Form Submitted")
      navigate("/main")
      // setAuth(data)
      setAdmin(data.secret_key)
      console.log(admin);
    }).catch((error) => {
      alert("Admin Form  failed to submit")
      console.log(error)
      setAdmin(data.secret_key)
      console.log(admin);
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
            <Link className="nav-link border-bottom buttonFormIn col-5" to="/adminSignIn" >Login
            </Link>
          </li>
          <li className=" nav-item " role="presentation">
            <Link className="nav-link active buttonFormUp col-5" to="/adminSignUp"  >Register</Link>
          </li>
        </ul>
        <div className="tab-pane " id="register"  >
          <form action="">
            <div className="text-center mb-3">
              <p className='text-bold  my-2' style={{fontsize:"30px"}}> Admin Sign Up</p>

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

            <button type="submit" className="btn btn-primary btn-block mb-3 col-5  mx-auto" onClick={subFunc}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>











  )
}

export default Admin_SignUp