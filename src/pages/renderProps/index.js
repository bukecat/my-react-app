import TestComponent from './test-component';

function RenderPropsTest() {

  return (
    <>
      <TestComponent render={(target) => {
        return (<p>hello {target}</p>);
      }}/>
    </>
  )
}

export default RenderPropsTest;
