import './styles.css';
import { useSelector } from 'react-redux';
import Reminder from '../Reminder';

const ReminderList = () => {
  const reminders = useSelector((store) => store.selectedDay.reminders);

  if (reminders.length) {
    return (
      <ul className="reminder-list collection with-header top-margin">
        <li className="collection-header">
          <h4>Reminders</h4>
        </li>
        {reminders.map((reminder) => (
          <li className="collection-item">
            <Reminder key={reminder.id} reminder={reminder} />
          </li>
        ))}
      </ul>
    );
  }

  return <h5 className="top-margin">There are no reminders for this date.</h5>;
};

export default ReminderList;
