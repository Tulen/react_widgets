import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Root = () => {
  return <h1> Widgets! </h1>
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});