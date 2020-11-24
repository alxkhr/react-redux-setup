import React from 'react';

import { LoginService } from './login.service';

export function Login(props: { onLogin: () => void }) {
  return (
    <div>
      please log in
      <br />
      <button
        onClick={() => {
          LoginService.login('max');
          props.onLogin();
        }}
      >
        login
      </button>
    </div>
  );
}
