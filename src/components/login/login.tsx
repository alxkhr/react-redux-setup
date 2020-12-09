import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';

import { LoginAction } from './login.actions';

interface DispatchProps {
  login: (user: string) => void;
}

interface StateProps {}

interface OwnProps {}

type ComponentProps = DispatchProps & StateProps & OwnProps;

interface ComponentState {
  username: string;
}

class LoginComponent extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { username: '' };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  onLogin() {
    this.props.login(this.state.username);
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

export const Login = connect<StateProps, DispatchProps, OwnProps>(null, {
  login: (username: string) => LoginAction.requestLogin({ username }),
})(LoginComponent);
