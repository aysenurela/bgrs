import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../store/reducer';
import { Card } from 'react-bootstrap';

function LastMovie(props) {

  const [lastMovie, setLastMovie] = useState({release_date: "0"});

  function convertDatetoNum(str) {
    return parseInt(str.split("-").join(""))
  }

  useEffect(() => {
    props.movies.forEach(movie => {
      const movieReleaseDate = convertDatetoNum(movie.release_date);
      const lastMovieReleaseDate = convertDatetoNum(lastMovie.release_date);
      if (movieReleaseDate > lastMovieReleaseDate) {
        setLastMovie(movie)
      }
    })
  })

  if (lastMovie.title) {
    return (
    <Card bg="light">
      <Card.Body>
        <Card.Title>LAST MOVIE </Card.Title>
        {lastMovie.title + " - " + (lastMovie.release_date).slice(0,4)}
      </Card.Body>
    </Card>)
  } else {
    return ''
  }
}

const mapStateToProps = state => ({
  movies: getMovies(state),
})

export default connect(
  mapStateToProps,
)(LastMovie);