import styled from 'styled-components';

export const HeaderNav = styled.header`
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  display: flex;

  & div:first-of-type {
    @media (max-width: 700px) {
      display: none !important;
    }
  }

  & svg {
    cursor: pointer;
    color: var(--BackgroundPrimary);
    margin-left: 50px;
  }

  & div:first-of-type span {
    color: var(--BackgroundPrimary);
    font-size: 30px;
    font-weight: 500;
  }

  & div:last-of-type a {
    color: var(--BackgroundPrimary);
    text-decoration: none;
    margin-left: 50px;
    font-weight: 400;
    cursor: pointer;
    font-size: 17px;
  }

  & div:first-of-type,
  & div:last-of-type {
    align-items: center;
    display: flex;
  }
`;
