import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { increment, decrement } from "../Redux/actions/actionCounter";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count); // Adjusted to access count property
  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
