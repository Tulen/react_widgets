import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock';
import Weather from './components/weather';
import Auto from './components/auto';
import Tabs from './components/tabs';

require('./stylesheets/main.scss');

const Root = () => {
  return (
  <div className="widget__grid"> 
    <Clock />
    <Weather />
    <Auto names={["Washington", "Adams", "Jefferson", "Madison", "Monroe"]}/>
    <Tabs />
  </div>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});