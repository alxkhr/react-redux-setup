import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';

import { LoginApiService } from './api.service';
import { LoginAction } from './login.actions';
import { LoginPersistenceService } from './persistence.service';

export function* loginSaga() {
  yield takeEvery(LoginAction.loggedIn.type, onLogin);
  yield takeEvery(LoginAction.loggedOut.type, onLogout);
  yield takeLeading(LoginAction.requestLogin.type, requestLogin);
  yield takeLeading(LoginAction.requestLogout.type, requestLogout);
}

function onLogin(action: ReturnType<typeof LoginAction.loggedIn>) {
  LoginPersistenceService.login(action.payload.user);
}

function onLogout() {
  LoginPersistenceService.logout();
}

function* requestLogin(action: ReturnType<typeof LoginAction.requestLogin>) {
  // could also fail
  const user: string = yield call(LoginApiService.requestLogin, action.payload.username);
  yield put(LoginAction.loggedIn({ user }));
}

function* requestLogout() {
  // could also fail
  yield call(LoginApiService.requestLogout);
  yield put(LoginAction.loggedOut({}));
}
