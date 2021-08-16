import './styles.css';
import { useDispatch } from 'react-redux';
import { selectReminder } from '../../store/selectedReminder/actions';
import { deleteReminder } from '../../store/reminders/actions';

const Reminder = ({ reminder }) => {
  const dispatch = useDispatch();

  const onEdit = () => {
    dispatch(selectReminder(reminder));
  };

  const onDelete = () => {
    dispatch(deleteReminder(reminder));
  };

  const renderedTime = () => {
    return new Date(`${reminder.date} ${reminder.time}`).toLocaleTimeString(
      'en-us',
      { timeStyle: 'short' }
    );
  };

  return (
    <div className={`reminder`}>
      <div className="reminder-content">
        <p>{reminder.text}</p>
        <p>
          {reminder.city}, {renderedTime()}, Weather: {reminder.weather}
        </p>
      </div>
      <div className="reminder-actions">
        <button
          onClick={onEdit}
          className="btn-floating btn-small waves-effect blue"
        >
          <i className="material-icons">edit</i>
        </button>
        <button
          onClick={onDelete}
          className="btn-floating btn-small waves-effect red"
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};

export default Reminder;
