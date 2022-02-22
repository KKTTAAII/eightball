import React from 'react';
import EightBall from './EightBall';
import ANSWERS from './assets/ANSWERS';

function App() {
  return (
    <div className="App">
      <EightBall answers={ANSWERS}/>
    </div>
  );
}

export default App;
