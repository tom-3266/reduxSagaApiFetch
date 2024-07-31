import { DECREMENT, INCREMENT } from "../actionTypes/actionCounterType";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
