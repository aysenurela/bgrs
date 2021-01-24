import {fetchPeoplePending, fetchPeopleSuccess, fetchPeopleError} from './actions';

function fetchPeople() {
  return dispatch => {
    dispatch(fetchPeoplePending());
    fetch('https://swapi.dev/api/people/', {
      method: 'GET',   
      headers: { 'Content-Type': 'application/json', }
    })
      .then(res => res.json())
      .then(res => {
        dispatch(fetchPeopleSuccess(res.results));
      })
      .catch(error => {
          dispatch(fetchPeopleError(error));
      })
  }
}

export default fetchPeople;