import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { loggingMiddleware } from '../logging/logging.middleware';
import { App } from './app';
import { appReducer } from './app.reducer';
import { appSaga } from './app.saga';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(loggingMiddleware, sagaMiddleware)),
);
sagaMiddleware.run(appSaga);

export function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
