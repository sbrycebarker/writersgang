import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>The Writers Gang</h1>
      </header>
    )
  }
}

class Hero extends Component {
  render() {
    return (
      <div id="hero">
        <div>
          <h3>Write the Story!</h3>
        </div>
        <div>...UNDER CONSTRUCTION...</div>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div id="content">
        <div></div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Content />
      </div>
    );
  }
}

export default App;
