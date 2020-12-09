import { Middleware } from 'redux';
import { AnyAction } from 'typescript-fsa';

export const loggingMiddleware: Middleware = (api) => (next) => (action: AnyAction) => {
  console.log('Action:', action.type);
  next(action);
};
