import * as actions from './types';

const sortFunction = (reminderA, reminderB) => {
  if (reminderA.time < reminderB.time) {
    return -1;
  }
  if (reminderA.time > reminderB.time) {
    return 1;
  }

  return 0;
};

const remindersReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_REMINDER:
      if (state.find((reminder) => reminder.id === action.payload.id)) {
        return state
          .map((reminder) => {
            if (reminder.id === action.payload.id) {
              return action.payload;
            }
            return reminder;
          })
          .sort(sortFunction);
      }
      return [...state, action.payload].sort(sortFunction);
    case actions.DELETE_REMINDER:
      return state.filter((reminder) => reminder.id !== action.payload.id);
    case actions.DELETE_ALL_REMINDERS:
      return state.filter(
        (reminder) => reminder.date !== action.payload.toDateString()
      );
    default:
      return state;
  }
};

export default remindersReducer;
