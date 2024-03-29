import React, { useState } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import './search.css';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForBuses = () => {
    setIsValidated(true);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_BUS' });
    navigate('availability');
  };

  return (
    <div className='background'>
     

      <div className="top-bar">
    <div className="logo">TNRTC</div>
    <ul className="nav-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/about">About us</a></li>
    
    </ul>
  </div>
      <br></br><br></br><br></br><br></br><br></br>
    <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2> Search Trains</h2>
      {showError ? <p class="error-alert"> Please enter all values </p> : ''}
      <div className="form-group">
        <label>
          From:
          <input required type="text" name="from" onChange={updateValue} />
        </label>
      </div>

      <div className="form-group">
        <label>
          To:
          <input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Date:
          <input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <button onClick={searchForBuses}> Search </button>
    </div>
    </div>
    
  );
};
