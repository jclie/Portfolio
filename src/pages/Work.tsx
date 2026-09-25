import { Link } from "react-router-dom";
import { projects } from "../data/project";

function formatProjectDate(date?: string) {
  if (!date) return "";

  const [year, month] = date.split("-");

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return `${months[Number(month) - 1]} ${year}`;
}

function Work() {
  const visibleProjects = [...projects]
    .filter((project) => project.visible !== false)
    .sort((a, b) => {
      if (!a.startDate && !b.startDate) {
        return a.id - b.id;
      }

      if (!a.startDate) return 1;
      if (!b.startDate) return -1;

      return (
        new Date(b.startDate).getTime() -
        new Date(a.startDate).getTime()
      );
    });

  return (
    <main className="archive-page">

      {/* HEADER */}
      <section className="archive-header">
        <p className="archive-label">
          SELECTED PROJECTS
        </p>

        <h1>MY ARCHIVE</h1>

        <p className="archive-intro">
          A collection of projects I've built while exploring
          software engineering, full-stack development, machine
          learning, healthcare technology, and computer science.
        </p>
      </section>


      {/* PROJECTS */}
      <section className="archive-list">
        {visibleProjects.map((project) => {
          const hasDates = project.startDate;

          return (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="archive-project"
            >

              {/* IMAGE */}
              <div className="archive-project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                ) : (
                  <div className="archive-image-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>


              {/* INFORMATION */}
              <div className="archive-project-info">

                <div className="archive-project-top">
                  <p className="archive-project-year">
                    {project.category}

                    {hasDates && (
                      <>
                        {" · "}
                        {formatProjectDate(project.startDate)}
                        {" — "}
                        {project.endDate
                          ? formatProjectDate(project.endDate)
                          : project.status === "in-progress"
                          ? "PRESENT"
                          : ""}
                      </>
                    )}
                  </p>

                  {project.status === "in-progress" && (
                    <span className="project-status">
                      IN PROGRESS
                    </span>
                  )}

                  {project.status === "prototype" && (
                    <span className="project-status">
                      PROTOTYPE
                    </span>
                  )}
                </div>


                <h2>{project.title}</h2>


                <p className="archive-project-description">
                  {project.description}
                </p>


                <p className="archive-project-tech">
                  {project.technologies.join(" · ")}
                </p>


                <span className="archive-project-link">
                  View Project →
                </span>

              </div>

            </Link>
          );
        })}
      </section>

    </main>
  );
}

export default Work;