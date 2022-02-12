import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {

  const [colors, setColors] = useState('rgb(0 14 64)');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const setOutgoing = () => {
    setAlert({
      cls: 'outgoing'
    });
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setOutgoing();
      setAlert(null);
    }, 1500);
  }
  const changeColors = (colours, textColors) => {
    setColors({
      clrs: colours,
      textColor: textColors
    });
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert(' Dark Mode Enabled ', 'success');
      changeColors('rgb(0 14 64)', 'white')
    }
    else {
      setMode('light');
      showAlert(' Light Mode Enabled ', 'success');
    }
  }//npm install react-router-dom

  return (
    <div className="App">
      <Navbar changeColors={changeColors} title="TextManager" mode={mode} toggleMode={toggleMode} />

      <Alert colors={colors} alert={alert} showAlert={showAlert} />
      {/* <About /> */}
      <TextForm colors={colors} mode={mode} showAlert={showAlert} heading='Enter Your Text Below' />

    </div>

  );
}

export default App;
