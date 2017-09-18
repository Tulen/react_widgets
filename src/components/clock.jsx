import React, {Component} from 'react';

class Clock extends Component {
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
    return(
      <div className="widget"> 
        <div className="clock__title"> 
          <h1> CLOCK </h1>
        </div>
        <div className="clock__display"> 
        <h2> {this.state.time.getHours()} </h2>
        <h2> {this.state.time.getMinutes()} </h2>
        <h2> {this.state.time.getSeconds()} </h2>
        </div>
      </div>
    )
  }
}

export default Clock;