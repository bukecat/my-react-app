import { useEffect } from 'react';

function useEffectTest() {
  useEffect(() => {
    debugger;
    console.log('hello useEffect');

    return () => {
      debugger;
      console.log('hello, this is useEffect return func');
    }
  }, []);

  return (
    <>
      this is useEffectTest!
    </>
  )
}

export default useEffectTest;
