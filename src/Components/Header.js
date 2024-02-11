import React, { useState } from 'react'

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
function Header() {
    const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
        <header>
      <MDBNavbar expand='lg' className='bg-primary p-5' style={{height:'50px'}}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='/' className='fs-2 p-5 text-white'>
                  BUS BOOKING APP
                </MDBNavbarLink>
              </MDBNavbarItem>
              
            
            
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </header>
    </div>
  )
}

export default Header
