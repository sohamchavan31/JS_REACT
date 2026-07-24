import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Createpost from './pages/Createpost';
import Feed from './pages/Feed';

const App = () => (
  <Router>
    <Routes>
      <Route path="/createPost" element={<Createpost />} />
      <Route path='/feed' element={<Feed/>} /> 
    </Routes>
  </Router>
);

export default App;