import { createStore, combineReducers } from 'redux';
import currentDateReducer from './currentDate';
import remindersReducer from './reminders';
import selectedDayReducer from './selectedDay';
import selectedReminderReducer from './selectedReminder';

const reducers = combineReducers({
  currentDate: currentDateReducer,
  reminders: remindersReducer,
  selectedDay: selectedDayReducer,
  selectedReminder: selectedReminderReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
