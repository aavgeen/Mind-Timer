import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MeditationModal from './components/meditationModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      modalVisible: false,
      hours: 0,
      minutes: 3,
      seconds: 0,
      message: ""
    }
  }
  componentDidUpdate(){
    
  }
  mediModalVisible = () => {
    this.setState({modalVisible: true});
    var totalTimeSeconds = (this.state.hours*60*60)+(this.state.minutes*60)+(this.state.seconds);
    console.log(totalTimeSeconds)
    var that = this;
    this.mediInterval = setInterval(function(){
      totalTimeSeconds =  parseInt(totalTimeSeconds-1, 10);
      if(totalTimeSeconds===-1)
        totalTimeSeconds=0;
      if(totalTimeSeconds === 0)
        that.setState({message: "Done. Namaste."})
      console.log(totalTimeSeconds)
      let temp = totalTimeSeconds;
      let seconds = parseInt(temp%60, 10);
      temp/=60;
      let minutes = parseInt(temp%60, 10);
      temp/=60;
      that.setState({
        hours: parseInt(temp,10),
        minutes: minutes,
        seconds: seconds
      })
    },1000);
  }
  mediModalCancel = () => {
    this.setState({modalVisible: false});
    clearTimeout(this.mediInterval);
  }

  render() {
    var mainthis = this;
    return (
      <div className="App noselect">
        {/* Modal Code */}
        {!this.state.modalVisible ? <div></div> :
        <div className="meditationModalBack">
          <div className="meditationModalContent">
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <span className="cancelButton" onClick={() => this.mediModalCancel()}>X</span>
            </div>
            <div className="countdown-timer">
              {this.state.hours} : {this.state.minutes} : {this.state.seconds}
            </div>
            <div style={{fontFamily: 'Montserrat', marginTop: '10%', position: 'relative'}}>
              {this.state.message}
            </div>
          </div>
        </div>
        }
        <header className="App-header">
          <div className="header-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Mind Timer</h1>
          </div>
        </header>
        <div className="App-content">
          {/* Timer Setup Area */}
          <div className="mind-timer noselect">
            <div style={{fontSize: 'xx-large'}}>
              <span className="breatheIn">Breathe In</span><span className="andOut"> &amp; out.</span>
              <div className="duration">
                <div className="time-slots">
                  <div>
                    <button className="upDown-btn" onClick={() => mainthis.setState((prevState)=>({hours: (prevState.hours+1)%24}))}>▲</button>
                    <div className="time-slider">
                      <p >{this.state.hours}</p>                      
                    </div>
                    <button className="upDown-btn" onClick={() => {if(mainthis.state.hours === 0) mainthis.setState({hours: 24}); mainthis.setState((prevState)=>({hours: (prevState.hours-1)%24}))}}>▼</button>
                  </div>
                  <p>h</p>
                </div>
                :
                <div className="time-slots">
                  <div>
                    <button className="upDown-btn" onClick={() => mainthis.setState((prevState)=>({minutes: (prevState.minutes+1)%60}))}>▲</button>
                    <div className="time-slider">
                      <p >{this.state.minutes}</p>
                    </div>
                    <button className="upDown-btn" onClick={() => {if(mainthis.state.minutes === 0) mainthis.setState({minutes: 60}); mainthis.setState((prevState)=>({minutes: (prevState.minutes-1)%60}))}}>▼</button>
                  </div>
                  <p>m</p>
                </div>
                :
                <div className="time-slots">
                  <div>
                    <button className="upDown-btn" onClick={() => mainthis.setState((prevState)=>({seconds: (prevState.seconds+1)%60}))}>▲</button>
                    <div className="time-slider">
                      <p >{this.state.seconds}</p>
                    </div>
                    <button className="upDown-btn" onClick={() => {if(mainthis.state.seconds === 0) mainthis.setState({seconds: 60}); mainthis.setState((prevState)=>({seconds: (prevState.seconds-1)%60}))}}>▼</button>
                  </div>
                  <p>s</p>
                </div>
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
            <button className="focusButton" onClick={() => this.mediModalVisible()}>Focus</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
