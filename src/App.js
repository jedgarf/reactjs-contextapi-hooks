import React from "react";
import './App.css';
import Home from "./components/Home";
import ThemeChange from './components/ThemeChange';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <ThemeChange />
      <Home/>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
