import { MOVIE_URL } from './consts';

const convertMovieData = (movie) => {
  const convertedMovie = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `${MOVIE_URL}${movie.image.url}`,
    trailerLink: movie.trailerLink,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    thumbnail: `${MOVIE_URL}${movie.image.url}`,
    movieId: `${movie.id}`,
  }

  return convertedMovie;
}

export { convertMovieData };