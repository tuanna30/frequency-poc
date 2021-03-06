require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../stylesheets/components/_channel.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Channel from './Channel';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<Channel />, document.getElementById('myApp'));
