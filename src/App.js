import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Selection from './Components/Selection';
import Booking from './Components/Booking';
import OnlinePayment from './Components/OnlinePayment';
import SelectionSeat from './Components/SelectionSeat';
import Userdetails from './Components/Userdetails';
import Download from './Components/Download';
import CancelBooking from './Components/CancelBooking';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   <Header></Header>     
<Routes>
<Route path='' element={<Home></Home>}> </Route>
<Route path='bookbus' element={<Selection></Selection>}></Route>
<Route path='/booking_details' element={<Booking></Booking>}></Route>
<Route path='/payment_details' element={<OnlinePayment></OnlinePayment>}></Route>
<Route path='/userdetails' element={<Userdetails></Userdetails>}></Route>
<Route path='/download' element={<Download></Download>}></Route>
<Route path='/cancelbooking' element={<CancelBooking></CancelBooking>}></Route>


</Routes>


      </header>
    </div>
  );
}

export default App;
