import { AnyAction } from 'typescript-fsa';

import { LoginAction } from './login.actions';
import { LoginPersistenceService } from './login.service';

export interface LoginState {
  loggedInUser: string | null;
}

const initialState: LoginState = {
  loggedInUser: LoginPersistenceService.getUser(),
};

export function loginReducer(
  state: Readonly<LoginState> = initialState,
  action: AnyAction,
): LoginState {
  if (LoginAction.login.match(action)) {
    return { ...state, loggedInUser: action.payload.user };
  }
  if (LoginAction.logout.match(action)) {
    return { ...state, loggedInUser: null };
  }
  return state;
}
