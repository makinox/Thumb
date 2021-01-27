import {FooterContainer} from './styles';
import {GrFacebook, GrTwitter} from 'react-icons/gr';

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <span>Terms and conditions</span>
        <span>Privacy Policy</span>
        <span>Contact Us</span>
      </div>
      <div>
        <span>Follow us</span>
        <GrFacebook />
        <GrTwitter />
      </div>
    </FooterContainer>
  );
}
