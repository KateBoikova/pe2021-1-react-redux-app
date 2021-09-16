import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';
import usersSagaReducer from './usersSagaReducer';
import toDoPageReducer from './toDoPageReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  userState: usersReducer,
  user: usersSagaReducer,
  todo: toDoPageReducer,
});

export default rootReducer;
