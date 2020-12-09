import { LoginAction } from './login.actions';

export interface LoginState {
  loggedInUser: string | null;
}

const initialState: LoginState = {
  loggedInUser: null,
};

export function loginReducer(
  state: Readonly<LoginState> = initialState,
  action: LoginAction.AnyAction,
): LoginState {
  switch (action.type) {
    case LoginAction.Type.LOGIN:
      return { ...state, loggedInUser: action.payload.user };
    case LoginAction.Type.LOGOUT:
      return { ...state, loggedInUser: null };
    default:
      return state;
  }
}
