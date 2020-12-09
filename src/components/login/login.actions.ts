import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export namespace LoginAction {
  export const requestLogin = actionCreator<{ user: string }>('REQUEST_LOGIN');
  export const requestLogout = actionCreator<{}>('REQUEST_LOGOUT');
  export const login = actionCreator<{ user: string }>('LOGIN');
  export const logout = actionCreator<{}>('LOGOUT');
}
