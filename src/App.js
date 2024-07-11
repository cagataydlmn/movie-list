import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import './style/style.scss';
import Movies from './Pages/Movies';
import TvSeries from './Pages/TvSeries';
import Save from './Pages/Save';
import Profile from './Pages/Profile';
import  AppProvider  from './context/AppContext';
import Detail from './Pages/Detail';

function App() {
  return (
    <AppProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-series" element={<TvSeries />} />
            <Route path="/save" element={<Save />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/movie/:id' element={<Detail/>}/>
            <Route path='/save/movie/:id' element={<Detail/>}/>
            <Route path='/tv-series/movie/:id' element={<Detail/>}/>
            <Route path='/movies/movie/:id' element={<Detail/>}/>
          </Routes>
      </Router>
</AppProvider>
  );
}

export default App;
