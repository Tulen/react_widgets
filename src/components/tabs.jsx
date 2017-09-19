import React, { PureComponent } from 'react';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
    this.switchTabs = this.switchTabs.bind(this);
  }

  switchTabs(e) {
    this.setState({ currentTab: e.target.getAttribute('value') });
  }

  render() {
    return (
      <div className="widget__item">
        <div className="widget__title"> 
          <h1> tabs </h1>
        </div>
        <div className="tabs__menu"> 
          <div className={`active--${this.state.currentTab == 0}`} > 
            <h2 value='0' onClick={this.switchTabs}> { this.props.values[0].title } </h2> 
          </div>
          <div className={`active--${this.state.currentTab == 1}`} > 
            <h2 value='1' onClick={this.switchTabs}> {this.props.values[1].title} </h2> 
          </div>
          <div className={`active--${this.state.currentTab == 2}`} > 
            <h2 value='2' onClick={this.switchTabs}> {this.props.values[2].title} </h2> 
          </div>
        </div>
        <article className="tabs__body"> 
          <h4> { this.props.values[`${this.state.currentTab}`].content} </h4>
        </article>
      </div>
    )
  }
}

export default Tabs;