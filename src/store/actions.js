export const FETCH_PEOPLE_PENDING = 'FETCH_PEOPLE_PENDING';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR';

export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';

export const API_COMPLETED = 'API_COMPLETED';

export function fetchPeoplePending() {
    return {
        type: FETCH_PEOPLE_PENDING
    }
}

export function fetchPeopleSuccess(payload) {
    return {
        type: FETCH_PEOPLE_SUCCESS,
        characters: payload
    }
}

export function fetchPeopleError(error) {
    return {
        type: FETCH_PEOPLE_ERROR,
        error: error
    }
}

export function fetchMoviesPending() {
    return {
        type: FETCH_MOVIES_PENDING
    }
}

export function fetchMoviesSuccess(payload) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        movie: payload
    }
}

export function fetchMoviesError(error) {
    return {
        type: FETCH_MOVIES_ERROR,
        errorMovies: error
    }
}

export function clearMovies() {
    return {
        type: CLEAR_MOVIES
    }
}

export function apiCompleted() {
    return {
        type: API_COMPLETED
    }
}