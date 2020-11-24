import React from 'react';

import { Login } from './login/login';
import { LoginService } from './login/login.service';
import { NoteList } from './notes/note-list';

export function App() {
  LoginService.login('max');
  if (!LoginService.isLoggedIn()) {
    return <Login />;
  }
  return <NoteList />;
}
