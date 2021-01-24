import {fetchPeoplePending, fetchPeopleSuccess, fetchPeopleError} from './actions';
import { convertHttps } from '../helper';

let fetchedPeople = [];
let url = 'https://swapi.dev/api/people/';

function fetchPeople() {
  return async dispatch => {
    dispatch(fetchPeoplePending());
    do {
      try {
        const response = await fetch(url, {
          method: 'GET',   
          headers: { 'Content-Type': 'application/json', }
        });
        const data = await response.json();
        fetchedPeople.push(...data.results);
        url = data.next ? convertHttps(data.next) : '';
      } 
      catch (error) {
        dispatch(fetchPeopleError(error));
      }
    } while (url)

    dispatch(fetchPeopleSuccess(fetchedPeople));
  }
}

export default fetchPeople;