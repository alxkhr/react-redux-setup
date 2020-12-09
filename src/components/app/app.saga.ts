import { all } from 'redux-saga/effects';

import { loginSaga } from '../login/login.saga';

export function* appSaga() {
  yield all([loginSaga()]);
}
