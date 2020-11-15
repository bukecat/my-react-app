import React from 'react';

class LifecyclesTest extends React.Component {
  constructor() {
    super();
    debugger;
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



  render() {
    debugger;

    return(
      <div>
        <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">react生命周期图</a>
      </div>
    )
  }
}

export default LifecyclesTest;
