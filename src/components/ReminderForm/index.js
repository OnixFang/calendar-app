import './styles.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deselectReminder } from '../../store/selectedReminder/actions';
import M from 'materialize-css';

const ReminderForm = () => {
  const dispatch = useDispatch();
  const day = useSelector((store) => store.selectedDay);
  const selectedReminder = useSelector((store) => store.selectedReminder);
  const [reminderData, setReminderData] = useState({ ...selectedReminder });
  const selectRef = useRef(null);

  const renderedDate = `${day.dateObj.toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })}`;

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    console.log(reminderData);
  };

  const onFormCancel = () => {
    dispatch(deselectReminder());
  };

  const handleReminderChange = (event) => {
    setReminderData({ ...reminderData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    M.updateTextFields();
    M.FormSelect.init(selectRef.current);
  }, []);

  return (
    <form className="card" onSubmit={onFormSubmit}>
      <div className="card-content">
        <span className="card-title">Reminder for {renderedDate}</span>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              value={reminderData.text}
              onChange={handleReminderChange}
              id="text"
              className="materialize-textarea validate"
              data-length="30"
              maxLength="30"
            ></textarea>
            <label htmlFor="reminder-text">Reminder text</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="city"
              value={reminderData.city}
              onChange={handleReminderChange}
              type="text"
              className="validate"
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field col s6">
            <input
              id="time"
              value={reminderData.time}
              onChange={handleReminderChange}
              type="time"
              className="validate"
            />
            <label htmlFor="time">Time</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <select
              id="color"
              ref={selectRef}
              value={reminderData.color}
              onChange={handleReminderChange}
            >
              <option value="">None</option>
              <option value="red lighten-2">Red</option>
              <option value="blue lighten-2">Blue</option>
              <option value="green lighten-2">Green</option>
            </select>
            <label>Color</label>
          </div>
        </div>
      </div>
      <div className="card-action">
        <div className="action-buttons">
          <button type="submit" className="btn waves-effect blue">
            Save
          </button>
          <button onClick={onFormCancel} className="btn waves-effect red">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReminderForm;
