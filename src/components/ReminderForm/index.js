import './styles.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReminder } from '../../store/reminders/actions';
import { deselectReminder } from '../../store/selectedReminder/actions';
import M from 'materialize-css';

const ReminderForm = () => {
  const dispatch = useDispatch();
  const day = useSelector((store) => store.selectedDay);
  const selectedReminder = useSelector((store) => store.selectedReminder);
  const [reminderData, setReminderData] = useState({ ...selectedReminder });
  const textRef = useRef(null);
  const selectRef = useRef(null);

  const renderedDate = `${day.dateObj.toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })}`;

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addReminder(reminderData));
    dispatch(deselectReminder());
  };

  const onFormCancel = () => {
    dispatch(deselectReminder());
  };

  const handleReminderChange = (event) => {
    setReminderData({
      ...reminderData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    M.updateTextFields();
    M.FormSelect.init(selectRef.current);
    M.CharacterCounter.init(textRef.current);
  }, []);

  return (
    <form className="card" onSubmit={onFormSubmit}>
      <div className="card-content">
        <span className="card-title">Reminder for {renderedDate}</span>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              ref={textRef}
              value={reminderData.text}
              onChange={handleReminderChange}
              name="text"
              className="materialize-textarea validate"
              data-length="30"
              maxLength="30"
              required
            ></textarea>
            <label htmlFor="reminder-text">Text</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              name="city"
              value={reminderData.city}
              onChange={handleReminderChange}
              type="text"
              className="validate"
              required
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field col s6">
            <input
              name="time"
              value={reminderData.time}
              onChange={handleReminderChange}
              type="time"
              className="validate"
              required
            />
            <label htmlFor="time">Time</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <select
              name="color"
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
          <button
            type="button"
            onClick={onFormCancel}
            className="btn waves-effect red"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReminderForm;
