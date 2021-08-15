import * as actions from './types';

const remindersReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_REMINDER:
      return [...state, action.payload];
    case actions.EDIT_REMINDER:
      return state.map((reminder) => {
        if (reminder.id === action.payload.id) {
          return action.payload;
        }
        return reminder;
      });
    case actions.DELETE_REMINDER:
      return state.filter((reminder) => reminder.id !== action.payload.id);
    case actions.DELETE_ALL_REMINDERS:
      return state.filter(
        (reminder) =>
          reminder.date.toDateString() !== action.payload.date.toDateString()
      );
    default:
      return state;
  }
};

export default remindersReducer;
