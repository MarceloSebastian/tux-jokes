import axios from 'axios';
import { useEffect, useState } from 'react';
import useJoke from './hooks/useJoke';
import styled from '@emotion/styled';
import Tux from './components/Tux';

const Container = styled.div`
  width: fit-content;
  margin: 5rem auto;
`


function App() {
  
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [charge, setCharge] = useState(true);
  
  useEffect(() => {

    if (!charge) return null;

    const hitAPI = async () => {
      const url = 'https://official-joke-api.appspot.com/jokes/programming/random';
      const reponse = await axios.get(url);
      setSetup(reponse.data[0].setup);
      setPunchline(reponse.data[0].punchline);
      setCharge(false);
    }
    
    hitAPI();
  }, [charge])
  
  const [ Joke ] = useJoke(setup, punchline);

  return (
    <Container>
      <Joke />
      <Tux setCharge={setCharge} />
    </Container>
  );
};


export default App;

