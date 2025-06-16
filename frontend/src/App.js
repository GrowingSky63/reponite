import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import Skins from './sections/Skins';
import Shop from './sections/Shop';
import Header from './components/Header';
import { SkinPaginationProvider } from './context/SkinPaginationContext';

function App() {
  return (
    <SkinPaginationProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skins" element={<Skins />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </div>
    </SkinPaginationProvider>
  );
}

export default App;