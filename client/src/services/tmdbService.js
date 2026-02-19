import axios from 'axios';

const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || '';
const TMDB_IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p/original';

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY
  }
});

export const getImageUrl = (path, size = 'original') => {
  if (!path) return null;
  const base = TMDB_IMAGE_BASE_URL.replace(/original$/, size);
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdbApi.get('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchMoviesByGenre = async (genreId, page = 1) => {
  try {
    const response = await tmdbApi.get('/discover/movie', {
      params: {
        with_genres: genreId,
        page,
        sort_by: 'popularity.desc'
      }
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies for genre ${genreId}:`, error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for ${movieId}:`, error);
    throw error;
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await tmdbApi.get('/search/movie', {
      params: {
        query,
        page
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const GENRES = {
  ACTION: { id: 28, name: 'Action' },
  COMEDY: { id: 35, name: 'Comedy' },
  HORROR: { id: 27, name: 'Horror' },
  ROMANCE: { id: 10749, name: 'Romance' },
  DOCUMENTARY: { id: 99, name: 'Documentary' },
  DRAMA: { id: 18, name: 'Drama' },
  SCIENCE_FICTION: { id: 878, name: 'Science Fiction' },
  THRILLER: { id: 53, name: 'Thriller' }
};

export default tmdbApi;
