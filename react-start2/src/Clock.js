import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  formatTime() {
    const { format = '24', timezone = '' } = this.props;
    let time = this.state.time;

    if (timezone) {
      const offset = parseInt(timezone) || 0;
      time = new Date(time.getTime() + (offset * 60 * 60 * 1000) + (time.getTimezoneOffset() * 60 * 1000));
    }

    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    if (format === '12') {
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${hours}:${minutes}:${seconds} ${period}`;
    }

    hours = hours.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div style={{ fontSize: '2rem', fontFamily: 'monospace', textAlign: 'center', margin: '20px' }}>
        {this.formatTime()}
      </div>
    );
  }
}

export default Clock;