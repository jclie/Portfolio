import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

function Home() {
  return (
    <main>

      
      <section className="hero">

        <p className="hero-label">
          Computer Science · Software Engineering
        </p>

        <h1>
          Hi, I'm Julie.
        </h1>

        <p className="hero-description">
          I build software focused on solving real-world
          problems, with an interest in healthcare technology
          and full-stack development.
        </p>

      </section>

      <hr className="section-divider" />

      <section className="work-section">

        <p className="section-label">
          Selected Work
        </p>

        {projects
        .filter((project) => project.featured)
        .map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            slug={project.slug}
          />
        ))}

      </section>

    </main>
  );
}

export default Home;