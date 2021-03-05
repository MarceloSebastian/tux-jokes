import axios from 'axios';
import { useEffect, useState } from 'react';
import useJoke from './hooks/useJoke';

function App() {

  
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  
  useEffect(() => {
    const hitAPI = async () => {
      const url = 'https://official-joke-api.appspot.com/jokes/programming/random';
      const reponse = await axios.get(url);
      setSetup(reponse.data[0].setup);
      setPunchline(reponse.data[0].punchline);
    }
    
    hitAPI();
  }, [])
  
  const [ Joke ] = useJoke(setup, punchline);

  return (
    <>
      <Joke />
    </>
  );
};


export default App;

