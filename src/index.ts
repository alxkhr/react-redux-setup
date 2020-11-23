import { createElement } from 'react';
import { render } from 'react-dom';

import { App } from './components/app';

render(createElement(App), document.getElementById('react'));
