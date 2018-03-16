import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppController } from '@modules/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppController/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
