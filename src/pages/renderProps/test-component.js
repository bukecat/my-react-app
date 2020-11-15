function TestComponent(props) {
  const random = +new Date();

  return (
    <>
      {props.render(random)}
    </>
  )
}

export default TestComponent;
