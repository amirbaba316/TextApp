
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import React, {useState} from 'react';
import Alert from './componets/Alert';
import About from './componets/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert(
        {
          msg:message,
          type:type
        }
      )
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }

  const toggleMode = () =>{
     if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#0E0328';
        showAlert('Dark Mode Has Been Enabled','success');
     }
     else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light Mode Has Been Enabled','success');
     }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title ="TextApp" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm title="Enter the text here:" mode={mode} alert={alert} showAlert={showAlert}/>
        {/* <Routes>
          <Route exact path="/" 
            element={<TextForm title="Enter the text here:" 
            mode={mode} alert={alert} showAlert={showAlert}/>} />
          <Route exact path="about*" element={<About title="About us" mode={mode}  />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
