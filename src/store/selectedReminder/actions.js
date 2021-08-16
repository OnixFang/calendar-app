import * as actions from './types';

export const selectReminder = (reminder) => {
  return {
    type: actions.SELECT_REMINDER,
    payload: reminder,
  };
};

export const deselectReminder = () => {
  return {
    type: actions.DESELECT_REMINDER,
  };
};
