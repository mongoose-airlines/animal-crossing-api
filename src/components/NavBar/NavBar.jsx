import { NavLink } from "react-router-dom"
const NavBar = (props) => {

  const handleSubmitSearch = evt => {
    evt.preventDefault()
    props.handleSubmitSearch()
  }

  return (
    <>
      <nav className="container-fluid navbar navbar-expand-sm">
        <div className="container-fluid">
        {props.user ?
            <>
              <NavLink className="nav-link" onClick={props.handleLogout} to="#">Log Out</NavLink>
              <NavLink className="nav-link" to="/changePassword">Change Password</NavLink>
            </>
            :
            <>
              <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
              <NavLink className="nav-link" to="/login">Log In</NavLink>
            </>
          }
          <NavLink className="navbar-brand" to="/">{props.user?.name}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">...</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="#">My Stuff</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">?????</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Collections
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="/fishes">Fish</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/fossils">Fossils</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/villagers">Villagers</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/songs">Songs</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex" onSubmit={handleSubmitSearch}>
            <input className="form-control me-2" onChange={props.handleSetSearch} value={props.search.query} name="query" type="search" placeholder="Search" aria-label="Search" />
          </form>    
        </div>
      </nav>
    </>
  );
}
 
export default NavBar;