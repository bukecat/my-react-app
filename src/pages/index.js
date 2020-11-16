import React from 'react';
import LifecyclesTest from './lifecycles';

import RenderPropsTest from './renderProps'

import UseStateTest from "./hooks/useStateTest";
import UseEffectTest from './hooks/useEffectTest';

console.log(React);

const line = <div style={{height: '2px', width: '100%', backgroundColor: '#ccc', margin: '30px 0', }}></div>;

class Index extends React.Component{
  constructor() {
    debugger;

    super();

    this.state = {
      count: 0,
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <LifecyclesTest/>

        {line}

        <RenderPropsTest/>

        {line}

        <div>{this.state.count}</div>
        <UseStateTest onClick={this.handleClick.bind(this)}/>

        {line}

        <UseEffectTest/>
      </>
    )
  }
}

export default Index;
