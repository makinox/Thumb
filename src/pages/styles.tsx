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
