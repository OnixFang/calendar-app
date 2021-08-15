import * as actions from './types';

const currentDateReducer = (state = new Date(), action) => {
  switch (action.type) {
    case actions.INCREMENT_MONTH:
      return new Date(state.getFullYear(), state.getMonth() + 1);
    case actions.DECREMENT_MONTH:
      return new Date(state.getFullYear(), state.getMonth() - 1);
    default:
      return state;
  }
};

export default currentDateReducer;
