import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../services/tmdbService';

const HeroBanner = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!movie) {
    return (
      <div className="relative h-[70vh] md:h-[80vh] bg-netflix-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
      </div>
    );
  }

  const backdropUrl = getImageUrl(movie.backdrop_path, 'original');

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={backdropUrl}
          alt={movie.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative h-full flex items-end pb-16 md:pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {movie.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm md:text-base mb-4">
            <span className="text-green-400 font-semibold">
              {Math.round(movie.vote_average * 10)}% Match
            </span>
            <span className="text-gray-300">{movie.release_date?.split('-')[0]}</span>
            <span className="border border-gray-500 px-2 py-0.5 text-xs">HD</span>
          </div>

          <p className="text-white text-base md:text-lg mb-6 line-clamp-3 drop-shadow-md">
            {movie.overview}
          </p>

          <div className="flex items-center space-x-4">
            <button className="netflix-btn flex items-center space-x-2 text-base">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Play</span>
            </button>
            
            <button className="netflix-btn-secondary flex items-center space-x-2 text-base">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
