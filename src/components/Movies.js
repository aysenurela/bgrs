import {getMoviesError, getMovies, getMoviesPending} from '../store/reducer';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import Spinner from './Spinner';
import LastMovie from './LastMovie'

function Movies(props) {

  if (props.pendingMovies) {
    return <Spinner />
  } 
  return (
    <div>
      <h5>List of Movies:</h5>
      {props.movies ? (
      <div className="Movies">
        {props.movies.map((movie, ind) => {
          return <Card key={ind}>{movie.title}</Card>        
        })}
        <LastMovie />
      </div>) : ''}
    </div>
  );
}

const mapStateToProps = state => ({
  errorMovies: getMoviesError(state),
  movies: getMovies(state),
  pendingMovies: getMoviesPending(state)
})

export default connect(
  mapStateToProps,
)(Movies);