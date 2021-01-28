import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import {VoteGreen, VoteYellow} from './styles';

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
        <div>
          <span>Vote now</span>
        </div>
      );

    case 'again':
      return (
        <div>
          <span>Vote again</span>
        </div>
      );

    default:
      return (
        <div>
          <span>Vote now</span>
        </div>
      );
  }
}
