const SkillsSection = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Technical expertise and tools I use to build amazing solutions</p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3><i className="fas fa-code"></i> Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-laptop-code"></i> Frameworks & Libraries</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-tools"></i> Development Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-chalkboard-teacher"></i> Education Tech</h3>
            <div className="skill-tags">
              <span className="skill-tag">Google Classroom</span>
              <span className="skill-tag">Canva</span>
              <span className="skill-tag">Curriculum Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};