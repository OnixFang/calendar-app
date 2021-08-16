import * as actions from './types';

const selectedReminderReducer = (state = null, action) => {
  switch (action.type) {
    case actions.SELECT_REMINDER:
      return action.payload;
    case actions.DESELECT_REMINDER:
      return null;
    default:
      return state;
  }
};

export default selectedReminderReducer;
