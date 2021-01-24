import {getMoviesError, getMovies, getMoviesPending} from '../store/reducer';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import Spinner from './Spinner';
import LastMovie from './LastMovie';
import '../styles/movies.css'

function Movies(props) {

  if (props.pendingMovies) {
    return <Spinner />
  } 
  return (
    <div className="Movies">
      <h5>List of Movies:</h5>
      {props.movies ? (
      <div>
        <div className="cards-container">
          {props.movies.map((movie, ind) => {
            return <Card style={{ width: '10rem' }} key={ind}>{movie.title}</Card>        
          })}
        </div>
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