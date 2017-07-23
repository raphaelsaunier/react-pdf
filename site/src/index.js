import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

const MOUNT_NODE = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, MOUNT_NODE);
});
