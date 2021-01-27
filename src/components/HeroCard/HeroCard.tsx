import {FaWikipediaW} from 'react-icons/fa';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {Container} from './styles';

export default function HeroCard() {
  return (
    <Container>
      <section>
        <span>What's your opinion on</span>
        <h2>Pope francis?</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est mollitia at quibusdam iure repellendus,</p>
        <div>
          <FaWikipediaW />
          <a href="https://es.wikipedia.org/">More information</a>
        </div>
        <h5>What's Your Veredict?</h5>
      </section>
      <section>
        <div>
          <AiFillLike />
        </div>
        <div>
          <AiFillDislike />
        </div>
      </section>
    </Container>
  );
}
