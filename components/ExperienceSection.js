const ExperienceSection = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <p>Where I’ve worked and contributed</p>
        </div>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Software Developer Intern</h3>
                <span className="experience-company">AppLovin (Remote)</span>
              </div>
              <span className="experience-date">Jun 2025 - Aug 2025</span>
            </div>
            <div className="experience-description">
              <p>Improved React dashboard performance by 30%, collaborated using GitHub & Jira.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Founder - Amma Educate</h3>
                <span className="experience-company">Hyderabad</span>
              </div>
              <span className="experience-date">2023 - Present</span>
            </div>
            <div className="experience-description">
              <p>Launched a non-profit to teach Math & Science to children. Built free lessons for 1000+ learners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};