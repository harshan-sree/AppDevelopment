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
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import List from './components/List';
import Faq from './components/faq';
import Register from './loginnn/Register';
import Searchh from './components/Searchh';
import { UserAuth } from './loginnn/UserAuth';

export default class Routing extends React.Component {
  render() {
    return (
     
      <BrowserRouter>
        <Routes>
        <Route path="/selection" element={<Selection/>} />
          <Route path="/passengerInfo" element={<PassengerInfo />} />
          <Route path="/payment" element={<Payment/>} />
        <Route path="/search/availability" element={<Availability />} />
          <Route element={<UserAuth/>}>
          <Route path='/availability' element={<Availability/>}/>
       
          <Route path="/" element={<Searchh />} />
          </Route>
         
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/trains' element={<List/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/register' element={<Register/>}/>
       </Routes>
       <Footer />
      </BrowserRouter>
    );
  }
}
