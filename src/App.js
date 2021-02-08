import React from 'react';
import Snakes from './Snake1';
function App() {
  const style = {
    margin: `2%`,
    color: `white`
  }
  return (
    <div>
      <div className="text-center" style={style}><h1>Snake Game</h1></div>
      <Snakes />
    </div>
  );
}

export default App;
