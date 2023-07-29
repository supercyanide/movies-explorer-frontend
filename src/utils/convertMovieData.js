import { MOVIE_URL } from './consts';

const convertMovieData = (movie) => {
  const convertedMovie = {
    // country: movie.country,
    // director: movie.director,
    // duration: movie.duration,
    year: movie['#YEAR'],
    // description: movie.description,
    image: movie['#IMG_POSTER'],
    // trailerLink: movie.trailerLink,
    name: movie['#TITLE'],
    movieId: movie['#IMDB_ID'],
  }

  return convertedMovie;
}

export { convertMovieData };