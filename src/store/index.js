import { createStore, combineReducers } from 'redux';
import currentDate from './currentDate';

const reducers = combineReducers({
  currentDate,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
