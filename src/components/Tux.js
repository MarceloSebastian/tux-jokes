import styled from '@emotion/styled';
import image from '../tux.png';

const Container = styled.div`
  width: 800px;
  display: flex;

  h1 {
    max-width: 50%;
    font-family: 'Cinzel', serif;
    color: #fff;
    text-shadow: 2px 2px #000;
    font-size: 60px;
    text-align: center;
    margin-top: 20px;

    span {
      display: block;
      font-size: 15px;
    }
  }

  figure {
    width: 50%;
  }
  
  img {
    cursor: pointer;
    width: 80%;
    float: right;
  }
`;


const Tux = ({ setCharge }) => {
  return ( 
    <Container>
      <h1>Tux Telling Some Programing Jokes <span>( Click Him )</span></h1>
      <figure>
        <img src={image} 
          alt="tux"
          onClick={() => setCharge(true)}
        />
      </figure>
    </Container>
   );
}
 
export default Tux;