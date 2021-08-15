import './styles.css';

const Reminder = ({ reminder }) => {
  return (
    <div className={`reminder ${reminder.color}`}>
      <div className="reminder-content">
        <p>{reminder.text}</p>
        <p>{reminder.city}, {reminder.time}, Weather: {reminder.weather}</p>
      </div>
      <div className="reminder-actions">
        <button className="btn-floating btn-small waves-effect blue">
          <i className="material-icons">edit</i>
        </button>
        <button className="btn-floating btn-small waves-effect red">
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};

export default Reminder;
