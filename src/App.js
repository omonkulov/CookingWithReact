import './App.css';
import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

//07 Context
export const ThemeContext = React.createContext();


function App() {
  console.log('Render App');
  const [theme, setTheme] = useState('');
  return (
    <ThemeContext.Provider value={{ theme }}>
      <br />
      <p>Class component</p>
      <Counter initialCount={0}></Counter>
      <br />
      <br />
      <p>Functional component</p>
      <CounterHooks initialCount={0}></CounterHooks>

      <button className={theme} onClick={() => setTheme(prevTheme => {
        prevTheme === 'btn btn-primary' ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "#414141";
        return prevTheme === '' ? 'btn btn-primary' : ''
      })}>Toggle Theme</button>

    </ThemeContext.Provider>
  );
}

export default App;
