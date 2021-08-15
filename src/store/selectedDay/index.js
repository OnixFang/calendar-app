import * as actions from './types';

const selectedDayReducer = (state = null, action) => {
  switch (action.type) {
    case actions.SELECT_DAY:
      return action.payload;
    case actions.DESELECT_DAY:
      return null;
    default:
      return state;
  }
};

export default selectedDayReducer;
