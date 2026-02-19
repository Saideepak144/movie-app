import React, { useState } from 'react';
import { getImageUrl } from '../services/tmdbService';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const posterUrl = getImageUrl(movie.poster_path, 'w500');
  const backdropUrl = getImageUrl(movie.backdrop_path, 'w780');

  return (
    <div
      className="relative flex-shrink-0 w-40 sm:w-48 md:w-56 cursor-pointer transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.4)' : 'scale(1)',
        zIndex: isHovered ? 50 : 1,
      }}
    >
      <div className="relative rounded-md overflow-hidden bg-gray-800">
        <img
          src={posterUrl || '/placeholder-movie.jpg'}
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-netflix-dark rounded-md overflow-hidden">
            <img
              src={backdropUrl || posterUrl}
              alt={movie.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-white text-sm font-semibold truncate mb-1">
                {movie.title}
              </h3>
              <div className="flex items-center space-x-2 text-xs text-gray-300 mb-2">
                <span className="text-green-400">
                  {Math.round(movie.vote_average * 10)}% Match
                </span>
                <span>{movie.release_date?.split('-')[0]}</span>
              </div>
              <p className="text-gray-400 text-xs line-clamp-2">
                {movie.overview}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
                <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors ml-auto">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
