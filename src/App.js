import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import MoviesArrayRender from './features/Brain/MoviesBrain';
import Home from './pages/Home';
import LiveGlobe from './pages/LiveGlobe';
import LiveTV from './pages/LiveTV';
import Movies from './pages/Movies';
import './App.css';
import ChannelsArrayRender from './features/Brain/ChannelsBrain';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    
    <Router> {/* Wrap your Routes within Router */}
      <div className="App">
        <Header />
        
        {/* <MoviesArrayRender /> */}
        {/* <ChannelsArrayRender /> */}
        </div>
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="liveTV" element={<LiveTV />} />
          <Route path="liveGlobe" element={<LiveGlobe />} />
          {/* <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} /> */}
        </Routes>
      
    </Router>
 
  );
}

export default App;
