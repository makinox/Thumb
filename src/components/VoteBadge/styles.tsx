import styled, {css} from 'styled-components';

const defaultBadge = css`
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
  padding: 5px 5px;
  cursor: pointer;

  &:active {
    border: #fff solid 2px;
  }
`;

export const VoteGreen = styled.div`
  background-color: rgb(91, 185, 180);
  ${defaultBadge}

  & svg {
    font-size: 20px;
  }
`;

export const VoteYellow = styled.div`
  background-color: rgb(242, 180, 78);
  ${defaultBadge}

  & svg {
    font-size: 20px;
  }
`;

export const VoteBlock = styled.div`
  background-color: transparent;
  border: 1px solid #fff;
  display: inline-flex;
  padding: 8px 15px;
  cursor: pointer;
`;
