import React from 'react'
import { useState } from 'react'
import BookingForm from './BookingForm'
import Header from './Header'
import Footer from './Footer'
import './BookingPage.css';

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  return (
    <div id="booking-page">
      <Header />
      <div id="booking-container">
        <h1 id="booking-title">Booking</h1>
        <p id="booking-desc">Fill out the form below to make a reservation!</p>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
      </div>
      <Footer />
    </div>
  )
}

export default BookingPage