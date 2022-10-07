import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, createContext,useContext } from 'react';
import './style.css';

const UserContext = createContext();

export default function FavoriteColor() {
  const [color, setColor] = useState('red');
  return (
    <>
      <button type="button" onClick={() => setColor('blue')}>
        <Timer />
        <Counter />
      </button>
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation:{calculation}</p>
      <Component1 />
    </>
  );
}

function Component1() {
  const [user, setUser] = useState('Jesse Hall');

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}|`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component4</h1>
      <Component5 />
    </>
  );
}
function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component5</h1>
      <h2>{`Hello ${user}again|`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
