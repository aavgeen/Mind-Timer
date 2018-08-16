import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="meditationModal">
          dwiwoiiowjdiowjdo
        </div> */}
        <header className="App-header">
          <div className="header-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Mind Timer</h1>
          </div>
        </header>
        <div className="App-content">
          <div className="mind-timer">
            <div style={{fontSize: 'xx-large'}}>
              <span className="breatheIn">Breathe In</span><span className="andOut"> &amp; out.</span>
              <div className="duration">
                 Duration
              </div>
              <div className="sounds">
                <div className="starting-sound indisounds">
                  Starting Sound
                </div>
                <div className="ambientSound indisounds">
                 Ambient Sounds
                </div>
                <div className="ending-sound indisounds">
                  Ending Sound
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
