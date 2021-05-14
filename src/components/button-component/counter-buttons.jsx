import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue
} from "../../slices/counter-slice";

const CounterButtons = () => {
  const dispatch = useDispatch();

  const [mutableValue, setMutableValue] = useState("");

  return (
    <div className="my-5 row">
      <div className="col-2">
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increase by one
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-warning"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrease by one
        </button>
      </div>
      <div className="col-2">
        <input
          type="number"
          placeholder="Enter mutable value"
          value={mutableValue}
          onChange={event => {
            setMutableValue(event.target.value);
          }}
        ></input>
      </div>
      <div className="col-2">
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(incrementByValue(mutableValue));
          }}
        >
          Increase
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-warning"
          onClick={() => {
            dispatch(decrementByValue(mutableValue));
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default CounterButtons;
