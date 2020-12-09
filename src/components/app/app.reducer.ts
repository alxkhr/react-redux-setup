import { combineReducers } from 'redux';

import { loginReducer, LoginState } from '../login/login.reducer';

export interface AppState {
  login: LoginState;
}

export const appReducer = combineReducers({ login: loginReducer });
