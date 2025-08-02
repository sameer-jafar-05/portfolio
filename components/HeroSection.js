const HeroSection = () => {
  return (
    <section className="hero section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm Sameer</h1>
          <div className="typing-text">I am a Software Developer</div>
          <p>
            Passionate about building meaningful tech solutions. I run a non-profit and teach English online.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-secondary">See Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-avatar">👨‍💻</div>
            <h3>Shaik Sameer</h3>
            <p>Developer | Educator | Non-Profit Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};