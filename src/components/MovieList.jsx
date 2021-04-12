import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';


const MovieList = () => {
    const movies  =  useSelector(state => state.movies) || [];

    return (
        <div className="MedialList row">
            {movies.map(movie => (
                <div className="item col-md-6" key={movie.id}>
                    {/*<h2>{movie.name}</h2>*/}
                    <MovieItem {...movie}/>
                </div>
            ))}
        </div>
    )
}

export default MovieList
