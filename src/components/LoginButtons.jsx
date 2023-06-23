import React from 'react'
import { Link } from 'react-router-dom'
function LoginButtons () {
    return (

        <div className="bg-dark  row justify-content-center align-items-center" style={{ height:"100vh" }}>
            <div className="card  text-center" style={{ width: "15%",height: "0%" }}>
                <div className="card-body ">
                    <h4 className="">Users</h4>
            
                    <Link to={"/signUP"} className="btn btn-outline-success mt-1">Login Account</Link>
                </div>
            </div>

            <div className="card text-center ml-2 
            " style={{ width: "15%",height: "0%"}}>
                <div className="card-body">
                    <h4 className=" ">Admin</h4>
              
                    <Link to={"/adminSignUp"} className="btn btn-outline-success mt-1">Login Account</Link>
                </div>
            </div>
        </div>

    )
}

export default LoginButtons