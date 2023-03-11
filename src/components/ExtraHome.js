import React from 'react'
import './extra.css'

function ExtraHome () {
  return (
    <div className='mt-3'>
      <body class="d-flex h-100 text-center  container   text-white bImg ">

        <div class="cover-container mt-0 d-flex vh-100 h-100 p-3 mx-auto flex-column">
          <header class="mb-auto">
            <div className='mb-5'>
              <h3 class="float-md-start mb-2">Dashbord </h3>
              <nav class="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active text-danger text-bold " aria-current="page" href="#">Home</a>
                <a class="nav-link text-danger text-bold " href="#">Features</a>
                <a class="nav-link text-danger text-bold" href="#">Contact</a>
                <a class="nav-link text-danger text-bold me -auto" href="/signUp">Register</a>
              </nav>
            </div>
          </header>

          <main class="px-3">
            <h2 className='mt-5'>Cover your page.</h2>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead color-danger">
              <a href="#" class="btn btn-md btn-danger  fw-bold border-white bg-white">Learn more</a>
            </p>
          </main>

          <footer class=" text-white-50  mt-5">
            <a href="" className='text-white'>Dashbord By Ali Bahadur &copy;</a>
          </footer>
        </div>





      </body>
    </div>
  )
}

export default ExtraHome