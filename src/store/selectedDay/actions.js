import * as actions from './types';

export const selectDay = (day) => {
  return {
    type: actions.SELECT_DAY,
    payload: day,
  };
};

export const deselectDay = () => {
  return {
    type: actions.DESELECT_DAY,
  };
};
