import styled, {css} from 'styled-components';

const defaultBadge = css`
  align-items: center;
  margin-right: 5px;
  padding: 5px 4px;
  display: flex;
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
