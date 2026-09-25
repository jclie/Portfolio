import { Link, useParams } from "react-router-dom";
import { projects } from "../data/project";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <p>PROJECT NOT FOUND</p>

        <h1>Something went missing.</h1>

        <Link to="/work">
          ← Back to Work
        </Link>
      </main>
    );
  }

  return (
    <main className="project-page">

      {/* HERO */}
      <section className="project-page-hero">

        <p className="project-page-label">
          {project.category} · {project.year}
        </p>

        <h1>{project.title}</h1>

        <p className="project-page-intro">
          {project.description}
        </p>

      </section>


      <hr className="section-divider" />


      {/* PROJECT SHOWCASE */}
      <section className="project-showcase">

        <div className="project-showcase-image">

          {project.image ? (
            <img
              src={"/images/healthcare-scheduler/usc-spots/cover image/usc-spots2.png"}
              alt={project.title}
            />
          ) : (
            <div className="project-image-placeholder">
              Project Preview
            </div>
          )}

        </div>


        <div className="project-showcase-info">

          <p className="project-showcase-year">
            {project.year}
          </p>

          {project.status === "in-progress" && (
            <span className="project-status">
              In Progress
            </span>
          )}

          <h2>{project.title}</h2>

          {project.role && (
            <p className="project-showcase-role">
              {project.role}
              {project.teamProject && " · Team Project"}
            </p>
          )}

          <p className="project-showcase-tech">
            {project.technologies.join(" · ")}
          </p>


          <div className="project-page-buttons">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-button primary"
              >
                Live Site
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>
            )}

          </div>

        </div>

      </section>


      {/* OVERVIEW */}
      {project.overview && (
        <>
          <hr className="section-divider" />

          <section className="project-details">

            <p className="project-detail-label">
              THE PROJECT
            </p>

            <div className="project-detail-grid">

              <h2>
                About the project.
              </h2>

              <div className="project-detail-text">
                <p>{project.overview}</p>
              </div>

            </div>

          </section>
        </>
      )}


      {/* HIGHLIGHTS */}
      {project.highlights &&
        project.highlights.length > 0 && (
          <>
            <hr className="section-divider" />

            <section className="project-details">

              <p className="project-detail-label">
                KEY FEATURES
              </p>

              <div className="project-detail-grid">

                <h2>
                  What I built.
                </h2>

                <ul className="project-detail-list">
                  {project.highlights.map(
                    (highlight, index) => (
                      <li key={index}>
                        {highlight}
                      </li>
                    )
                  )}
                </ul>

              </div>

            </section>
          </>
        )}


      {/* CHALLENGES */}
      {project.challenges &&
        project.challenges.length > 0 && (
          <>
            <hr className="section-divider" />

            <section className="project-details">

              <p className="project-detail-label">
                CHALLENGES
              </p>

              <div className="project-detail-grid">

                <h2>
                  What I worked through.
                </h2>

                <ul className="project-detail-list">
                  {project.challenges.map(
                    (challenge, index) => (
                      <li key={index}>
                        {challenge}
                      </li>
                    )
                  )}
                </ul>

              </div>

            </section>
          </>
        )}


      {/* BACK */}
      <section className="project-back">
        <Link to="/work">
          ← Back to My Archive
        </Link>
      </section>

    </main>
  );
}

export default ProjectDetail;