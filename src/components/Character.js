import { Container, Row, Col } from 'react-bootstrap';
import {getPeopleError, getPeople, getPeoplePending} from '../store/reducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchPeopleAction from '../store/fetchPeople';
import fetchMoviesAction from '../store/fetchMovies';
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Movies from './Movies';
import Spinner from './Spinner'

function Character(props) {

  const [character, setCharacter] = useState({});

  function setCharacterDetails(character) {
    setCharacter(character)

    const filmAriUrls = character.films.map(film => {
      return convertHttps(film)
    })

    filmAriUrls.forEach(filmApiUrl => {
      props.fetchMovies(filmApiUrl)
    })
  }

  function convertHttps(str) {
    return str.slice(0, 4) + 's' + str.slice(4)
  }

  useEffect(() => {
    props.fetchPeople();
  }, [])

  if (props.pending) {
    return <Spinner />
  } 
  return (
    <div className="Character">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Dropdown>
              <h4>Character:</h4>
              <Dropdown.Toggle id="dropdown-basic">
                {character.name || "Select"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {props.characters.map((character, ind) => {
                    return <Dropdown.Item key={ind} onClick={setCharacterDetails.bind(this, character)}>{character.name}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Movies />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  error: getPeopleError(state),
  characters: getPeople(state),
  pending: getPeoplePending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPeople: fetchPeopleAction,
  fetchMovies: fetchMoviesAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);