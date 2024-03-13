import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import './App.css';
import ChannelsArrayRender from './features/Brain/ChannelsBrain';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import LiveGlobe from './pages/LiveGlobe';
import LiveTV from './pages/LiveTV';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/liveTV" element={<LiveTV />} />
          <Route path="/liveGlobe" element={<LiveGlobe />} />
          {/* <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
