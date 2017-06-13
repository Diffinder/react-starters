import React from 'react';

const App = () => <h1>Hello</h1>; //can create constants which can be exported and used in index.js
//this is example for stateless component creation



//Multiple declarations of constants or class names is not allowed
//export default can be used only once per module



-------- index.js -------------

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);