import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bus_deatilsContext } from './Contexshare';
import { userSubmit } from '../service/allApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function OnlinePayment() {

  // model box 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//usecontext
const { bus_details, setbus_details } = useContext(bus_deatilsContext);
const {numPerson,setPerson}=useContext(bus_deatilsContext)
const {user,setUser}=useContext(bus_deatilsContext)
const {userBooked,setBookeduser}=useContext(bus_deatilsContext)
const {confirmdetail,setconfirm}=useContext(bus_deatilsContext)


const navigate=useNavigate()



const [userData,setData]=useState({
  bookedby:"",
  bookedManId:"",
  busId:"",
  dateTravelled:"",from:"",to:"",

  staringTime:"",
  seatsbooked:"",
  amount:"",
  amountstatus:"",
  peronsTravelledwith:[]

})

//  const BookConfirm=async()=>{

//   userData.bookedby=userBooked.bookedby,
//   userData.bookedManId=userBooked.bookedManId,
//   userData.busId=bus_details._id,
//   userData.dateTravelled=localStorage.getItem('dateTravel'),
//   userData.from=bus_details.from,
//   userData.to=bus_details.to,

//   userData.staringTime=bus_details.staringTime,
//   userData.seatsbooked=numPerson,
//   userData.amount=localStorage.getItem('amount')
//   userData.amountstatus="paid",
//   userData.peronsTravelledwith=user

//  }

//booking confirm 

const BookConfirm = async () => {
  setData(prevData => ({
    ...prevData,
    bookedby: userBooked.bookedby,
    bookedManId: userBooked.bookedManId,
    busId: bus_details._id,
    dateTravelled: localStorage.getItem('dateTravel'),
    from: bus_details.from,
    to: bus_details.to,
    staringTime: bus_details.startTime,
    seatsbooked: numPerson,
    amount: localStorage.getItem('amount'),
    amountstatus: "paid",
    peronsTravelledwith: user
  }));

  console.log(userData);

  const response = await userSubmit(userData)
if(response.status===200){
  console.log("success");
  setconfirm(response.data)
  toast.error("Successfully booked")
  navigate('/download');

  
}
else{
  toast.error("server error")
}




};











//function to save data
// const handleSubmit=()=>{
//   console.log(bus_details);
//   console.log(user);
// }




const [amount,setamount]=useState(bus_details.busfees*numPerson)

console.log(amount);

  return (

// amount display

    <div>
<div>
  <div>
    <h3 className='p-3 text-center container text-primary'>Online Payment</h3>
  </div>
<div className='p-3 text-center container '>
  <Row>
    <Col>
    <p>Amount to pay :</p>
    </Col>
    <Col>
    <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value={amount}
      />
                        
    </Col>
  </Row>
  <div className='p-4'>
    {/* <Button variant="primary">Pay Now</Button>{' '} */}
    <Button variant="primary" onClick={handleShow}>
        Confirm Payment
      </Button>
    </div>

</div>
{/* model box for payment */}
<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bus ticket price :{amount}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={BookConfirm}>
           Confirm 
          </Button>
        </Modal.Footer>
      </Modal>

</div>

<ToastContainer  position="top-center" />

    </div>
  )
}

export default OnlinePayment
