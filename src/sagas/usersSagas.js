import { put } from 'redux-saga/effects';
import {
  createUserRequest,
  createUserSuccess,
  createUserError,
  getUsersError,
  getUsersRequest,
  getUsersSuccess,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
} from '../actions';
import * as API from '../api';

export function * getUsersSaga () {
  yield put(getUsersRequest());
  try {
    const { data: users } = yield API.getUsers();
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError(e));
  }
}

export function * createUserSaga (action) {
  const { user } = action;
  yield put(createUserRequest(user));
  try {
    const { data: newUser } = yield API.createUser(user);
    yield put(createUserSuccess(newUser));
  } catch (e) {
    yield put(createUserError(e));
  }
}

export function * deleteUserSaga (action) {
  const { id } = action;
  yield put(deleteUserRequest());
  try {
    const { data: deletedUser } = yield API.deleteUser(id);
    yield put(deleteUserSuccess(deletedUser));
  } catch (e) {
    yield put(deleteUserError(e));
  }
}
