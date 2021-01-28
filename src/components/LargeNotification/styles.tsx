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
    width: max-content;
    color: #333333;
    font-weight: 500;
    font-size: 18px;
    margin: 0;
  }

  & h4 {
    color: #333333;
    font-weight: 600;
    font-size: 30px;
    margin: 0;
  }

  & p {
    color: #333333;
    font-size: 15px;
  }
`;
