import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Login } from '../login/login';
import { NavigationBar } from '../navigation/navigation-bar';
import { NoteList } from '../notes/note-list';
import { Settings } from '../settings/settings';
import { AppState } from './app.reducer';

export enum Module {
  NOTES = 'notes',
  SETTINGS = 'settings',
}

export function App() {
  const loggedInUser = useSelector((state: AppState) => state.login.loggedInUser);
  const [activeModule, setActiveModule] = useState(Module.NOTES);
  return loggedInUser === null ? (
    <Login />
  ) : (
    <>
      <NavigationBar
        modules={Object.values(Module)}
        setActiveModule={(module) => {
          setActiveModule(module);
        }}
      />
      {renderContent(activeModule)}
    </>
  );
}

function renderContent(activeModule: Module) {
  switch (activeModule) {
    case Module.NOTES:
      return <NoteList />;
    case Module.SETTINGS:
      return <Settings />;
  }
}
