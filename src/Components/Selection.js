import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getConfirmbus, get_list_places, getbus } from '../service/allApi';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Table from 'react-bootstrap/Table';
import { bus_deatilsContext } from './Contexshare';
import { useNavigate } from 'react-router-dom';


function Selection() {

  const { bus_details, setbus_details } = useContext(bus_deatilsContext);
  const navigate=useNavigate()

const[listplace,setplace]=useState([])
const[getbusdata,setbusdata]=useState([])
const [inputdata,setinput]=useState({
    from:"",
    to:"",
    date:""
})
const[userData,setUserData]=useState({
    id:""
})

const getPlaces=async()=>{
    const response= await get_list_places()
    setplace(response.data);


}

// const formatDate=(dateold)=>{
//     const d = new Date(dateold);
//     const day = d.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if needed
//     const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Get month (+1 because months are zero-indexed) and pad with leading zero if needed
//     const year = d.getFullYear();
//     const datenew = `${day}-${month}-${year}`;
//     console.log(datenew);
//     inputdata.date=datenew
//     // setinput({...inputdata,[date]:datenew})
// }
// console.log(inputdata);


const userplacedetails=(e)=>{
    e.preventDefault()
    const{value,name}=e.target
   
    setinput({...inputdata,[name]:value})
}
localStorage.setItem('dateTravel',inputdata.date)

//search data
const handleSubmit=async(e)=>{
    e.preventDefault()
  const  {from,to,date} = inputdata
 if(from===""){
 toast.error("enter staring place")
 }
 else if(to===""){
    toast.error("enter Destination place")

 }
 else if(date===""){
toast.error("check date")
 }
 else{

    const response=await getbus(inputdata)
    console.log(response.data);
    setbusdata(response.data)

 }
 console.log(getbusdata);


}
// console.log(inputdata);

// confirm bus details
const bookSeat=async(id,index)=>{
   
 const response = await   getConfirmbus(id)
 console.log(response.data);
 setbus_details(response.data)

 localStorage.setItem('busId',response.data._id);
 navigate('/userdetails');

}
console.log(bus_details);


useEffect(()=>{
  getPlaces()
},[])


    return (
        <div>

            <div className='mt-4'>

                <Container>

                    <Row>
                        <Col>
                            <Form.Label>From:</Form.Label>
                            <Form.Select aria-label="Default select example" name='from' onChange={(e)=>{
     
     userplacedetails(e);
   }}>


                                <option>Select</option>
                                {
        listplace.map(i=>
        <option key={i.id} value={i.place} >{i.place}</option>
        ) }

                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Label>To:</Form.Label>
                            <Form.Select aria-label="Default select example" name='to' onChange={(e)=>{
     
     userplacedetails(e);
   }}>

                                <option>Select</option>
                                <option>Select</option>
                                {
        listplace.map(i=>
        <option key={i.id} value={i.place} >{i.place}</option>
        ) }
                            </Form.Select>


                        </Col>
                        <Col>
                            <Form.Label htmlFor="inputPassword5">Date:</Form.Label>
                            <Form.Control
                                type="date"
                                name='date'
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock" onChange={(e)=>{
     
                                    userplacedetails(e);
                                  }}> 

                                </Form.Control>
                        
                        </Col>

                        <Col className='mt-4'>
                        <Button variant="primary" onClick={handleSubmit}>Search</Button>{' '}
                        </Col>
                    </Row>
                </Container>



            </div>

            <div>
 {/* table view */}

 { getbusdata? getbusdata.map((i,index)=>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>No:</th>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>BusName</th>
          <th>RegNo:</th>
          <th>StartTime</th>
          <th>EndTime</th>
          <th></th>





         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{inputdata.date}</td>
          <td>{i.from}</td>
          <td>{i.to}</td>
          <td>{i.name}</td>
          <td>{i.startTime}</td>
          <td>{i.endTime}</td>
          <td><Button variant="primary"  onClick={(e)=>bookSeat(i._id,index)}   data-toggle="modal" data-target='"#mymodal'>Book Now</Button>{' '}
</td>
        </tr>
        
      </tbody>
    </Table>
) :""}



            </div>
            <ToastContainer  position="top-center" />
        </div>





    )
}

export default Selection
