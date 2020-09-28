import React from 'react';
import PropTypes from 'prop-types';

import { AiFillStar } from 'react-icons/ai';

import { Wrapper, Description } from './styles';

export default function Card({ dice }) {
  const {
    Title,
    Poster,
    imdbRating,
    imdbVotes,
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Plot,
    Language,
    Production,
  } = dice;

  return (
    <Wrapper>
      <img src={Poster} alt={Title} />
      <Description>
        <section>
          <h2>{Title}</h2>
          <div>
            <span>
              <AiFillStar size={24} color="#FFD868" /> {imdbRating}
              <p>/10</p>
            </span>
            <span>{imdbVotes}</span>
          </div>
        </section>
        <article>
          <p>
            <span>Gênero:</span> {Genre}
          </p>
          <p>
            <span>Diretor:</span> {Director}
          </p>
          <p>
            <span>País:</span> {Country}
          </p>
          <p>
            <span>Atores:</span> {Actors}
          </p>
          <p>
            <span>Língua:</span> {Language}
          </p>
          <p>
            <span>Prêmios:</span> {Awards}
          </p>
          <p>
            <span>Enredo:</span> {Plot}
          </p>
          <p>
            <span>Produção:</span> {Production}
          </p>
        </article>
      </Description>
    </Wrapper>
  );
}

Card.propTypes = {
  dice: PropTypes.shape({
    Title: PropTypes.string,
    Actors: PropTypes.string,
    Awards: PropTypes.string,
    Country: PropTypes.string,
    Director: PropTypes.string,
    Genre: PropTypes.string,
    Poster: PropTypes.string,
    Plot: PropTypes.string,
    Language: PropTypes.string,
    Production: PropTypes.string,
    imdbRating: PropTypes.string,
    imdbVotes: PropTypes.string,
  }),
};

Card.defaultProps = {
  dice: {},
};
