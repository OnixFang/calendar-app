import './CalendarDay.css';
import { useDispatch } from 'react-redux';
import { selectDay } from '../store/selectedDay/actions';

const CalendarDay = ({ day, onDayClick }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectDay(day));
    onDayClick();
  };

  const classNames = () => {
    let additionalClasses = '';

    if (day.day === 0 || day.day === 6) {
      additionalClasses += ' weekend';
    }

    if (!day.enabled) {
      additionalClasses += ' disabled';
    }

    if (new Date().toDateString() === day.dateObj.toDateString()) {
      additionalClasses += ' today';
    }

    return additionalClasses;
  };

  return (
    <div className={`calendar-day${classNames()}`} onClick={handleClick}>
      <span className="date-number">{day.date}</span>
    </div>
  );
};

export default CalendarDay;
