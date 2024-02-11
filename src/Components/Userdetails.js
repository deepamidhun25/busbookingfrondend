import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { bus_deatilsContext } from './Contexshare';
import { useNavigate } from 'react-router-dom';

function Userdetails() {


    const [inputdata,setinputData]=useState({

        bookedby:"",
        bookedManId:"",
    })
    const navigate=useNavigate()


const {userBooked,setBookeduser}=useContext(bus_deatilsContext)


 const  userplacedetails=(e)=>{
    e.preventDefault()
    const{value,name}=e.target
   
    setinputData({...inputdata,[name]:value})
    console.log(inputdata);
    setBookeduser(inputdata)
 }


 const handleSubmit=()=>{
    
    console.log(userBooked);
     navigate('/booking_details');
 }



 console.log(userBooked);
  return (
    
      
<div className='p-5  container  text-center'>
<div>
   
<div className='mt-3 mb-3'>
      <div className='mt-3'>
          <Row>
              <Col><Form.Label htmlFor="inputPassword5">Booked by:</Form.Label></Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name='bookedby'
                                            placeholder='Name'
                                            onChange={(e)=>
     
                                                userplacedetails(e)
                                        }
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"                                   >
                                            </Form.Control>
                                    </Col>
          </Row>
          
      </div>
      
      
      <div className='mt-3'>
          
                            <Row>
          
                                        <Col><Form.Label htmlFor="inputPassword5">Adhar Card Number</Form.Label></Col>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder='AdharCard Number'
                                        name='bookedManId'
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        onChange={(e)=>
     
                                            userplacedetails(e)
                                          }                            >
                                        </Form.Control>
                                </Col>
                                    </Row>
          
      </div>

      <div  className='mt-5'>
      <Button variant="primary" onClick={handleSubmit}>Submit</Button>{' '}

      </div>

                        
      </div>





    </div>
    </div>
  )
}

export default Userdetails
