import React, { useState } from "react";
import "./App.css";

const Calender = () => {
  const daysofWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  const previousMonth = () => {
    const PreviousMonthDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      selectedDate.getDate()
    );
    setSelectedDate(PreviousMonthDate);
  };

  const nextMonth = () => {
    const NextMonthDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      selectedDate.getDate()
    );
    setSelectedDate(NextMonthDate);
  };

  const GenerateCalender = () => {
    const daysInmonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();

    const firstDayofMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();

    const days = [];
    for (let i = 0; i < daysInmonth; i++) {
      days.push(i);
    }

    const calender1 = [];
    let calenderRow = [];
    for (let i = 0; i < firstDayofMonth; i++) {
      calenderRow.push(<td key={`empty-${i}`}></td>);
    }

    for (let i = 1; i <= daysInmonth; i++) {
      const isToday =
        i === new Date().getDate() &&
        selectedDate.getMonth() === new Date().getMonth() &&
        selectedDate.getFullYear() === new Date().getFullYear();

      calenderRow.push(
        <td
          key={`day-${i}`}
          className={isToday ? "today" : null}
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
            )
          }
        >
          {i}
        </td>
      );

      if ((i + firstDayofMonth) % 7 === 0 || i === daysInmonth) {
        calender1.push(<tr key={`row-${i}`}>{calenderRow}</tr>);
        calenderRow = [];
      }
    }

    return (
      <table>
        <thead>
          <tr>
            <th colSpan="7">
              <button onClick={previousMonth}>&lt;</button>
              <span>
                {months[selectedDate.getMonth()]}
                {selectedDate.getFullYear()}
              </span>
              <button onClick={nextMonth}>&gt;</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {daysofWeek.map((day, index) => (
              <th key={`daysOfWeek-${index}`}>{day}</th>
            ))}
          </tr>
          {calender1}
        </tbody>
      </table>
    );
  };

  return (
    <div className="calender-container">
      <h1>Mini Calender</h1>
      <GenerateCalender />
    </div>
  );
};
export default Calender;
