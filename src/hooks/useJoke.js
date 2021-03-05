import styled from '@emotion/styled';


const JokeContainer = styled.div`
  background: #fff;
  width: 640px;
  font-family: 'DotGothic16', sans-serif;
  font-weight: bold;
  font-size: 25px;
  border-radius: 10px;
  position: relative;
  padding: 20px;
  /* border: 1px solid red; */
  margin-bottom: 23px;
  margin-left: auto;
  min-height: 208px;

  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 35px;
    height: 35px;
    bottom: -17px;
    right: 30%;
    transform: rotate(45deg)
  }

  .mt {
    margin-top: 15px;
  }

`

const useJoke = ( setup, punchline ) => {

  const Joke = () => {
    return (
      
      <JokeContainer>
        <p>{setup}</p>
        <p className='mt'>~~~&#62; {punchline}</p>
      </JokeContainer>
    )
  }

  return [ Joke ];

}

export default useJoke;

