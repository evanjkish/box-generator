import './App.css';
import Form from './components/form';
import Box from './components/box';
import React, {useState} from 'react';


function App() {

  const [boxes, setBoxes] = useState(["purple","red"]);

  const addBox = (newColor) => {
    let boxesCopy = [...boxes];
    boxesCopy.push(newColor);
    setBoxes(boxesCopy);
  }

  // const newBox {
    
  // };



  return (
    <div className="App">
      < Form addBox = {addBox}  />
      < Box boxes = {boxes}/>
    </div>
  );
}

export default App;
