import styled from 'styled-components';
import {BannerI} from '../components/Navbar/type';

export const Banner = styled.div<BannerI>`
  background-image: ${props => `url('${props.image}')`};
  background-repeat: no-repeat;
  background-size: cover;
`;
