import {FooterContainer} from './styles';
import {GrFacebook, GrTwitter} from 'react-icons/gr';
import {NavLink} from 'react-router-dom';

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <NavLink to="/TermAndConditions">Terms and conditions</NavLink>
        <NavLink to="/PrivacyPolicy">Privacy Policy</NavLink>
        <NavLink to="/ContactUs">Contact Us</NavLink>
      </div>
      <div>
        <span>Follow us</span>
        <GrFacebook />
        <GrTwitter />
      </div>
    </FooterContainer>
  );
}
