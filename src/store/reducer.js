import initialState from './initialState'

import {
  FETCH_PEOPLE_PENDING, 
  FETCH_PEOPLE_SUCCESS, 
  FETCH_PEOPLE_ERROR,
  FETCH_MOVIES_PENDING, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_ERROR,
  CLEAR_MOVIES
} from './actions';

export function reducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_PEOPLE_PENDING:
      return {
        ...state,
        pending: true,
      }

    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        pending: false,
      }

    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }

    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pendingMovies: true,
      }

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.movie],
        pendingMovies: false,
      }

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pendingMovies: false,
        errorMovies: action.error
      }

    case CLEAR_MOVIES:
      return {
        ...state,
        movies: []
      }

    default:
      return state;
  }
}

export const getPeople = state => state.characters;
export const getPeoplePending = state => state.pending;
export const getPeopleError = state => state.error;

export const getMovies = state => state.movies;
export const getMoviesPending = state => state.pendingMovies;
export const getMoviesError = state => state.errorMovies;
