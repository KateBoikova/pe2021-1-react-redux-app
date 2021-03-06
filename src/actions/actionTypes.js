const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CHANGE_STEP: 'CHANGE_STEP',
  CREATE_USER: 'CREATE_USER',
  // READ_USER: '',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  //USERS_SAGA
  GET_USERS_ACTION: 'GET_USERS_ACTION',
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_ERROR: 'GET_USERS_ERROR',
  // CREATE
  CREATE_USER_ACTION: 'CREATE_USER_ACTION',
  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',
  //DELETE
  DELETE_USER_ACTION: 'DELETE_USER_ACTION',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_ERROR: 'DELETE_USER_ERROR',
  //TODO
  CREATE_TASK_ACTION: 'CREATE_TASK_ACTION',
  UPDATE_TASK_ACTION: 'UPDATE_USER_ACTION',
  DELETE_TASK_ACTION: 'DELETE_TASK_ACTION',
  //THEME
  CHANGE_THEME_ACTION: 'CHANGE_THEME_ACTION',
};

export default ACTION_TYPES;
