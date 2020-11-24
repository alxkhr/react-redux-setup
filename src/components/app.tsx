import React, { useState } from 'react';

import { Login } from './login/login';
import { LoginService } from './login/login.service';
import { NoteList } from './notes/note-list';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(LoginService.isLoggedIn());
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
      <button
        onClick={() => {
          LoginService.logout();
          setIsLoggedIn(LoginService.isLoggedIn());
        }}
      >
        logout
      </button>
      <NoteList />
    </div>
  );
}
