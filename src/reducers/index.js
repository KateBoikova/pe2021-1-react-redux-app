import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';
import usersSagaReducer from './usersSagaReducer';
import toDoReducer from './toDoReducer';
import toDoThemeReducer from './toDoThemeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  userState: usersReducer,
  user: usersSagaReducer,
  todo: toDoReducer,
  theme: toDoThemeReducer,
});

export default rootReducer;
