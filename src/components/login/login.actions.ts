import { Action } from 'redux';

export namespace LoginAction {
  export enum Type {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
  }

  interface LoginAction extends Action<Type> {
    type: Type.LOGIN;
    payload: { user: string };
  }

  interface LogoutAction extends Action<Type> {
    type: Type.LOGOUT;
  }

  export type AnyAction = LoginAction | LogoutAction;

  export function login(user: string): LoginAction {
    return {
      type: Type.LOGIN,
      payload: { user },
    };
  }

  export function logout(): LogoutAction {
    return {
      type: Type.LOGOUT,
    };
  }
}
