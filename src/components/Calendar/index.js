import './styles.css';
import { useSelector } from 'react-redux';
import useCalendarDays from '../../hooks/useCalendarDays';
import CalendarDay from '../CalendarDay';
import MonthNavigator from '../MonthNavigator';
import DayDetails from '../DayDetails';
import ReminderForm from '../ReminderForm';
import Modal from '../Modal';

const Calendar = () => {
  const selectedDay = useSelector((store) => store.selectedDay);
  const selectedReminder = useSelector((store) => store.selectedReminder);
  const calendarDays = useCalendarDays();

  const renderedDays = () => {
    return calendarDays.map((day, index) => (
      <CalendarDay key={index} day={day} />
    ));
  };

  const renderDayDetails = () => {
    if (selectedDay) {
      return (
        <Modal>
          <DayDetails />;
        </Modal>
      );
    }
    return null;
  };

  const renderReminderForm = () => {
    if (selectedReminder) {
      return (
        <Modal>
          <ReminderForm />
        </Modal>
      );
    }
    return null;
  };

  return (
    <div className="calendar">
      {renderDayDetails()}
      {renderReminderForm()}
      <MonthNavigator />
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
