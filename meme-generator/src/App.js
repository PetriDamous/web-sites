import React from 'react';

import './App.scss';

import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

// API
// https://api.imgflip.com/get_memes

// Default image
// http://i.imgflip.com/1bij.jpg"

// Logo
// http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>

  );
}

export default App;
