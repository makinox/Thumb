import {FaWikipediaW} from 'react-icons/fa';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {Container} from './styles';
import EntityI from '../../utils/interfaces/Entity';

export default function HeroCard({entity}: {entity: EntityI}) {
  return (
    <Container>
      <section>
        <span>What's your opinion on</span>
        <h2>{entity.name}</h2>
        <p>{entity.description}</p>
        <div>
          <FaWikipediaW />
          <a href={entity.url}>More information</a>
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
