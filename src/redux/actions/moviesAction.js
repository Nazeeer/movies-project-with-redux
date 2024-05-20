import { allMovies,moviesAPI } from "../types/moviesType"
import axios from 'axios';

export const getAllMovie = ()=>{
    return async(dispatch)=>{
        const request = await axios.get(moviesAPI);
        dispatch({type: allMovies , data:request.data.results , pages:request.data.total_pages })
    }
    
    
}
export const getSeachMovie = (word)=>{
    return async(dispatch)=>{
        const request =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&query=${word}`)
        dispatch({type: allMovies , data:request.data.results , pages:request.data.total_pages })
    }
    
    
}
export const getPagination = (number)=>{
    return async(dispatch)=>{
        const request =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=${number}`);
        dispatch({type: allMovies , data:request.data.results , pages:request.data.total_pages })
    }
    
    
}