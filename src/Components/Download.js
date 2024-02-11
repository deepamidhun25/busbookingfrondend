import React, { useContext } from 'react'
import { bus_deatilsContext } from './Contexshare';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Download() {
 
    //useContext
    const {confirmdetail,setconfirm}=useContext(bus_deatilsContext)
    const { bus_details, setbus_details } = useContext(bus_deatilsContext);

console.log(confirmdetail);

  return (
    <div>

        {/* Display final success value */}
      
        <div className='p-5  border ms-3 me-3 mt-3 mb-3 w-50'>

        <div className='text-center mb-3'>
            <h5>Booking Details</h5>
        </div>
            <p>Booked Date:{confirmdetail.bookingDate}</p>
           
          <p>Ticket Booked by:{confirmdetail.bookedby}</p>
          <p> Adhar Card ID:{confirmdetail.bookedManId}</p>
          <p>Bus Name :{bus_details.name}</p>
          <p>Booking Date:{confirmdetail.dateTravelled}</p>
          <p>From:{confirmdetail.from}</p>
          <p>To:{confirmdetail.to}</p>
          <p>Bus Starting Time:{confirmdetail.staringTime}</p>
          <p>Amount:{confirmdetail.amount}</p>
          <p>Amount status:{confirmdetail.amountstatus}</p>
          <p>Seats Booked:{confirmdetail.seatsbooked}</p>
          { 
              confirmdetail.peronsTravelledwith? confirmdetail.peronsTravelledwith.map(i=>

          <p><p>name : {i.passengerName} </p>
          <p>address : {i.passengerAddress }</p>
          <p>age : {i.passengerAge}</p>
          <p>Adhar card Id : {i.passengerId}</p></p> 
            ) :"Nil"}

        </div>
        <div>
        <Link to="/"><Button variant="primary"   >Done</Button></Link>

        </div>
    </div>
  )
}

export default Download
