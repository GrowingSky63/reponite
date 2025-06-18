export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="logo.svg" alt="Logo" width="30" height="30" className="me-2" />
          Reponite
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/skins">Skins</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/shop">Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}