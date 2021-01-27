import styled from 'styled-components';

export const FooterContainer = styled.footer`
  justify-content: space-between;
  border-top: 2px dotted grey;
  margin-bottom: 30px;
  padding-top: 20px;
  display: flex;

  & div {
    align-items: center;
    display: flex;
  }

  & span {
    margin-right: 20px;
    cursor: pointer;
    font-size: 14px;
    color: grey;
  }

  & svg {
    margin-right: 20px;
    cursor: pointer;
    font-size: 30px;
  }
`;
