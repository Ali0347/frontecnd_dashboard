import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
<footer className="main-footer">
  <strong>Copyright © 2014-2021 <Link to={"https://www.linkedin.com/in/alibahadur0347/"}>By Ali Bahadur</Link >.</strong>
  All rights reserved.
  <div className="float-right d-none d-sm-inline-block">
    <b>Version</b> 3.2.0
  </div>
</footer>
Control Sidebar
{/* <aside className="control-sidebar control-sidebar-dark">
</aside> */}
  {/* Control sidebar content goes here */}
{/* /.control-sidebar */}

    </div>
  )
}

export default Footer