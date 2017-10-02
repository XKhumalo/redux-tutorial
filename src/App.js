import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoursesPage from './components/CoursesPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoursesPage />
      </div>
    );
  }
}

export default App;
