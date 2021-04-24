import React from 'react'
import './App.css'

// bring in components
import FilterEvent from './Components/FilterEvent'
import CreateEvent from './Components/CreateEvent/CreateEvent'

function App() {
  return (
    <div className="App">
      <FilterEvent />
      <CreateEvent />
    </div>
  );
}

export default App
