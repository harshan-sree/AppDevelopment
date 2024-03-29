import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Selection (){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.details);
  const buses = useSelector((state) => state.buses);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const toggleSeat = (e) => {
    const seatNo = e.target.id;
    if (selectedSeats.includes(seatNo)) {
      const index = selectedSeats.indexOf(seatNo);
      selectedSeats.splice(index, 1);
    } else {
      selectedSeats.push(e.target.id);
    }
    console.log(selectedSeats);
  };

  const proceedToPassengerDetails = (e) => {
    dispatch({ type: 'SEAT_SELECTION', seats: selectedSeats });
    navigate('/passengerInfo');
  };
  const selectedBus =
    buses.find((bus) => bus.id === details.selectedBusId) || {};
  console.log(selectedBus);
  return (
    <div>
      The selected Train name is {selectedBus.name}
      <div className="seat-container">
        {selectedBus.seats.map((seat, index) => {
          return (
            <div>
              <input
                className="seat"
                disabled={seat.isBooked}
                onClick={toggleSeat}
                type="checkbox"
                id={seat.no}
              />
              <label for={seat.no}>{seat.no}</label>
            </div>
          );
        })}
      </div>
      <button className="proceed" onClick={proceedToPassengerDetails} >
        Proceed
      </button>
    </div>
  );
};
