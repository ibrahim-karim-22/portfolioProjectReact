import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
// import ChannelsArrayRender from './features/Brain/ChannelsBrain';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LiveGlobeList from "./pages/LiveGlobe";
import ChannelsList from "./pages/LiveTVList";
import LiveTV from "./pages/LiveTV";
import Movies from "./pages/Movies";
import DisplayMovie from "./features/Brain/DisplayMovie";
import FavoritesPage from "./pages/FavoritesPage";
import DisplayGlobe from "./features/Brain/DisplayGlobe";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<DisplayMovie />} />
          <Route path="/livetv" element={<ChannelsList />} />
          <Route path="/livetv/:id" element={<LiveTV />} />
          <Route path="/liveGlobe" element={<LiveGlobeList />} />
          <Route path="/liveGlobe/:id" element={<DisplayGlobe />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
