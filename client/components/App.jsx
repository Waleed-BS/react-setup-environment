/*
    ./client/components/App.jsx
*/
import React from 'react';
import ChildComponent from './ChildComponent.jsx';
import './App.css'

const App = () => {
  const componentLocation = (event) => {
    alert(`We are in in ${event.target.value}`);
  };

  return (

    <div className="App">
      <button
        href="#"
        onClick={componentLocation}
        value="App.jsx"
      >Which component am i?
      </button>
      <ChildComponent />
    </div>
  );
};

export default App;
