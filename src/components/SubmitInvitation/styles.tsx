import styled from 'styled-components';

export const SubmitContainer = styled.article`
  background-image: url('https://picsum.photos/id/1033/1460/80');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 30px 0;

  & div {
    background-color: rgba(255, 255, 255, 0.7);
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    display: flex;
  }

  & span {
    font-size: 25px;
    font-weight: 400;
  }

  & button {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid #000;
    padding: 10px 25px;
    min-width: 190px;
    font-size: 20px;
    cursor: pointer;
  }

  & button:active {
    outline: none;
  }

  & button:focus {
    outline: none;
  }
`;
