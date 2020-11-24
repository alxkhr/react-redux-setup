import React, { useState } from 'react';

import { Login } from './login/login';
import { LoginService } from './login/login.service';
import { NoteList } from './notes/note-list';
import { Settings } from './settings/settings';

enum Tab {
  NOTES = 'notes',
  SETTINGS = 'settings',
}

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(LoginService.isLoggedIn());
  const [activeTab, setActiveTab] = useState(Tab.NOTES);
  if (!isLoggedIn) {
    return (
      <Login
        onLogin={() => {
          setIsLoggedIn(LoginService.isLoggedIn());
        }}
      />
    );
  }
  return (
    <div>
      {Object.values(Tab).map((tab) => (
        <button
          key={`tab-${tab}`}
          onClick={() => {
            setActiveTab(tab);
          }}
        >
          {tab}
        </button>
      ))}
      <button
        onClick={() => {
          LoginService.logout();
          setIsLoggedIn(LoginService.isLoggedIn());
        }}
      >
        logout
      </button>
      {renderContent(activeTab)}
    </div>
  );
}

function renderContent(activeTab: Tab) {
  switch (activeTab) {
    case Tab.NOTES:
      return <NoteList />;
    case Tab.SETTINGS:
      return <Settings />;
  }
}
