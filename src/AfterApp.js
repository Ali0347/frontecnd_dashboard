import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import {User_api} from './components/User_api'
// import axios from 'axios'

function AfterApp() {


  // useEffect(() => {
  //   let url = 'localhost:5000/all_users'

  //   //    GET or POST?
  //   axios.get(url)
  //     .then((item) => {
  //       console.log(item.data)
  //       setData(item.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])


// const [main, setMain]= useState()

// if(){}
// else{}

  return (
   
    
    <div>
  
      <Header></Header>
      <Sidebar></Sidebar>
       {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={"user_data2"}>Home </Link > </li>
              <li className="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">

          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <Link to={"#"} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link >
            </div>
          </div>

          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <Link to={"#"} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link >
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>50</h3>
                {/* {User_api[0].id} */}
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <Link to={"#"} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link >
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <Link to={"#"} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link >
            </div>
          </div>
          {/* ./col */}
        </div>




      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
    <hr></hr>


    
    <Outlet/>
  </div>
  {/* /.content-wrapper */}
 
      <Footer></Footer>

    </div>
  )
}

export default AfterApp