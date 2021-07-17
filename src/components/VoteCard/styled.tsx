import styled from 'styled-components';
import {CardFooterI} from './type';

export const CardContainer = styled.article<{image?: string}>`
  background-image: ${props => (props.image ? `url(${props.image})` : `url('https://picsum.photos/id/1033/400/400')`)};
  color: var(--BackgroundPrimary);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0.05) 100%);
  padding-top: 30px;
  margin-top: 180px;
`;

export const CardHeader = styled.div`
  justify-content: flex-start;
  align-items: flex-end;
  margin-right: 30px;
  height: 110px;
  display: flex;

  & div {
    margin-right: 4px;
    margin-bottom: 5px;
  }

  & h3 {
    font-size: 46px;
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
    color: #ccc;
    font-size: 15px;
    margin: 0;
  }
`;

export const CardVotes = styled.div`
  margin: 0 35px;
  align-items: center;
  display: flex;
`;

export const CardFooter = styled.div<CardFooterI>`
  margin-top: 35px;
  display: flex;

  & div {
    align-items: center;
    font-size: 26px;
    display: flex;
  }

  & div:first-of-type {
    background-color: rgba(91, 185, 180, 0.8);
    width: ${props => props.like}%;
    padding: 10px;
  }

  & div:last-of-type {
    background-color: rgba(242, 180, 78, 0.8);
    width: ${props => props.dislike}%;
    justify-content: flex-end;
    padding: 10px;
  }
`;
