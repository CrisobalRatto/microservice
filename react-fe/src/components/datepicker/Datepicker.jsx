import DatePicker from 'react-datepicker';
import "./datepicker.css";
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import React, { useState } from "react";


<div className="newUserItem"></div>
function Dates () {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1900, getYear(new Date()) + 1, 1);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return (
    <DatePicker
      renderCustomHeader={({
        date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled,
      }) => (
        <div className="newUserItem"
          style={{
         
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)} />
  );
};

export default Dates;