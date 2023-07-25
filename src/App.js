import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './hostit-html/css/style.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App () {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])

    const [message1, setMessage1] = useState("");
    
    useEffect(() => {
      fetch('/api/goodbye')
          .then(response => response.text())
          .then(message1 => {
              setMessage1(message1);
          });
    },[])

    

    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">{message}</h1>
        </header>
        <Navbar/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </Router>
        
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    </div>
  )
}

export default App;
