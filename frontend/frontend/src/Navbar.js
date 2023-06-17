import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useAuthentication } from "./providers/AuthProvider";

export default function Navbar(props) {
  const { profile, login, authenticated, logout } = useAuthentication();

  return (
    <nav className="nav">
      <div>
        <a href="/">
          <img className="appLogo" src="img/skinnyBlogo.png" alt="appLogo" />
        </a>
      </div>
      <ul>
        <CustomLink to="/"> HOME </CustomLink>
        {authenticated && (
          <>
            <CustomLink to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink to="/statistics">STATISTICS</CustomLink>
            <CustomLink to="/meals">MEALS</CustomLink>
            <CustomLink to="/profile">PROFILE</CustomLink>
          </>
        )}
        {authenticated ? (
          <div className="profileContainer">
            <img src={profile.picture} alt="profilePic" className="profilePic" />
            <button className="logout" onClick={logout}>
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="authButtons">
            <button onClick={login}>LOGIN</button>
          </div>
        )}
      </ul>
    </nav>
  );
}

// CustomLink component remains the same as before

// CSS code remains the same as before


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
