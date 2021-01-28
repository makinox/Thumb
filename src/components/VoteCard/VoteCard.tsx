import {useEffect, useState} from 'react';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {VoteBadge} from '..';
import EntityI from '../../utils/interfaces/Entity';
import VoteI from '../../utils/interfaces/Votes';
import {CardContainer, CardDescription, CardHeader, CardSubtitles, CardWrapper, CardVotes, CardFooter} from './styled';

export default function VoteCard({entity}: {entity: EntityI}) {
  const [likes, useLikes] = useState(50);
  const [dislikes, useDislikes] = useState(50);

  useEffect(() => {
    function UpdateLikes(): void {
      const result = resolver({arr: entity.votes || [], type: 'Like'});
      useLikes(result);
    }

    function UpdateDislike(): void {
      const result = resolver({arr: entity.votes || [], type: 'Dislike'});
      useDislikes(result);
    }

    UpdateLikes();
    UpdateDislike();
  }, [entity.votes]);

  function resolver({arr, type}: {arr: Array<VoteI>; type: VoteI['vote']}): number {
    return ((arr.length || 1) / (arr.reduce((total, el) => (el?.vote === type ? total + 1 : total), 0) || 2)) * 100;
  }
  return (
    <CardContainer>
      <CardWrapper>
        <CardHeader>
          <div>{true ? <VoteBadge type="like" /> : <VoteBadge type="like" />}</div>
          <h3>{entity.name}</h3>
        </CardHeader>
        <CardSubtitles>
          <span>{entity.time}</span>
          <span>in {entity.category}</span>
        </CardSubtitles>
        <CardDescription>
          <p>{entity.description}</p>
        </CardDescription>
        <CardVotes>
          <VoteBadge type="like" />
          <VoteBadge type="dislike" />
          <VoteBadge type="now" />
        </CardVotes>
        <CardFooter like={likes} dislike={dislikes}>
          <div>
            <AiFillLike />
            <span>{likes}%</span>
          </div>
          <div>
            <span>{dislikes}%</span>
            <AiFillDislike />
          </div>
        </CardFooter>
      </CardWrapper>
    </CardContainer>
  );
}
