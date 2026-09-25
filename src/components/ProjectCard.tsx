import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  year?: number;
  description: string;
  technologies: string[];
  image?: string;
  slug: string;
};

function ProjectCard({
  title,
  year,
  description,
  technologies,
  image,
  slug
}: ProjectCardProps) {
  return (
    <article className="project-card">

      <div className="project-content">
        <p className="project-meta">
          Web Application · {year}
        </p>

        <h2 className="project-title">
          {title}
        </h2>

        <p className="project-description">
          {description}
        </p>

        <p className="project-tech">
          {technologies.join(" · ")}
        </p>

        <div className="project-buttons">
          <Link
            to={`/work/${slug}`}
            className="project-button primary"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="project-image-container">
        {image ? (
          <img
            src={image}
            alt={title}
          />
        ) : (
          <div className="project-image-placeholder">
            Project Preview
          </div>
        )}
      </div>

    </article>
  );
}

export default ProjectCard;