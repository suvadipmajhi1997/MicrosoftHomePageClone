import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import microsoft365 from '../assets/Link-List-Icons-Microsoft-365.svg'
import xbox from '../assets/Link-List-Icons-Xbox-Games-Consoles.svg'
import surface from '../assets/Link-List-Icons-Surface-Devices.svg'
import gamePass from '../assets/gamepass.avif'
import xlogo from '../assets/x-logo.svg.png'
import game from '../assets/game.avif'

import ProductCard from '../components/ProductCard'
import BusinessCard from '../components/BusinessCard'


const Index = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      {/* slider */}
        <Carousel/>

        <div className="icon-list w-100 d-flex flex-wrap flex-lg-row align-items-center justify-content-center gap-5 no-vertical-gap mt-0" style={{ height: '300px' }}>
            
              <div className="d-flex flex-column align-items-center">
              <img src={microsoft365} alt="" style={{width:'50px', height:'50px'}} />
              <Link to={'/'} className='fs-6 fw-semibold link-underline'>Choose your Microsoft 365</Link>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src={xbox} alt="" style={{width:'50px', height:'50px'}} />
              <Link to={'/'} className='fs-6 fw-semibold link-underline'>Shop Xbox</Link>
            </div>
            
              <div className="d-flex flex-column align-items-center">
              <img src={microsoft365} alt="" style={{width:'50px', height:'50px'}} />
              <Link to={'/'} className='fs-6 fw-semibold link-underline'>Get Windows 11</Link>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src={surface} alt="" style={{width:'50px', height:'50px'}} />
              <Link to={'/'} className='fs-6 fw-semibold link-underline'>Explore Surface devices</Link>
            </div>
            

          
        </div>

        {/* product card */}
        <ProductCard/>

        {/* game pass section */}

        <div className="position-relative w-100 p-lg-4">
          <img src={gamePass} alt="" className='w-100 d-none d-lg-inline  p-lg-5'/>
          <img src={game} alt="" className='w-100 d-lg-none p-2' />
          <div className="d-flex flex-column position-absolute align-content-center gamePass-content text-white">
          <div className="col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center">
            <h3 className="fw-bold fs-2 p-0 m-0">Xbox Game Pass Ultimate</h3>
          <p className="mt-3 mb-4 fs-5">
            Play new titles on day one. Enjoy hundreds of high-quality games with friends on console, PC, or cloud.
          </p>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-primary px-4">Join now</button>
            <button className="btn btn-link text-white text-decoration-none">
              <i className="bi bi-caret-right me-2"></i>Watch the video
            </button>
          </div>
          </div>
        </div>
        </div> 

        {/* business card*/}
        <BusinessCard/>

        {/* socialmedia icon */}

        <div className="container-fluid ms-4 mt-5">
          <div className="d-flex flex-row align-items-center gap-4 fs-5 ms-5">
          <p className='fs-5 mt-3'>Follow Microsoft</p>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        </div>
    </div>
  )
}

export default Index
