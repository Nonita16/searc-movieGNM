import React, { useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import {searchMovie} from '../actions/index';

const Home = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);
    const movies  =  useSelector(state => state.movies) || [];
    const loading = useSelector(state => state.loading)

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
        dispatch(searchMovie(searchInput.current.value));
      }, [])


    return (
        <div>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <MovieList movies={movies}/>
        </div>
    )
}

export default Home;