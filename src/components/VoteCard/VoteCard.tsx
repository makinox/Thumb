import {useEffect, useState} from 'react';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {VoteBadge} from '..';
import EntityI from '../../utils/interfaces/Entity';
import VoteI from '../../utils/interfaces/Votes';
import {CardContainer, CardDescription, CardHeader, CardSubtitles, CardWrapper, CardVotes, CardFooter} from './styled';

export default function VoteCard({entity, HandleCase}: {entity: EntityI; HandleCase: (id: EntityI['id'], type: VoteI['vote']) => void}) {
  const [voted, useVoted] = useState(false);
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
  }, [entity.votes, entity.votes?.length]);

  function resolver({arr, type}: {arr: Array<VoteI>; type: VoteI['vote']}): number {
    const aux = arr.reduce((total, el) => (el?.vote === type ? total + 1 : total), 0);
    const result = Math.floor((aux / arr.length) * 100);
    if (isNaN(result)) {
      return 50;
    } else if (result === Infinity) {
      return 0;
    } else {
      return result;
    }
  }

  function VoteAgain(param: boolean) {
    useVoted(param);
  }
  return (
    <CardContainer>
      <CardWrapper>
        <CardHeader>
          <div>
            {likes === dislikes ? <VoteBadge type="like" /> : likes > dislikes ? <VoteBadge type="like" /> : <VoteBadge type="dislike" />}
          </div>
          <h3>{entity.name}</h3>
        </CardHeader>
        <CardSubtitles>
          <span>{entity.time}</span>
          <span>in {entity.category}</span>
        </CardSubtitles>
        <CardDescription>
          <p>{entity.description}</p>
        </CardDescription>
        <CardVotes data-cy="vote-card-votes">
          {voted ? (
            <VoteBadge type="again" onClick={() => VoteAgain(false)} />
          ) : (
            <>
              <VoteBadge
                type="like"
                onClick={() => {
                  HandleCase(entity.id, 'Like');
                  VoteAgain(true);
                }}
              />
              <VoteBadge
                type="dislike"
                onClick={() => {
                  HandleCase(entity.id, 'Dislike');
                  VoteAgain(true);
                }}
              />
              <VoteBadge type="now" />
            </>
          )}
        </CardVotes>
        <CardFooter like={likes > 0 ? likes : 20} dislike={dislikes > 0 ? dislikes : 20} data-cy="vote-card-footer">
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
