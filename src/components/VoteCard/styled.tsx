import styled from 'styled-components';

export const CardContainer = styled.article`
  background-image: url('https://picsum.photos/id/1033/400/400');
  color: var(--BackgroundPrimary);
`;

export const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 30px;
  margin-top: 120px;
`;

export const CardHeader = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;

  & h3 {
    font-size: 33px;
    margin: 0;
  }
`;

export const CardSubtitles = styled.div`
  margin: 0 35px;
  margin-bottom: 12px;

  & span:first-of-type {
    font-weight: 600;
    font-size: 14px;
  }

  & span:last-of-type {
    margin-left: 5px;
    font-size: 14px;
  }
`;

export const CardDescription = styled.div`
  margin: 0 35px;
  margin-bottom: 12px;

  & p {
    font-size: 15px;
    margin: 0;
  }
`;
