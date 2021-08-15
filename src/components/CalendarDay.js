import './CalendarDay.css';

const CalendarDay = ({ day }) => {
  const classNames = () => {
    let additionalClasses = '';

    if (day.day === 0 || day.day === 6) {
      additionalClasses += ' weekend';
    }

    if (!day.enabled) {
      additionalClasses += ' disabled';
    }

    if ((new Date().toDateString() === day.dateObj.toDateString())) {
      additionalClasses += ' today';
    }

    return additionalClasses;
  };

  return (
    <div className={`calendar-day${classNames()}`}>
      <span className="date-number">{day.date}</span>
    </div>
  );
};

export default CalendarDay;
