/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Items from './components/items';

const App = () => (
  <div className="app">
    <Items />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
