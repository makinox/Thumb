import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {VoteBlock, VoteGreen, VoteYellow} from './styles';

export default function VoteBadge({type, onClick}: {type: 'like' | 'dislike' | 'now' | 'again'; onClick?: () => void}) {
  switch (type) {
    case 'like':
      return (
        <VoteGreen onClick={onClick}>
          <AiFillLike />
        </VoteGreen>
      );
    case 'dislike':
      return (
        <VoteYellow onClick={onClick}>
          <AiFillDislike />
        </VoteYellow>
      );
    case 'now':
      return (
        <VoteBlock onClick={onClick}>
          <span>Vote now</span>
        </VoteBlock>
      );

    case 'again':
      return (
        <VoteBlock onClick={onClick}>
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
