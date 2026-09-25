function Resume() {
  const resumePath = "/resume/JulieTongResume.pdf";

  return (
    <main className="resume-page">

      <section className="resume-hero">
        <p className="resume-label">
          RESUME
        </p>

        <h1>My Resume</h1>

        <p className="resume-intro">
          A look at my experience, projects, technical skills,
          and education.
        </p>

        <div className="resume-actions">
          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="resume-button resume-button-primary"
          >
            View PDF
          </a>

          <a
            href={resumePath}
            download="/resume/JulieTongResume.pdf"
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
      </section>


      <section className="resume-preview">
        <iframe
          src={resumePath}
          title="Julie Tong Resume"
          className="resume-frame"
        />
      </section>

    </main>
  );
}

export default Resume;