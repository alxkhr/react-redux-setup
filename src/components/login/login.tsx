import React, { ChangeEvent, Component } from 'react';

import { LoginService } from './login.service';

interface LoginProps {
  onLogin: () => void;
}

interface LoginState {
  username: string;
}

export class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = { username: '' };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  onLogin() {
    LoginService.login(this.state.username);
    this.props.onLogin();
  }

  render() {
    return (
      <div>
        please log in
        <br />
        username:
        <br />
        <input type="text" value={this.state.username} onChange={this.onChangeUsername} />
        <button onClick={this.onLogin}>login</button>
      </div>
    );
  }
}
