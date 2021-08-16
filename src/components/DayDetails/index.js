import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectReminder } from '../../store/selectedReminder/actions';
import { deselectDay } from '../../store/selectedDay/actions';
import { nanoid } from 'nanoid';
import ReminderList from '../ReminderList';

const DayDetails = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((store) => store.selectedDay);

  const onClose = () => {
    dispatch(deselectDay());
  };

  const onAddReminder = () => {
    const newReminder = {
      id: nanoid(),
      text: '',
      city: '',
      date: selectedDay.dateObj.toDateString(),
      time: '',
      weather: '',
      color: '',
    };

    dispatch(selectReminder(newReminder));
  };

  const renderedDate = `${selectedDay.dateObj.toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })}`;

  return (
    <div className="card">
      <div className="card-content">
        <button
          onClick={onClose}
          className="btn-floating waves-effect grey right"
        >
          <i className="material-icons">close</i>
        </button>
        <span className="card-title">{renderedDate}</span>
        <ReminderList />
      </div>
      <div className="card-action">
        <div className="action-buttons">
          <button onClick={onAddReminder} className="btn waves-effect blue">
            Add reminder
          </button>
          <button className="btn waves-effect red">Delete all</button>
        </div>
      </div>
    </div>
  );
};

export default DayDetails;
