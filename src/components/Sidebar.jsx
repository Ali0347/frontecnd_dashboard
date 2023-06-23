import React from 'react'
import { Link } from 'react-router-dom';
import Admin from "../components/imges/admin_logo.jpeg";


function Sidebar () {
  return (
    <div className='container-fluid'>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to={"#"} className="brand-link">
          <img src={Admin} alt="Admin Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Ali Bahadur</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <Link to={"#"} className="d-block">Ali Bahadur &copy;</Link>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search.. your ID" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar" onc>
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              {/* <li className="nav-item menu-open">
            <Link  to={"#"} className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Data
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link  to={"/after/user_data"} className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Users Data</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link  to={"/after/todo"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Todo List</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/after/user_data2"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>User Data 2</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link  to={"/after/products"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Products</p>
                </Link>
              </li>
            </ul>
          </li> */}
              {/* <li className="nav-item">
            <Link  to={"pages/widgets.html"} className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </Link>
          </li> */}
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  <i className="nav-icon ion-stats-bars mr-2" />
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li>



              <li className="nav-header">ADMIN AREA</li>













              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <i className="nav-icon ion-person-stalker mr-2" />
                  <p >
                    Users
                    <i className="fas fa-angle-left right" />

                    <span className="badge badge-info right">2</span>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"/hero_section/users"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Users</p>
                    </Link>
                  </li>
                </ul>
              </li>










              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"/hero_section/chart"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"pages/charts/uplot.html"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>uPlot</p>
                    </Link>
                  </li>
                </ul>
              </li>




              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <i className="nav-icon ion-android-cart mr-2" />
                  <p >
                    Orders
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">2</span>

                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"/hero_section/order"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Order</p>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <i className="nav-icon ion-ios-briefcase mr-2" />
                  <p>
                    Products
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"/hero_section/products"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Product</p>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <Link to={"/hero_section/profit_analysis"} className="nav-link">
                  <i className="nav-icon ion-arrow-graph-up-right mr-2" />
                  <p>
                    Profit Analysis
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/hero_section/overall"} className="nav-link">
                  <i className="nav-icon ion-ios-pie-outline mr-2" />
                  <p>
                    Overall Data
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <i className="nav-icon ion-ios-gear mr-2" />
                  <p>
                    Inventory Management
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"pages/mailbox/mailbox.html"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </Link>
                  </li>


                </ul>
              </li>
              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  {/* <i className="nav-icon ion-person mr-2" /> */}
                  <p>
                    Profile
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"pages/examples/contact-us.html"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Contact us</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <i className="nav-icon fas fa-search" />


                  <p>
                    Search
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"pages/search/simple.html"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Search</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"pages/search/enhanced.html"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Enhanced</p>
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>

  )
}

export default Sidebar