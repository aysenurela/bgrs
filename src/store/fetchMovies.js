import {fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError, clearMovies} from './actions';

function fetchMovies(api) {
  return dispatch => {
    dispatch(clearMovies());
    dispatch(fetchMoviesPending());
    fetch(api, {
      method: 'GET',   
      headers: { 'Content-Type': 'application/json', }
    })
      .then(res => res.json())
      .then(res => {
        dispatch(fetchMoviesSuccess(res));
      })
      .catch(error => {
          dispatch(fetchMoviesError(error));
      })
  }
}

export default fetchMovies;