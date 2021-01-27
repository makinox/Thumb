import styled from 'styled-components';

export const Container = styled.article`
  color: var(--BackgroundPrimary);
  flex-direction: column;
  display: inline-flex;
  max-width: 490px;
  margin: 60px 0 80px 0;

  & section:first-of-type {
    backdrop-filter: blur(30px);
    padding: 35px 25px;
  }

  & section:first-of-type span {
    font-size: 15px;
    color: var(--TextSecondary);
  }

  & section:first-of-type h2 {
    font-size: 60px;
    margin: 0;
  }

  & section:first-of-type p {
    color: var(--TextSecondary);
    font-size: 20px;
  }

  & section:first-of-type div {
    color: var(--BackgroundPrimary);
    align-items: center;
    display: flex;
  }

  & section:first-of-type div a {
    color: var(--BackgroundPrimary);
    margin-left: 4px;
  }

  & section:first-of-type h5 {
    color: var(--BackgroundPrimary);
    margin-bottom: 0;
    font-size: 20px;
  }

  & section:last-of-type {
    justify-content: space-evenly;
    align-items: center;
    display: flex;
  }

  & section:last-of-type div {
    align-items: center;
    text-align: center;
    font-size: 40px;
    cursor: pointer;
    padding: 12px 0;
    width: 100%;
  }

  & section:last-of-type div:first-of-type {
    background-color: rgba(242, 180, 78, 0.8);
  }

  & section:last-of-type div:first-of-type:active {
    background-color: rgb(242, 180, 78);
  }

  & section:last-of-type div:last-of-type {
    background-color: rgba(91, 185, 180, 0.8);
  }

  & section:last-of-type div:last-of-type:active {
    background-color: rgb(91, 185, 180);
  }
`;
