import {HeaderNav} from './styled';
import {FaSearch} from 'react-icons/fa';

export default function Navbar() {
  return (
    <HeaderNav>
      <div>
        <span>Rule of Thumb</span>
      </div>
      <div>
        <span>Past Trials</span>
        <span>How It Works</span>
        <span>Log In / Sign Up</span>
        <FaSearch />
      </div>
    </HeaderNav>
  );
}
