import styled from 'styled-components';
import {BannerI} from '../components/Navbar/type';

export const Banner = styled.div<BannerI>`
  background-image: ${props => `url('${props.image}')`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerFooter = styled.div`
  align-items: center;
  display: flex;

  & span {
    vertical-align: center;
    line-height: 46px;
    height: 46px;
  }

  & span:first-of-type {
    background-color: rgba(0, 0, 0, 0.3);
    padding-right: 10px;
    text-align: end;
    font-size: 13px;
    color: #fff;
    width: 30%;
  }

  & span:last-of-type {
    background-color: rgba(255, 255, 255, 0.6);
    padding-left: 10px;
    text-align: start;
    font-size: 32px;
    width: 70%;
  }
`;

export const VoteHeader = styled.div`
  & h2 {
    font-size: 30px;
    font-weight: 300;
    margin: 0;
  }
`;

export const VoteSection = styled.section`
  grid-template-columns: minmax(auto, 400px) minmax(auto, 400px);
  justify-content: space-between;
  display: grid;
`;
