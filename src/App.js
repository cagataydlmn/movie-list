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
import MovieFilterPage from './Pages/MovieFilterPage';
import TvSeriesFilterPage from './Pages/TvSeriesFilterPage';

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
            <Route path='/movies/:language' element={<MovieFilterPage/>}/>
            <Route path='/movies/filtre/movie/:id' element={<Detail/>}/>/
            <Route path='tv-series/tv-series/:id' element={<Detail/>}/>
            <Route path='/tv-series/:language' element={<TvSeriesFilterPage/>}/>

          </Routes>
      </Router>
</AppProvider>
  );
}

export default App;
