import { Container, Row, Col } from 'react-bootstrap';
import {getPeopleError, getPeople, getPeoplePending, isApiCompleted} from '../store/reducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchPeopleAction from '../store/fetchPeople';
import fetchMoviesAction from '../store/fetchMovies';
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Movies from './Movies';
import Spinner from './Spinner';
import { convertHttps } from '../helper';
import '../styles/character.css'

function Character(props) {

  const { fetchPeople = () => {} } = props

  const [character, setCharacter] = useState({});
  const [pageNum, setPageNum] = useState(1);

  function setCharacterDetails(character) {
    setCharacter(character)

    const filmAriUrls = character.films.map(film => {
      return convertHttps(film)
    })

    filmAriUrls.forEach(filmApiUrl => {
      props.fetchMovies(filmApiUrl)
    })
  }

  function scrollHandler(e) {
    if (e.target.scrollHeight - e.target.scrollTop < 225) {
      let newPage = pageNum + 1
      if (!props.apiCompleted) setPageNum(newPage);
      return
    }
  }

  useEffect(() => {
    fetchPeople(pageNum);
  }, [fetchPeople, pageNum])

  if (props.pending && !props.characters.length) {
    return <Spinner />
  } 
  return (
    <div className="Character">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Dropdown className="m-4">
              <h4>Character:</h4>
              <Dropdown.Toggle id="dropdown-basic">
                {character.name || "Select"}
              </Dropdown.Toggle>
              <Dropdown.Menu onScroll={scrollHandler}>
                {props.pending && props.characters.length ? <Spinner /> :
                  props.characters.map((character, ind) => {
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
  pending: getPeoplePending(state),
  isApiCompleted: isApiCompleted(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPeople: fetchPeopleAction,
  fetchMovies: fetchMoviesAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);