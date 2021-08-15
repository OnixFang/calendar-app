import './Calendar.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getMonthDays } from './calendarHelper';
import CalendarDay from './CalendarDay';
import MonthNavigator from './MonthNavigator';

const Calendar = () => {
  const currentDate = useSelector((store) => store.currentDate);
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    setCalendarDays(getMonthDays(currentDate));
  }, [currentDate]);

  const renderedDays = () => {
    return calendarDays.map((day, index) => (
      <CalendarDay key={index} day={day} />
    ));
  };

  return (
    <div className="calendar">
      <MonthNavigator currentDate={currentDate} />
      <div className="calendar-header">
        <span>Sunday</span>
        <span>Monday</span>
        <span>Tuesday</span>
        <span>Wednesday</span>
        <span>Thursday</span>
        <span>Friday</span>
        <span>Saturday</span>
      </div>
      <div className="calendar-body">{renderedDays()}</div>
    </div>
  );
};

export default Calendar;
