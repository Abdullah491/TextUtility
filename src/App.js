import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [myAlert, setmyAlert] = useState(null);
  const showAlert = (type, message) => {
    setmyAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setmyAlert(null);
    }, 2500);
  }
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#4c4646";
      showAlert('success', 'Dark Mode Enabled');


    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('success', 'Light Mode Enabled');
    }
  }


  return (
    // <Router>
      <div className="myApp">

        <Navbar title="TextChange" mode={mode} toggleMode={toggleMode} />

        <div className="container my-3">
          <Alert alert={myAlert} />
          <TextForm title="Enter your text below" mode={mode} alert={showAlert} />

        </div>
        {/* <Routes>
          <Route exact path="/about" element={<About/>} />

          <Route exact path="/" element={<TextForm title="Enter your text below" mode={mode} alert={showAlert} />}/>
            
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
