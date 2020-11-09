import React from 'react';
import ReactDom from 'react-dom';

import Test from '../../components/useStateTest';

class LifecyclesTest extends React.Component {
  constructor() {
    debugger;

    super();

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    debugger;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger;
  }

  componentWillUnmount() {
    debugger;
  }




  static getDerivedStateFromProps() {
    debugger;

    return {}
  }

  getSnapshotBeforeUpdate() {
    debugger;
  }

  shouldComponentUpdate() {
    debugger;

    return true
  }




  static getDerivedStateFromError() {
    debugger;
  }

  componentDidCatch(error, errorInfo) {
    debugger
  }



  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    debugger;

    return(
      <div>
        <div>{this.state.count}</div>
        <Test onClick={this.handleClick.bind(this)}/>

        <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">react生命周期图</a>
      </div>
    )
  }
}

export default LifecyclesTest;
