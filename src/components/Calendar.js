import './Calendar.css';
import CalendarDay from './CalendarDay';

const getDayObject = (dateObj, enabled = false) => ({
  dateObj,
  day: dateObj.getDay(),
  date: dateObj.getDate(),
  month: dateObj.getMonth(),
  year: dateObj.getFullYear(),
  reminders: [],
  enabled,
});

const getMonthDays = (currentDate) => {
  const calendarDays = [];

  // Create day objects for current month
  for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
    const newDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      dayNumber
    );

    if (newDay.getMonth() !== currentDate.getMonth()) {
      break;
    }

    calendarDays.push(getDayObject(newDay, true));
  }

  // Add next month day objects to end of month if necessary
  for (
    let dayNumber = calendarDays[calendarDays.length - 1].day + 1,
      dateNumber = calendarDays[calendarDays.length - 1].date + 1;
    dayNumber <= 6;
    dayNumber++, dateNumber++
  ) {
    const newDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      dateNumber
    );

    calendarDays.push(getDayObject(newDay));
  }

  // Add previous month day objects to start of month if necessary
  for (
    let i = 0, limit = calendarDays[0].day, dayNumber = 0;
    i < limit;
    i++, dayNumber--
  ) {
    const newDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      dayNumber
    );
    calendarDays.unshift(getDayObject(newDay));
  }

  return calendarDays;
};

const Calendar = () => {
  const renderedDays = () => {
    const currentDate = new Date(2021, 8);
    const calendarDays = getMonthDays(currentDate);

    return calendarDays.map((day, index) => (
      <CalendarDay key={index} day={day} />
    ));
  };

  return (
    <div className="calendar">
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
