import React from 'react'
import { useState } from 'react';
import './BookingForm.css';

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [dateValid, setDateValid] = useState(true);


  const formStyles = {
    "display": "grid",
    "maxWidth": "200px",
    "gap": "20px",
  }

  const handleDate = (e) => {
    setDate(e.target.value);
    props.dispatch(
      {
        type: "change",
        date: date,
      }
    )
  }

  const handleTime = (e) => {
    setTime(e.target.value);
  }

  const handleGuests = (e) => {
    setGuests(e.target.value);
  }

  const handleOccasion = (e) => {
    setOccasion(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSubmitted(true);
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
  }

  const invalidDate = () => {
    if (date.length === 0) {
      setDateValid(false);
    }
    else {
      setDateValid(true);
    }
  }

  return (
    <div id="booking-form">
      <form style={formStyles}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDate} onBlur={invalidDate}/>
        {dateValid ? "" : <h1>Please select a date above.</h1>}
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTime}>
          {props.availableTimes.map((time) => <option key={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasion}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default BookingForm