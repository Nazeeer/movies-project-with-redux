import React from 'react'
import {  Row  } from 'react-bootstrap'
import CardMovie from './CardMovie'
import NotFound from './NotFound'
import PaginationComponent from './PaginationComponent'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllMovie } from '../redux/actions/moviesAction';
const MoviesList = () => {
  const [movies , setMovies] = useState([]);

  
  const dispatch =useDispatch()
  useEffect(()=>{
    // getAllMovies();
    dispatch(getAllMovie())
    // console.log(dispatch(getAllMovie()));
    console.log(movies);
  },[])
  const dataMovies= useSelector((state)=> state.movies)
  useEffect(()=>{
    setMovies(dataMovies)
  },[dataMovies])
  
  return (

    
    <Row className="mt-3"> 
    {movies.length >=1 ? movies.map((movie,i)=> <CardMovie movie={movie} key={i}/> ): <NotFound/>}
    {movies.length ?  <PaginationComponent />: null}
    </Row>
  )
}

export default MoviesList