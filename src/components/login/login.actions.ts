import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export namespace LoginAction {
  export const requestLogin = actionCreator<{ username: string }>('REQUEST_LOGIN');
  export const requestLogout = actionCreator<{}>('REQUEST_LOGOUT');
  export const loggedIn = actionCreator<{ user: string }>('LOGGED_IN');
  export const loggedOut = actionCreator<{}>('LOGGED_OUT');
}
