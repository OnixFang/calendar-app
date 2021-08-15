import './styles.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ReminderList from '../ReminderList';

const DayDetails = ({ closeModal }) => {
  const day = useSelector((store) => store.selectedDay);

  const reminders = [
    {
      id: 1,
      text: 'Reminder text, reminder text, reminder text, reminder text,reminder text, reminder text, reminder text, reminder text',
      city: 'City name',
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString('en-us', { timeStyle: 'short' }),
      weather: 'Rainy day',
      color: 'red lighten-2',
    },
    {
      id: 2,
      text: 'Reminder text, reminder text, reminder text, reminder text,reminder text, reminder text, reminder text, reminder text',
      city: 'City name',
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString('en-us', { timeStyle: 'short' }),
      weather: 'Rainy day',
      color: 'blue lighten-2',
    },
    {
      id: 3,
      text: 'Reminder text, reminder text, reminder text, reminder text,reminder text, reminder text, reminder text, reminder text',
      city: 'City name',
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString('en-us', { timeStyle: 'short' }),
      weather: 'Rainy day',
      color: 'green lighten-2',
    },
    {
      id: 4,
      text: 'Reminder text, reminder text, reminder text, reminder text,reminder text, reminder text, reminder text, reminder text',
      city: 'City name',
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString('en-us', { timeStyle: 'short' }),
      weather: 'Rainy day',
      color: 'indigo lighten-2',
    },
  ];

  if (day) {
    const renderedDate = `${day.dateObj.toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}`;

    return (
      <Fragment>
        <div className="modal-content">
          <button
            onClick={closeModal}
            className="btn-floating waves-effect grey right"
          >
            <i className="material-icons">close</i>
          </button>
          <h5>{renderedDate}</h5>
          <ReminderList reminders={reminders} />
        </div>
        <div className="modal-footer">
          <div className="modal-buttons">
            <button className="btn waves-effect blue">Add reminder</button>
            <button className="btn waves-effect red">Delete all</button>
          </div>
        </div>
      </Fragment>
    );
  }
  return <div>No day selected</div>;
};

export default DayDetails;
