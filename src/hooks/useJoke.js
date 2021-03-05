const useJoke = ( setup, punchline ) => {

  const Joke = () => {
    return (
      <>
        <p>{setup}</p>
        <p>{punchline}</p>
      </>
    )
  }

  return [ Joke ];

}

export default useJoke;

