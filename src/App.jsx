import React, { useEffect, useState } from 'react'
import MyButton from './components/MyButton'
import Search from './components/Search'
import Bgaura from './components/Bgaura'
import Loading from './components/Loading';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import { getTrendingMovies, updateSearchcount } from './appwrite';

const TMDB_BASE_API_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`
  }
};

const App = () => {

  const [searchTerm, setsearchTerm] = useState('');
  const [ErrorMessaage, seterrorMessage] = useState('');
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [debouncedSearchterm, setdebouncedSearchterm] = useState('');
  const [isTrending, setisTrending] = useState([]);

  useDebounce(() => setdebouncedSearchterm(searchTerm), 1000, [searchTerm])


  const fetchMovies = async(query = '') => {
    setisLoading(true);
    seterrorMessage('');
    setmovieList([]);

    try {
      const endpoint = query
      ?`${TMDB_BASE_API_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${TMDB_BASE_API_URL}/movie/popular?language=en-US&page=1`;
      
      const response = await fetch(endpoint, TMDB_API_OPTIONS);
      
      if (!response.ok) {
        throw new Error('Unable to fetch movies now');
      }
      
      const data = await response.json();     

      setmovieList(data.results || []);
      
      if (query && data.results.length > 0){
        await updateSearchcount(query, data.results[0])
      }

    }catch (error) {
      seterrorMessage("unable to fetch movies right now, please try again later");

    }finally {
      setisLoading(false);
    }
  }

  const loadtrendingmovies = async() => {
    try{
      const Tmovies = await getTrendingMovies();
      setisTrending(Tmovies);
      console.log(isTrending);
    }
    catch(error) {
      console.log(`Error fetching trending movies ${error}`);
    }
  }


  useEffect(() => {
    fetchMovies(debouncedSearchterm);
  }, [debouncedSearchterm])


  useEffect(() => {
    loadtrendingmovies();
  }, [])
  

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src='./hero-img.png' alt='hero-banner' />
          <h1> Find your Favoriate <span className='text-gradient'>Movies</span> here without any hassle</h1>
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </header>

        {searchTerm == '' ? (
          <section className='trending'>
            <h2> Trending Movies</h2>
            <ul>
              {isTrending.map((movie, index) => (
                <li key={movie.id}>
                  <p>{index + 1 }</p>
                  <img src={movie.poster_url} />
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <h3> Hello </h3>
        )}

        <section className='all-movies'>
          <h2 className='mt-[20px] font-bold'>All Movies</h2>

          { isLoading ? (
            <Loading />
          ) : ErrorMessaage ? (
            <p className='text-red-500'> {ErrorMessaage}</p>
          ): (
            <ul>
              {movieList.map((movie)  => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}

        </section>
      </div>
    </main>
  )
}

export default App