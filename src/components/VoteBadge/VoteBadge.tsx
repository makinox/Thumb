import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {VoteBlock, VoteGreen, VoteYellow} from './styles';

export default function VoteBadge({type}: {type: 'like' | 'dislike' | 'now' | 'again'}) {
  switch (type) {
    case 'like':
      return (
        <VoteGreen>
          <AiFillLike />
        </VoteGreen>
      );
    case 'dislike':
      return (
        <VoteYellow>
          <AiFillDislike />
        </VoteYellow>
      );
    case 'now':
      return (
        <VoteBlock>
          <span>Vote now</span>
        </VoteBlock>
      );

    case 'again':
      return (
        <VoteBlock>
          <span>Vote again</span>
        </VoteBlock>
      );

    default:
      return (
        <div>
          <span>Vote now</span>
        </div>
      );
  }
}
