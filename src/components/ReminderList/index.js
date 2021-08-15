import './styles.css';
import Reminder from '../Reminder';

const ReminderList = ({ reminders }) => {
  if (reminders.length) {
    return (
      <ul className="reminder-list collection with-header top-margin">
        <li className="collection-header">
          <h4>Reminders</h4>
        </li>
        {reminders.map((reminder) => (
          <Reminder key={reminder.id} reminder={reminder} />
        ))}
      </ul>
    );
  }

  return <h5 className="top-margin">There are no reminders for this date.</h5>;
};

export default ReminderList;
