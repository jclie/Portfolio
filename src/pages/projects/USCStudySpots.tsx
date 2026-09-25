function USCSpots() {
  return (
    <main className="project-page">

      {/* HERO */}
      <section className="project-page-hero">
        <p className="project-page-label">
          WEB APPLICATION · 2026
        </p>

        <h1>USC Study Spots</h1>

        <p className="project-page-intro">
          A campus study-space finder designed for students who
          prefer quiet, less crowded environments and want an
          easier way to find a comfortable place to focus.
        </p>
      </section>


      <div className="section-divider" />


      {/* PROJECT SHOWCASE */}
      <section className="project-showcase">

        <div className="projeimagect-showcase-">
          <img
            src="/images/healthcare-scheduler/usc-spots/cover image/usc-spots2.png"
            alt="USC Study Spots application"
          />
        </div>


        <div className="project-showcase-info">

          <p className="project-showcase-year">
            2026
          </p>

          <h2>USC Study Spots</h2>

          <p className="project-showcase-tagline">
            Find quieter places to study around USC.
          </p>

          <p className="project-showcase-tech">
            HTML · CSS · JAVASCRIPT · NODE.JS · EXPRESS · SQLITE
          </p>

          <div className="project-page-buttons">

            <a
              href="https://uscstudyspots.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="project-button primary"
            > 
              Live Site
            </a>

            <a
              href="https://github.com/jclie/USCstudySpots"
              target="_blank"
              rel="noreferrer"
              className="project-button"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>


      <div className="section-divider" />


      {/* ABOUT PROJECT */}
      <section className="project-details">

        <p className="project-detail-label">
          THE PROJECT
        </p>

        <div className="project-detail-grid">

          <h2>
            Finding a place to focus shouldn't be stressful.
          </h2>

          <div className="project-detail-text">
            <p>
              USC Study Spots was created for students who prefer
              quieter environments and may feel uncomfortable in
              crowded study spaces.
            </p>

            <p>
              The application provides an interactive campus map
              that helps students discover study locations and
              find spaces that better match the environment
              they're looking for.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default USCSpots;