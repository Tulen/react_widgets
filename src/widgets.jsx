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
    <Tabs values={[
      {
        title: '1st',
        content: 'Tab number one!'
      },
      {
        title: '2nd',
        content: 'The second tab.'
      },
      {
        title: '3rd',
        content: 'I"m third...'
      }
    ]}/>
  </div>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});