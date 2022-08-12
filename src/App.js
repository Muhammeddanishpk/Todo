import React from 'react';
import Todo from './components/todo/Todo';
import Header from './components/header/header'
import About from './components/todo/about/about';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Todo/>}/>
      <Route path="/about" exact element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
