import axios from 'axios'
import { Link } from 'react-router-dom';
import { Product_api } from './Product_api'
import React,{ useState,useEffect} from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  // MDBIcon,
  // MDBBtn,
  MDBRipple,
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




  return (
            <>
      <MDBContainer fluid className="my-5 text-center container   ">
        <h4 className="mt-4 mb-5 ">
          <strong>Bestsellers</strong>
        </h4>

     {/* Search Input Start */}
     <div className="form-outline  mb-4  ">
         
         <label className="form-label user display-4" htmlFor="searchInput"  >Search  Your Products:</label>
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
                       <a href="/shopping_cart" className="btn btn-danger  position-absolute  mt-3 addChart "><i className="fas fa-shopping-cart"></i> Add to Cardt</a>
                    </div>
                  </div>
           
                </div>
               
              </div>)})}




   
  </div>
</div>
        {/* <MDBRow>
          <table className='row container'>
            {
              Product_api.filter((item) => { return (item.title.toLowerCase().includes(searchInput)) }).map((item) => {
                return (
                
                
                
                
                
                <MDBCol  className="mb-4 col-12 col-md-6 col-lg-4" >
                    <MDBCard>

                      <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
                        <MDBCardImage src={item.thumbnail}  className="w-100 h-100 fluid"/>
                        <a href="#!">
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5>
                                <span className="badge bg-success ms-2">Eco</span>
                              </h5>
                            </div>
                          </div>
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                          </div>
                        </a>
                      </MDBRipple>
                      <MDBCardBody>
                        <a href="#!" className="text-reset">
                          <h5 className="card-title mb-3">{item.title}</h5>
                        </a>
                        <a href="#!" className="text-reset">
                          <p>{item.category}</p>
                        </a>
                        <h6 className="mb-3">{item.price} </h6>     </MDBCardBody>
                   </MDBCard>
                  </MDBCol>     
                )
              })}
          </table>
      </MDBRow> */}
    </MDBContainer>
        </>
        )
}

        export default Products