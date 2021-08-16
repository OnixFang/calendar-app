import './styles.css';
import { useDispatch } from 'react-redux';
import { selectDay } from '../../store/selectedDay/actions';

const CalendarDay = ({ day }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectDay(day));
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

  const renderedReminders = () => {
    if (day.reminders.length) {
      return (
        <span className="new badge reminder-count" data-badge-caption="reminders">
          {day.reminders.length}
        </span>
      );
    }
    return null;
  };

  return (
    <div className={`calendar-day${classNames()}`} onClick={handleClick}>
      <span className="date-number">{day.date}</span>
      {renderedReminders()}
    </div>
  );
};

export default CalendarDay;
