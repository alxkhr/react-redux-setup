import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Module } from '../app/app';
import { AppState } from '../app/app.reducer';
import { LoginAction } from '../login/login.actions';

export function NavigationBar(props: {
  modules: Module[];
  setActiveModule: (module: Module) => void;
}) {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.login.loggedInUser);
  return (
    <div>
      {props.modules.map((module) => (
        <button
          key={`module-${module}`}
          onClick={() => {
            props.setActiveModule(module);
          }}
        >
          {module}
        </button>
      ))}
      Hello, {user}
      <button
        onClick={() => {
          dispatch(LoginAction.requestLogout({}));
        }}
      >
        logout
      </button>
    </div>
  );
}
