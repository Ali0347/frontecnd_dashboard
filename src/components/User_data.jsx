import axios from 'axios'
import React, { useEffect, useState } from 'react'

function User_data () {


  const [data, setData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    let url = 'https://api.github.com/users'

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
{console.log(  searchInput)}
    {/* HEADING ALI BAHADUR  START */}
      <hr className='border' style={{ color: "blue" }} />
      <h1 className=" display-4 
fw-bold text-align-center " style={{ "color": "blue", "text-align": "center" }}>By Ali Bahadur</h1>
      <hr className='border' style={{ color: "blue" }} />
    {/* HEADING ALI BAHADUR  END */}

  {/* Search Input START */}
      <div className="form-outline conta mb-4 ">
         
            <label className="form-label user display-4" htmlFor="searchInput"  >Search  Your Account:</label>
            <input type="text" onChange={(e)=>{setSearchInput(e.target.value)}}  id="searchInput" placeholder='Search...' className="form-control form-control-md col-5  mx-auto "  />
          </div>
  {/* Search Input End */}
      <div className="row">

        {
          data.filter((item)=>{return(item.login.toLowerCase().includes(searchInput))}).map(
            (item) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 container my-0 ">

                  <div className="container  ">
                    <div class="card-group mt-5">
                      <div class="card bg-dark text-light">
                        <img src={item.avatar_url} class="card-img-top img-fluid " alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{item.login}</h5>
                          <p class="card-text">More About Sir,{item.login} Please Click the button</p>
                          <div>
                            <button class="btn btn-light " ><a class="text-dark text-decoration-none" href={item.html_url}>GitHub</a></button>
                          </div>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              )
            }
          )
        }

      </div>
    </>
  )
}

export default User_data