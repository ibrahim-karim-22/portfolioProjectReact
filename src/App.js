import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesArrayRender from './features/Brain/MoviesBrain';

import './App.css';
import ChannelsArrayRender from './features/Brain/ChannelsBrain';

function App() {
  return (
    <div className="App">
    
      
      {/* <MoviesArrayRender /> */}
      <ChannelsArrayRender />
      
      {/* Uncomment below to enable routes */}
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="LiveTV" element={<LiveTV />} />
        <Route path="LiveGlobe" element={<LiveGlobe />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
