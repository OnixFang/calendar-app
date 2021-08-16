import * as actions from './types';

export const addReminder = (reminder) => {
  return {
    type: actions.ADD_REMINDER,
    payload: reminder,
  };
};

export const deleteReminder = (id) => {
  return {
    type: actions.DELETE_REMINDER,
    payload: id,
  };
};

export const deleteAllReminders = (date) => {
  return {
    type: actions.DELETE_ALL_REMINDERS,
    payload: date,
  };
};
