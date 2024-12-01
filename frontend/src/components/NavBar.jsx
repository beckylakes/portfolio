import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>/becky.</h1>
      <nav className="NavLinks">
        <HashLink to="#about" smooth className="EachNavBarLink">
          ABOUT
        </HashLink>
        <HashLink to="#work" smooth className="EachNavBarLink">
          PROJECTS
        </HashLink>
        <HashLink to="#contact" smooth className="EachNavBarLink">
          CONTACT
        </HashLink>
      </nav>
    </div>
  );
};

export default NavBar;