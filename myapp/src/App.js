
import './App.css';
import Textform from './mycomponents/Textform';
import Navbar from './mycomponents/Navbar';
import Alert from './mycomponents/Alert';
import About from './mycomponents/About';
import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#002142';
      showAlert("dark mode enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
      <Routes>
        <Route path='/' element={ <Textform mode={mode} showAlert={showAlert} heading="Enter the text to analyze below" />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
       
      </div>
     
    </>
  );
}
export default App;
