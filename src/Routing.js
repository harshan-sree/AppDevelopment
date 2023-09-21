import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Availability from './components/Availability';
import Selection from './components/Selection';
import PassengerInfo from './components/PassengerInfo';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import BookingHistory from './components/BookingHistory';
import Search from './components/Search';
import Login from './loginnn/Login';
import About from './loginnn/About';

export default class Routing extends React.Component {
  render() {
    return (
     
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/selection" element={<Selection/>} />
          <Route path="/passengerInfo" element={<PassengerInfo />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
          <Route path="/history" element={< BookingHistory/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
       </Routes>
      </BrowserRouter>
    );
  }
}
