import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import { App } from './app';
import { appReducer } from './app.reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers());

export function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
