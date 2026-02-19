import React, { useEffect, useState } from 'react';
import MovieCarousel from './MovieCarousel';
import { fetchMoviesByGenre } from '../services/tmdbService';

const MovieRow = ({ genre, title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMoviesByGenre(genre.id);
        setMovies(data);
      } catch (error) {
        console.error(`Error loading movies for genre ${genre.name}:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [genre.id]);

  if (loading) {
    return (
      <div className="py-4 px-4 sm:px-6 lg:px-12">
        <div className="h-8 w-48 bg-gray-800 rounded animate-pulse mb-4"></div>
        <div className="flex space-x-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-40 sm:w-48 md:w-56 aspect-[2/3] bg-gray-800 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return null;
  }

  return <MovieCarousel movies={movies} title={title || genre.name} />;
};

export default MovieRow;
