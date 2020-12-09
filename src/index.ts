import { createElement } from 'react';
import { render } from 'react-dom';

import { AppContainer } from './components/app/container';

render(createElement(AppContainer), document.getElementById('react'));
