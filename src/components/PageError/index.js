import React from 'react'
import Lottie from 'react-lottie';
//import * as animationData from './pinjump.json'
import animationData from './error.json';
import { colors } from '../../theme';

export class PageError extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    const buttonStyle = {
      backgroundColor: colors.dark_gray,
      color: colors.white,
      borderRadius: 5,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      margin: 5,
    };

    const contentStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10,
    };

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <Lottie options={defaultOptions}
              height={300}
              width={300}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      <div style={contentStyle}>
        <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
        <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
        <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
      </div>
    </div>
  }
}