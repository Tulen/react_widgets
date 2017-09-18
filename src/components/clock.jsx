import React, { PureComponent } from 'react';

class Clock extends PureComponent {
  constructor() {
    super();
    this.state = {
      time: new Date()
    }
    this.timer = 0;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    let ampm;
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    if (hours > 11) {
      ampm = 'PM';
      hours = hours - 12;
    } else {
      ampm = 'AM';
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return(
      <div className="widget__item"> 
        <div className="clock__title"> 
          <h1> clock </h1>
        </div>
        <div className="clock__display"> 
        <h2> {hours} </h2>
        <h2> {minutes} </h2>
        <h2> {seconds} </h2>
        <h2> {ampm} </h2>
        </div>
      </div>
    )
  }
}

export default Clock;