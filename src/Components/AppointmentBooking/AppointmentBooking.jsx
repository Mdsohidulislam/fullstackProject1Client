import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AppointmentBooking() {
  const [value, onChange] = useState(new Date());

    console.log(value.getMonth());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default AppointmentBooking;