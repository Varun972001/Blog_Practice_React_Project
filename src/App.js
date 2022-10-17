import React from 'react';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'

class App extends React.Component
{
  render()
  {
    return(
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>)
  }
}

export default App;