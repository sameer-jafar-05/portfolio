const ProjectsSection = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>My recent work and open-source contributions</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Expense Tracker</h3>
              <p>Track your expenses and visualize trends</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                Built with React, Node.js, and MongoDB. Includes authentication and charts.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/shaiksameer/expense-tracker" target="_blank" className="project-link primary">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="https://shaiksameer.github.io/expense-tracker" target="_blank" className="project-link secondary">
                  <i className="fas fa-globe"></i> Live
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header orange">
              <h3>Spoken English App</h3>
              <p>Helping learners build fluency</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                A web tool with vocabulary builder, sentence practice, and quizzes.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/shaiksameer/spoken-english-app" target="_blank" className="project-link primary">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="https://shaiksameer.github.io/spoken-english-app" target="_blank" className="project-link secondary">
                  <i className="fas fa-globe"></i> Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};