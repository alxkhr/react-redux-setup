import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export namespace LoginAction {
  export const login = actionCreator<{ user: string }>('LOGIN');
  export const logout = actionCreator<{}>('LOGOUT');
}
