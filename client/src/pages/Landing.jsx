import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import MovieCarousel from '../components/MovieCarousel';
import MovieRow from '../components/MovieRow';
import { fetchTrendingMovies, GENRES } from '../services/tmdbService';

const Landing = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        setLoading(true);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        if (movies.length > 0) {
          setFeaturedMovie(movies[0]);
        }
      } catch (error) {
        console.error('Error loading trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar />
      
      <HeroBanner movie={featuredMovie} />
      
      <div className="relative z-10 -mt-32 pb-12">
        <MovieCarousel 
          movies={trendingMovies.slice(1)} 
          title="Trending Now" 
        />
        
        <MovieRow genre={GENRES.ACTION} />
        <MovieRow genre={GENRES.COMEDY} />
        <MovieRow genre={GENRES.HORROR} />
        <MovieRow genre={GENRES.ROMANCE} />
        <MovieRow genre={GENRES.SCIENCE_FICTION} title="Sci-Fi Movies" />
        <MovieRow genre={GENRES.THRILLER} />
        <MovieRow genre={GENRES.DOCUMENTARY} />
      </div>
    </div>
  );
};

export default Landing;
