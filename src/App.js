import React from 'react';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

class App extends React.Component
{
  render()
  {
    return(<>
    <h1>This is a blog project By Varun Jain</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
    </>)
  }
}

export default App;