import React from 'react';
import { connect } from 'react-redux';
// import ACTION_TYPES from '../../actions/actionTypes';
import * as actionCreators from '../../actions';

function Counter (props) {
  const {
    count,
    step,
    incrementAction,
    decrementAction,
    changeStepAction,
  } = props;

  // const increment = () => {
  //   const action = { type: ACTION_TYPES.INCREMENT };
  //   dispatch(actionCreators.increment());
  // };

  // const decrement = () => {
  //   const action = { type: ACTION_TYPES.DECREMENT };
  //   dispatch(action);
  // };

  const changeStep = event => {
    changeStepAction(Number(event.target.value));
  };

  return (
    <article>
      <div>Count: {count}</div>
      <input type='number' value={step} onChange={changeStepAction} />
      <button onClick={decrementAction}>-</button>
      <button onClick={incrementAction}>+</button>
    </article>
  );
}

const mapStateToProps = state => state.counter;

const mapDispatchToProps = dispatch => {
  return {
    incrementAction: () => {
      dispatch(actionCreators.increment());
    },
    decrementAction: () => {
      dispatch(actionCreators.decrement());
    },
    changeStepAction: value => {
      dispatch(actionCreators.changeStep(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
