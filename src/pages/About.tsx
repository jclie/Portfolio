function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <h1 className="about-label">ABOUT ME</h1>
      </section>

      <div className="about-intro">
        <p>
          Hello! I'm Julie, a Senior Computer Science student at San Diego State
          University interested in software engineering, full-stack development,
          machine learning, and healthcare technology.
        </p>

        <p>
          In my free time, I enjoy playing games with my boyfriend and siblings,
          especially Roblox. Some of my favorite Roblox games are Sharp, Murder
          Mystery 2, and Hypershot. I also enjoy listening to music and reading.
        </p>

        <p>
          Some of my favorite artists are Malcolm Todd, Beabadoobee, Deftones,
          and Paramore. My favorite author is Stephen King, and some of my favorite
          books by him are The Shining, Cujo, and Fairy Tale. I'm hoping to read
          Pet Sematary and It next.
        </p>
      </div>


      <section className="about-grid">

        <div className="about-bio">

          <p>
            I enjoy turning ideas into working projects and learning
            how different parts of a system fit together — from
            frontend interfaces and APIs to databases and machine
            learning models.
          </p>

          <p>
            My projects have included a campus study-space finder,
            a financial transaction classifier, an emergency room
            triage simulator, a healthcare scheduling optimizer,
            phishing detection tools, and API-based automation.
          </p>

          <p>
            Right now, I'm focused on strengthening my software
            engineering skills, building more complete end-to-end
            projects, and preparing for software engineering
            internships.
          </p>

        </div>


        <aside className="about-sidebar">

          <div className="about-info">
            <p className="about-info-title">
              CURRENTLY
            </p>

            <p>Computer Science Student</p>
            <p>San Diego State University</p>
          </div>


          <div className="about-info">
            <p className="about-info-title">
              INTERESTS
            </p>

            <p>Software Engineering</p>
            <p>Full-Stack Development</p>
            <p>Machine Learning</p>
            <p>Healthcare Technology</p>
          </div>


          <div className="about-info">
            <p className="about-info-title">
              LANGUAGES
            </p>

            <p>Python · JavaScript · TypeScript</p>
            <p>Java · C++ · C#</p>
          </div>


          <div className="about-info">
            <p className="about-info-title">
              TOOLS
            </p>

            <p>React · Node.js · Express</p>
            <p>Flask · SQLite · Git · GitHub</p>
          </div>

        </aside>

      </section>

    </main>
  );
}

export default About;