import axios from 'axios'
// import { Link } from 'react-router-dom';
// import { Product_api } from './Product_api'
import React,{ useState,useEffect} from "react";

import {
  MDBContainer,

} from "mdb-react-ui-kit";
import './Products.css'

function Products () {


  const [data, setData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {

    let url = 'https://api.pujakaitem.com/api/products'

    //    GET or POST?
    axios.get(url)
      .then((item) => {
        console.log(item.data)
        setData(item.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


const Close = ()=>{
  const element = document.getElementsByClassName("cls").style.dispaly
  element = "none";
}
  return (
            <>

  
        <MDBContainer fluid className="text-center container ">
        <h4 className=" mb-5 ">
          <strong>Bestsellers</strong>
        </h4>

     {/* Search Input Start */}
     <div className="form-outline  mb-4 text-center ">
         
         
         <label className="form-label  h4  text-center"  htmlFor="searchInput"  >Shopping Here  </label>
         <input type="text" onChange={(e)=>{setSearchInput(e.target.value)}}  id="searchInput" placeholder='Search...' className="form-control form-control-md col-5  mx-auto "  />
       </div>
         {/* Search Input End */}

         <div className="container">
  <div className="row">



 {
              data.filter((item) => { return (item.name.toLowerCase().includes(searchInput)) }).map((item) => {
                return ( <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-5 ps-0 ">
                <div className="card ">
                  <img className="card-img wh-100" src={item.image} alt="Vans"/>
                  <div className="card-img-overlay d-flex justify-content-end">
                    <a href="#" className="card-link text-danger like">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title ">{item.name}</h4><br />
                    <h6 className="card-subtitle mb-2 text-muted ">{item.category}</h6>
                    <p className="card-text">
                     {item.description}         </p>
                    <div className="options d-flex flex-fill">
                       <select className="custom-select mr-1">
                          <option selected>Color</option>
                          <option value="1">Green</option>
                          <option value="2">Blue</option>
                          <option value="3">Red</option>
                      </select>
                      <select className="custom-select ml-1">
                          <option selected>Size</option>
                          <option value="1">41</option>
                          <option value="2">42</option>
                          <option value="3">43</option>
                      </select>
                    </div>
             
                    <div className="buy d-flex justify-content-between align-items-center">
                      <div className="price text-success position-relative"><h5 className="mt-4">${item.price}</h5></div>
                       <a href="#t" className="btn pull-bs-canvas-right btn-danger  position-absolute  mt-3 addChart "><i className="fas fa-shopping-cart"></i> Add to Cardt</a>
                    </div>

                    
                  </div>
           
                </div>
               
              </div>)})}




   
  </div>
</div>
<div>
    
   
{/* OffCanvas */}
<div  id='cl' className="bs-canvas d-none cls bs-canvas-right position-fixed bg-light h-100 mr-0">
  <header className="bs-canvas-header p-3 bg-primary overflow-auto">
    <button onClick={()=>{Close()}} type="button" className="bs-canvas-close float-left close" aria-label="Close"><span aria-hidden="true" className="text-light">×</span></button>
    <h4 className="d-inline-block text-light mb-0 float-right">Canvas Header</h4>
  </header>
  <div className="bs-canvas-content px-3 py-5">
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Qty.</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Quilt</td>
          <td>2</td>
          <td className="text-center"><a href className="text-decoration-none text-muted">×</a></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Shawl</td>
          <td>1</td>
          <td className="text-center"><a href className="text-decoration-none text-muted">×</a></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Pillow</td>
          <td>5</td>
          <td className="text-center"><a href className="text-decoration-none text-muted">×</a></td>
        </tr>
      </tbody>
    </table>
    <p className="text-center"><button type="button" className="btn btn-primary">Checkout</button></p>
    <div className="list-group my-5">
      <a href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
      <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
      <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
      <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
      <a href="#" className="list-group-item list-group-item-action">Vestibulum at eros</a>
    </div>
    <p className="text-muted small">Subscribe to our newsletter:</p>
    <div className="input-group flex-nowrap">
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">@</span>
      </div>
      <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
    </div>
    <p className="text-right mt-3 mb-0">
      <button type="button" className="btn btn-dark">Subscribe</button>
    </p>
  </div>    
</div>

  </div> 
    </MDBContainer>
  


        </>
        )
}

        export default Products