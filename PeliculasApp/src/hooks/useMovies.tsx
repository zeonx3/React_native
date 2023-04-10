import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';
import { useState, useEffect } from 'react';

interface MoviesState {
    nowPlaying : Movie[];
    popular : Movie[];
    topRated : Movie[];
    upComing : Movie[]; 
}


export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [movieState, setMovieState] =  useState<MoviesState>({
        nowPlaying : [],
        popular : [],
        topRated : [],
        upComing : [],
    })

    const getMovies = async () => {

    const  now_playingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const  popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const  top_ratedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const  upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const response = await Promise.all([
        now_playingPromise,
        popularPromise,
        top_ratedPromise,
        upcomingPromise]);

    setMovieState({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upComing: response[3].data.results, 
    })

    setisLoading(false);
    }
    
    useEffect(() => {
        //now_playing
        getMovies();

    }, [])
    

  return {
    ...movieState,
    isLoading
  }
  
}
