import "./styles.scss";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
