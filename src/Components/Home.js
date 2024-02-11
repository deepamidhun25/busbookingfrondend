import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Home() {
    const [showBasic, setShowBasic] = useState(false);


  return (

    <div>
  

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://i.postimg.cc/kXH8c17L/image1.jpg')", height: '500px'  }}
      >
        <div className='mask ms-5 p-5' style={{paddingLeft:'500px'}} >
          <div className='d-flex justify-content-center align-items-left h-100'>
            <div className='text-white'>
              <h1 className='mb-3 fs-1'>Bus Booking</h1>
              <h4 className='mb-3'>online</h4>
              <MDBBtn tag="a" href='bookbus' outline size="lg">
                Book Now
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    <div>
    {/* <Link to=""><Button variant="primary"  className='mt-5 ms-2'  >Cancel booking</Button></Link> */}

    </div>

    </div>
  )
}

export default Home
