const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">Sameer</div>
        <nav>
          <ul className="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};