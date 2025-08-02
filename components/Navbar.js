const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">Sameer</div>
        <nav>
          <ul className="nav-links">
            <li><a href="https://sameer-jafar-05.github.io/portfolio/index.html" onClick={() => window.location.href = 'index.html'}>Home</a></li>
            <li><a href="https://sameer-jafar-05.github.io/portfolio/about.html" onClick={() => window.location.href = 'about.html'}>About</a></li>
            <li><a href="https://sameer-jafar-05.github.io/portfolio/projects.html" onClick={() => window.location.href = 'projects.html'}>Projects</a></li>
            <li><a href="https://sameer-jafar-05.github.io/portfolio/contact.html" onClick={() => window.location.href = 'contact.html'}>Contact</a></li>
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