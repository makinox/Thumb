import {VoteBadge} from '..';
import {CardContainer, CardDescription, CardHeader, CardSubtitles, CardWrapper} from './styled';

export default function VoteCard() {
  return (
    <CardContainer>
      <CardWrapper>
        <CardHeader>
          <div>{true ? <VoteBadge type="like" /> : <VoteBadge type="like" />}</div>
          <h3>Person name</h3>
        </CardHeader>
        <CardSubtitles>
          <span>1 mes ago</span>
          <span>in Entertaiment</span>
        </CardSubtitles>
        <CardDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur nemo quibusdam ipsa voluptatibus quasi voluptatum
          </p>
        </CardDescription>
        <div>
          <span>Like</span>
          <span>Dislike</span>
          <span>Vote now</span>
        </div>
        <div>
          <span>60%</span>
          <span>40%</span>
        </div>
      </CardWrapper>
    </CardContainer>
  );
}
