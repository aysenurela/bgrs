import {fetchPeoplePending, fetchPeopleSuccess, fetchPeopleError, apiCompleted} from './actions';

let fetchedPeople = [];

function fetchPeople(pageNum) {
  let url = `https://swapi.dev/api/people/?page=${pageNum}`;

  return async dispatch => {
    dispatch(fetchPeoplePending());
      try {
        const response = await fetch(url, {
          method: 'GET',   
          headers: { 'Content-Type': 'application/json', }
        });
        const data = await response.json();
        fetchedPeople.push(...data.results);
        if (!data.next) dispatch(apiCompleted())
      } 
      catch (error) {
        dispatch(fetchPeopleError(error));
      }

    dispatch(fetchPeopleSuccess(fetchedPeople));
  }
}

export default fetchPeople;