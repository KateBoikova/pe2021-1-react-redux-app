import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../actions';

function CounterH () {
  const { count, step } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const { increment, decrement, changeStep } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const changeStepHandler = ({ target: { value } }) =>
    changeStep(Number(value));

  return (
    <article>
      <h1>Count: {count}</h1>
      <input type='number' value={step} onChange={changeStepHandler} />
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </article>
  );
}

export default CounterH;
