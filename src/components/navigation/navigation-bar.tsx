import React from 'react';
import { useDispatch } from 'react-redux';

import { Module } from '../app/app';
import { LoginAction } from '../login/login.actions';

export function NavigationBar(props: {
  modules: Module[];
  setActiveModule: (module: Module) => void;
}) {
  const dispatch = useDispatch();
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
      <button
        onClick={() => {
          dispatch(LoginAction.logout());
        }}
      >
        logout
      </button>
    </div>
  );
}
