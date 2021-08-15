import './styles.css';
import { useState } from 'react';
import useCalendarDays from '../../hooks/useCalendarDays';
import CalendarDay from '../CalendarDay';
import MonthNavigator from '../MonthNavigator';
import DayDetails from '../DayDetails';
import Modal from '../Modal';

const Calendar = () => {
  const calendarDays = useCalendarDays();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const renderedDays = () => {
    return calendarDays.map((day, index) => (
      <CalendarDay key={index} day={day} onDayClick={toggleModal} />
    ));
  };

  return (
    <div className="calendar">
      <Modal modalIsOpen={modalIsOpen}>
        <DayDetails closeModal={toggleModal} />
      </Modal>
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
