
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
     if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#092a4a';
     }
     else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
     }
  }
  return (
    <>
      <Navbar title ="TextApp" mode={mode} toggleMode={toggleMode} />
      <TextForm title="Enter the text here:" mode={mode}/>
    </>
  );
}

export default App;
