import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ToastContainer } from 'react-toastify';


import Home from './Home';
import { checkSeatAvailability, getConfirmbus } from '../service/allApi';
import { Link, useNavigate } from 'react-router-dom';
import { bus_deatilsContext } from './Contexshare';
import { toast } from 'react-toastify';

function Booking() {

    //usecontex

const { bus_details, setbus_details } = useContext(bus_deatilsContext);
const {numPerson,setPerson}=useContext(bus_deatilsContext)
const {user,setUser}=useContext(bus_deatilsContext)
const {userBooked,setBookeduser}=useContext(bus_deatilsContext)

console.log(userBooked);


const [checkStatus,setStatus]=useState(false)
const navigate=useNavigate()


const [checkData,setCheckData]=useState({
    busId:"",dateTravelled:"",seatbook:""
})


//check availability

const checkAvailable=async()=>{
    checkData.busId=bus_details._id
    checkData.dateTravelled=localStorage.getItem('dateTravel')
    checkData.seatbook=numPerson
   console.log(checkData);

//call backend for check availability
const response=await checkSeatAvailability(checkData)
if(response.status===200){
    
    setStatus(true)
    if(numPerson>1){
        setview(true)
    }
    else{
        setview(false)
    }
}
else if(response.response.status===404){
    setStatus(false)
    toast.error(response.response.data)

}
else{
    toast.error("server error")
}



} 




//usestates used

const [num,setnum]=useState()
const [view,setview]=useState(true)
const[busId,setbusId]=useState()
const[confirmView,setconfirm]=useState(false)
const[val,setval]=useState([{passengerName:'',
passengerAddress:'',
passengerAge:'',
passengerId:''
}])


const [count,setcount]=useState(0)

//store data to local storage

const getSelection=()=>{
    const busID=localStorage.getItem('busId');
    setbusId(busID);
    const dateTravel=localStorage.getItem('dateTravel')
    console.log(dateTravel);
}

// const confirmTicket=()=>{
   

// }
const numberPassenger=(e)=>{
    e.preventDefault()
    setnum(e.target.value)
    
}
 
    // setamount({...amount,[name]:value})
    // setamount(num*bus_details.busfees)
    console.log(num);
    setPerson(num)
console.log(numPerson);

//details of passenger travelled with

const getfiled=()=>{
  
   setval([...val,{passengerName:'',
   passengerAddress:'',
   passengerAge:'',
   passengerId:''
   }])
    }



    const handleinputChange=(e,index)=>{
       
        
         const {name , value} =e.target
         const inputdata=[...val]
         inputdata[index][name]=value
        setval(inputdata)

    }
    

    //confirm ticket

    const confirmTicket=()=>{
        const amount =num*bus_details.busfees
        localStorage.setItem('amount',amount)
        setUser(val)
        navigate('/payment_details');

    }


// // confirm bus details
// const bookSeat=async(busId)=>{
   
//     const response = await   getConfirmbus(busId)
//     console.log(response.data);
//     // localStorage.setItem('busId',response.data._id);
//    }


const getfiledremove=(index)=>{
const list =[...val]
list.splice(index,1)
setval(list)
}
useEffect(()=>{
    getSelection()
   
},[])


  return (
    <div className='p-5'>


      <div className='w-50 mb-3'>
      <Form.Label htmlFor="inputPassword5">Number of passengers:</Form.Label>
                            <Form.Control
                                type="text"
                                name='number'
                                onChange={numberPassenger}
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"                                   > 

                                </Form.Control>
                                <Form.Label htmlFor="inputPassword5">Amount per Seat</Form.Label>
                            <Form.Control
                                type="text"
                                value={bus_details.busfees}
                                name='passNo'
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"                                   > 

                                </Form.Control>      
                                <Form.Label htmlFor="inputPassword5">Total Amount</Form.Label>
                            <Form.Control
                                type="text"
                                value={num*bus_details.busfees}
                               

                                name='totalCharge'
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"                                   > 

                                </Form.Control>      

                        
      </div>

      <div>
      <Button className='mt-3 'onClick={checkAvailable} variant="primary" >Check Seat availability</Button>

      </div>
     <p className='text-danger'>*No details ans payment required for childerns less than 3 year</p>

     { checkStatus ?

      <div>

<p className='text-success'> Seats are available</p>
        
                { view?

                    <Container>
                {
            val.map((x,i)=>
                

            <Row className='p-5'>
                <Col>
                <Form.Label htmlFor="inputPassword5">Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e=>handleinputChange(e,i)}
                                    name="passengerName"
                                    value={x.passengerName}
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"                                   >
                                    </Form.Control>
                                    <Form.Label htmlFor="inputPassword5">Address:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={x.passengerAddress}
                                    onChange={e=>handleinputChange(e,i)}
                                    name="passengerAddress"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"                                   >
                                    </Form.Control>
                </Col>
                <Col>
                <Form.Label htmlFor="inputPassword5">Age:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="passengerAge"
                                    value={x.passengerAge}
                                    onChange={e=>handleinputChange(e,i)}
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"                                   >
                                    </Form.Control>
                                    <Form.Label htmlFor="inputPassword5">Aadhar Card Number:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="passengerId"
                                    value={x.passengerId}
                                    id="inputPassword5"
                                    onChange={e=>handleinputChange(e,i)}
                                    aria-describedby="passwordHelpBlock"                                   >
                                    </Form.Control>
                
                </Col>
                <Col>
                {
                
                <Button className='mt-3 'onClick={getfiledremove} variant="danger" >X</Button>
} 
                </Col>
               
               
            </Row>
            
        
        )}
           

           {
            

            <Button className='mt-3' variant="success" onClick={getfiled}>Add Passenger</Button>
            }
            {
                // val.length!==1 &&
                // <Button className='mt-3 'onClick={getfiledremove} variant="danger" >Remove</Button>
} 
        </Container>
        :""}


<div>
   <Button className='mt-3' variant="success" onClick={confirmTicket}  >confirm Ticket</Button>
    </div>





      </div>
:""}
            <ToastContainer  position="top-center" />

    </div>
  )

    }
export default Booking
