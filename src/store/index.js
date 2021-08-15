import { createStore, combineReducers } from 'redux';
import currentDate from './currentDate';
import remindersReducer from './reminders';
import selectedDayReducer from './selectedDay';

const reducers = combineReducers({
  currentDate,
  remindersReducer,
  selectedDayReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
