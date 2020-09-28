import React, { useRef, useState } from 'react';

import { BsArrowLeft } from 'react-icons/bs';

import api from '../../service/api';
import Card from '../../components/Card';
import movieImg from '../../assets/images/movie.svg';

import { Container, Image, Content, Form, Button } from './styles';

export default function Home() {
  const inputRef = useRef(null);
  const [error, setError] = useState(true);
  const [movie, setMovie] = useState(null);

  function handleExit() {
    setMovie(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!inputRef.current.value) {
        inputRef.current.focus();
        setError('Preencha o campo!');
      } else {
        const { data } = await api.get('/', {
          params: {
            t: inputRef.current.value,
          },
        });

        if (data?.Error) {
          inputRef.current.value = '';
          inputRef.current.focus();
          setError('Filme não encontrado!');
        } else {
          setMovie(data);
        }
      }

      // eslint-disable-next-line no-empty
    } catch {}
  }

  return (
    <Container>
      <h1>
        <span>IMDB</span>.io
      </h1>
      <Image src={movieImg} alt="People movie" />
      <Content>
        {movie ? (
          <>
            <BsArrowLeft onClick={handleExit} size={24} className="exit" />
            <Card dice={movie} />
          </>
        ) : (
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Saiba mais sobre sua serie/filme</legend>
              <input ref={inputRef} onKeyPress={() => setError('')} />
              {error && <span>{error}</span>}
            </fieldset>
            <Button type="submit">Pesquisar</Button>
          </Form>
        )}
      </Content>
    </Container>
  );
}
