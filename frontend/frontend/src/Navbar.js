import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="nav">
        <ul>
          <CustomLink to="/"> HOME </CustomLink>
          <CustomLink to="/dashboard">DASHBOARD</CustomLink>
          <CustomLink to="/aboutus">ABOUT US</CustomLink>
          <CustomLink to="/profile">PROFILE</CustomLink>
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