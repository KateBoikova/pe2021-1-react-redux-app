import ACTION_TYPES from './actionTypes';

export const increment = () => ({ type: ACTION_TYPES.INCREMENT });

export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });

export const changeStep = newStep => ({
  type: ACTION_TYPES.CHANGE_STEP,
  value: newStep,
});

export const createUser = userData => {
  return {
    type: ACTION_TYPES.CREATE_USER,
    userData: userData,
  };
};

export const changeBan = newInfo => {
  return {
    type: ACTION_TYPES.UPDATE_USER,
    newInfo: newInfo,
  };
};

export const deleteUser = id => {
  return {
    type: ACTION_TYPES.DELETE_USER,
    id: id,
  };
};

export const getUsersAction = () => ({ type: ACTION_TYPES.GET_USERS_ACTION });

export const getUsersRequest = () => ({ type: ACTION_TYPES.GET_USERS_REQUEST });

export const getUsersSuccess = users => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  users: users,
});

export const getUsersError = error => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  error: error,
});

export const createUserAction = user => ({
  type: ACTION_TYPES.CREATE_USER_ACTION,
  user,
});

export const createUserRequest = () => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
});

export const createUserSuccess = user => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  user,
});

export const createUserError = error => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  error,
});

//delete

export const deleteUserAction = user => ({
  type: ACTION_TYPES.DELETE_USER_ACTION,
  user,
});

export const deleteUserRequest = () => ({
  type: ACTION_TYPES.DELETE_USER_REQUEST,
});

export const deleteUserSuccess = deletedUser => ({
  type: ACTION_TYPES.DELETE_USER_SUCCESS,
});

export const deleteUserError = error => ({
  type: ACTION_TYPES.DELETE_USER_ERROR,
  error,
});

export const createTaskAction = newTask => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  newTask,
});

export const updateTaskAction = id => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  id,
});

export const deleteTaskAction = id => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  id,
});

export const changeThemeAction = () => ({
  type: ACTION_TYPES.CHANGE_THEME_ACTION,
});
