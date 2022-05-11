import { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment'
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import './App.css';

function App() {
  const [focus, setFocus] = useState(null)
  const [startDate, setStartDate] = useState(new moment());
  const [endDate, setEndDate] = useState(new moment());

  const handleFocusChange = (focus) => {
    setFocus(focus)
  }

  const handleChangeDates = ({ startDate, endDate }) => {
    console.log({ startDate, endDate })
    setStartDate(startDate)
    setEndDate(endDate)
  }



  return (
    <div className="App">
      <div 
        className='CalendarPicker'
        data-testid={"CalendarPicker"}
        >
        <h2>Pick a Date:</h2>
        
        <DateRangePicker
          startDateId='start-date'
          endDateId='end-date'
          startDate={startDate}
          endDate={endDate}
          focusedInput={focus}
          onDatesChange={handleChangeDates}
          onFocusChange={handleFocusChange}
        />
      </div>
      <header className="App-header">
        Learn React
      </header>

    </div>
  );
}

export default App;
