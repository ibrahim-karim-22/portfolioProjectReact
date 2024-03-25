import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
// import ChannelsArrayRender from './features/Brain/ChannelsBrain';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LiveGlobe from "./pages/LiveGlobe";
import ChannelsList from "./pages/LiveTVList";
import LiveTV from "./pages/LiveTV";
import Movies from "./pages/Movies";
import DisplayMovie from "./features/Brain/DisplayMovie";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<DisplayMovie />} />
          <Route path="/livetv" element={<ChannelsList />} />
          <Route path="/livetv/:id" element={<LiveTV />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/liveGlobe" element={<LiveGlobe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
