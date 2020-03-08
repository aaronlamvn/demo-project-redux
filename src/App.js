import React from 'react';
import './App.css';
import ChangeNumbers from './components/ChangeNumbers' 
import ChangeNumberWithRedux from './components/ChangeNumberWithRedux'

function App() {
  return (
    <div className="App">
      {/* <ChangeNumbers /> */}
      <ChangeNumberWithRedux />

    </div>
  );
}

export default App;
