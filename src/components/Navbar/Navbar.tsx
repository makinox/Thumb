import {HeaderNav} from './styled';
import {FaSearch} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <HeaderNav data-cy="navbar">
      <div>
        <span>Rule of Thumb</span>
      </div>
      <div>
        <NavLink to="/PastTrials">Past Trials</NavLink>
        <NavLink to="/HowItWorks">How It Works</NavLink>
        <NavLink to="/LogIn">Log In / Sign Up</NavLink>
        <FaSearch />
      </div>
    </HeaderNav>
  );
}
