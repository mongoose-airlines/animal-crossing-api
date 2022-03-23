
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
              <a className="nav-link" onClick={props.handleLogout} href="#">Log Out</a>
              <a className="nav-link" href="/changePassword">Change Password</a>
            </>
            :
            <>
              <a className="nav-link" href="/signup">Sign Up</a>
              <a className="nav-link" href="/login">Log In</a>
            </>
          }
          <a className="navbar-brand" href="/">{props.user?.name}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">...</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">My Stuff</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">?????</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Collections
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/fishes">Fish</a></li>
                  <li><a className="dropdown-item" href="/fossils">Fossils</a></li>
                  <li><a className="dropdown-item" href="/villagers">Villagers</a></li>
                  <li><a className="dropdown-item" href="/songs">Songs</a></li>
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