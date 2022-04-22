import React from 'react';
import Navbar from './components/Shared/Navbar/Navbar';
import Videos from './components/HomePage/Video/Videos';
import Services from './components/Services/Services';
function App() {
  return (
    <div>
      <Navbar/>
      <Videos/>
     <Services/>
    </div>
  );
}

export default App;
