import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {VoteBlock, VoteGreen, VoteYellow} from './styles';

export default function VoteBadge({type, onClick}: {type: 'like' | 'dislike' | 'now' | 'again'; onClick?: () => void}) {
  switch (type) {
    case 'like':
      return (
        <VoteGreen data-cy="vote-badge-like" onClick={onClick}>
          <AiFillLike />
        </VoteGreen>
      );
    case 'dislike':
      return (
        <VoteYellow data-cy="vote-badge-dislike" onClick={onClick}>
          <AiFillDislike />
        </VoteYellow>
      );
    case 'now':
      return (
        <VoteBlock data-cy="vote-badge-now" onClick={onClick}>
          <span>Vote now</span>
        </VoteBlock>
      );

    case 'again':
      return (
        <VoteBlock data-cy="vote-badge-again" onClick={onClick}>
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
