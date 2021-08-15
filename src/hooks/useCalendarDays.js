import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useCalendarDays = () => {
  const currentDate = useSelector((store) => store.currentDate);
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    const getMonthDays = (currentDate) => {
      const days = [];

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

        days.push(getDayObject(newDay, true));
      }

      // Add next month day objects to end of month if necessary
      for (
        let dayNumber = days[days.length - 1].day + 1,
          dateNumber = days[days.length - 1].date + 1;
        dayNumber <= 6;
        dayNumber++, dateNumber++
      ) {
        const newDay = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          dateNumber
        );

        days.push(getDayObject(newDay));
      }

      // Add previous month day objects to start of month if necessary
      for (
        let i = 0, limit = days[0].day, dayNumber = 0;
        i < limit;
        i++, dayNumber--
      ) {
        const newDay = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          dayNumber
        );
        days.unshift(getDayObject(newDay));
      }

      return days;
    };

    setCalendarDays(getMonthDays(currentDate));
  }, [currentDate]);

  const getDayObject = (dateObj, enabled = false) => ({
    dateObj,
    day: dateObj.getDay(),
    date: dateObj.getDate(),
    month: dateObj.getMonth(),
    year: dateObj.getFullYear(),
    reminders: [],
    enabled,
  });

  return calendarDays;
};

export default useCalendarDays;
