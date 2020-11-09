import React, { useState } from 'react';

function Example(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={() => props.onClick()}>click me2</button>
    </div>
  )
}

export default Example
