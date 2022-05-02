import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  // count is our intinal state 
  // setCount is used to update the state
  return (
    <div className="App">
      <p> you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} >
        Click me 
      </button>
    </div>
  );
}
// the p tag used to display the current state of count 
// the button will update the count using the onlcick and setCount to update count 
export default App;
