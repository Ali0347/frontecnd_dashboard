import React, { useEffect, useState } from 'react'
import { User_api } from './User_api'

function User_data2 () {
    // const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState("")

    console.log(searchInput);

    return (
        <div className='container'>

            {/* Search Input Start */}
            <div className="form-outline conta mb-4 ">

                <label className="form-label user h1 ms-auto  " htmlFor="searchInput"  >Search  Your Account:</label>
                <input type="text" onChange={(e) => { setSearchInput(e.target.value) }} id="searchInput" placeholder='Search...' className="form-control form-control-md col-7   mx-auto " />
            </div>
            {/* Search Input End */}
            <div className="direct-chat-infos clearfix">

                {/* /.direct-chat-infos */}
                <div className='row'>
                    <div className='col-3 direct-chat-name '>Profile</div>
                    <div className='col-3 direct-chat-name '>ID</div>
                    <div className='col-3 direct-chat-name '>Name</div>
                    <div className='col-3 direct-chat-name '>Email</div>
                </div>
                {
                    User_api.filter((item) => { return (item.first_name.toLowerCase().includes(searchInput)) }).map((item) => {
                        return (
                            <div className='row mt-4'>
                                <div className='col-3'>
                                    <img className="direct-chat-img" src={item.avatar} alt="message user image" />

                                </div>
                                <div className='col-3'>
                                    <span className=" float-left">{item.id}</span>
                                </div>
                                <div className='col-3'>
                                    <span className=" ">{item.first_name}</span>
                                </div>

                                <div className='col-3'>
                                    <span className="direct-chat-timestamp ">{item.email}</span>
                                </div>
                            </div>
                        )
                    })


                }


                {/* /.direct-chat-text */}

                {/* /.direct-chat-msg */}
                {/* Message to the right */}
            </div>
        </div>
    )
}

export default User_data2