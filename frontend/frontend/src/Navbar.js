import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {useAuthentication} from "./providers/AuthProvider";

export default function Navbar(props) {

    const {login, authenticated, logout} = useAuthentication();

    return (
      <nav className="nav">
        <ul>
          <CustomLink to="/"> HOME </CustomLink>
            {
                authenticated &&
                <>
                    <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                    <CustomLink to="/aboutus">ABOUT US</CustomLink>
                    <CustomLink to="/profile">PROFILE</CustomLink>
                </>
            }
            {
                !authenticated ?
                    <button onClick={login}>LOGIN</button>
                    :
                    <button onClick={logout}>LOGOUT</button>
            }
        </ul>
      </nav>
    )
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
    }