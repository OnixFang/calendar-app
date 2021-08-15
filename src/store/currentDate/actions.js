import * as actions from './types';

export const incrementMonth = () => {
  return {
    type: actions.INCREMENT_MONTH,
  };
};

export const decrementMonth = () => {
  return {
    type: actions.DECREMENT_MONTH,
  };
};
