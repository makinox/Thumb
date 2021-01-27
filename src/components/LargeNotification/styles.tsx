import styled from 'styled-components';

export const Container = styled.article`
  background-color: rgb(235, 235, 235);
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  display: flex;
  padding: 20px;

  & div:nth-child(2) {
    margin: 0 15px;
  }

  & h3 {
    color: rgb(83, 83, 83);
    width: max-content;
    font-size: 20px;
    margin: 0;
  }

  & h4 {
    font-size: 30px;
    color: #000;
    margin: 0;
  }

  & p {
    color: rgb(83, 83, 83);
    font-size: 15px;
  }
`;
