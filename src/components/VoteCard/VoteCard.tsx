import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {VoteBadge} from '..';
import {CardContainer, CardDescription, CardHeader, CardSubtitles, CardWrapper, CardVotes, CardFooter} from './styled';

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
        <CardVotes>
          <VoteBadge type="like" />
          <VoteBadge type="dislike" />
          <VoteBadge type="now" />
        </CardVotes>
        <CardFooter like={60} dislike={40}>
          <div>
            <AiFillLike />
            <span>60%</span>
          </div>
          <div>
            <span>40%</span>
            <AiFillDislike />
          </div>
        </CardFooter>
      </CardWrapper>
    </CardContainer>
  );
}
