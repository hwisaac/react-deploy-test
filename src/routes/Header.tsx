import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>GoHome</Link>
        </li>
        <li>
          <Link to={"/about"}>GoAbout</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
