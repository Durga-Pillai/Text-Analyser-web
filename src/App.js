// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{ useState} from "react";
import {Toggle} from "./components/Toggle";
import About from './components/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  const [isDark,setIsDark]=useState(false);
   
  return (
    <div className="APP" data-theme={isDark?"dark":"light"}>
     
    <Router>
    <Navbar title="CreativeThinking" toggle={
    <Toggle
         isChecked={isDark}
         handleChange={() => setIsDark(!isDark)} />
    }
    />
    
      
    
   
    <div className ="container my-3">
      <Routes>
      <Route path="/" element={<Textform heading="Enter the text to analyse"/>} />
    <Route path="/about" element={<About />}/>
      </Routes>
    
    
    </div>
    </Router>
    {/* <div>
    <Textform heading="Enter your text"/>
    </div> */}
    
    </div>
   
  );
}

export default App;
