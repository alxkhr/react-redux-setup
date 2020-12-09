import { takeEvery } from 'redux-saga/effects';

import { LoginAction } from './login.actions';
import { LoginPersistenceService } from './login.service';

export function* loginSaga() {
  yield takeEvery(LoginAction.login.type, onLogin);
  yield takeEvery(LoginAction.logout.type, onLogout);
}

function onLogin(action: ReturnType<typeof LoginAction.login>) {
  LoginPersistenceService.login(action.payload.user);
}

function onLogout() {
  LoginPersistenceService.logout();
}

// function* requestLogin() {
//   console.log('log in requested');
// }
