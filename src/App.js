import React from 'react';

import './App.css';
import { Navbar, Sidebar } from './components';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
    </div>
  );
}

export default App;
