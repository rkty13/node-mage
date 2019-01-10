import {INIT_PLAYER, LOSE_HEALTH, GAIN_HEALTH} from './actions';

export const playerReducer = (state = {}, action) => {
  const {amount} = action.payload;
  switch (action.type) {
  case INIT_PLAYER:
    return {
      ...state,
      health: amount
    };
  case LOSE_HEALTH:
    return {
      ...state,
      health: state.health - amount
    };
  case GAIN_HEALTH:
    return {
      ...state,
      health: state.health + amount
    };
  default:
    break;
  }
};
