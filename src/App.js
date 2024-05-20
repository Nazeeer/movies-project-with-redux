import './App.css';
import MoviesList from './components/MoviesList';
import NavbarComponent from './components/NavbarComponent';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllMovie } from './redux/actions/moviesAction';
function App() {


  return (
    <div className='font color-body'>
        <NavbarComponent />
        
        <Container>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<MoviesList />}/>
              <Route path='movie/:id' element={<MovieDetails />}/>
            </Routes>
          {/* {
            movies.length >=1 ? <>
            <Routes>
              <Route path="/" element={<MoviesList pageCount={pageCount} choosePageNumber={choosePageNumber} />}/>
              <Route path='movie/:id' element={<MovieDetails />}/>
            </Routes>
            </>
            : <div className='vh-100 d-flex align-items-center justify-content-center'>
            <i className='ri-loader-4-fill icon'></i>
        </div>
          } */}
          </BrowserRouter>
          
        </Container>
    </div>
  );
}

export default App;
