function HealthcareScheduler() {
  return (
    <main>

      <section>
        <p>Software Engineering · 2026</p>

        <h1>
          Healthcare Scheduling Optimizer
        </h1>

        <p>
          A scheduling application that automatically
          assigns nurses to hospital shifts while respecting
          availability, staffing requirements, and scheduling
          constraints.
        </p>
      </section>


      <img
        src="/images/healthcare-scheduler/dashboard.png"
        alt="Healthcare Scheduler Dashboard"
      />


      <section>
        <h2>Overview</h2>

        <p>
          Hospital scheduling requires balancing nurse
          availability, staffing requirements, and workload
          limitations.

          This application generates valid nurse schedules
          while enforcing those constraints automatically.
        </p>
      </section>


      <section>
        <h2>Key Features</h2>

        <ul>
          <li>Nurse availability management</li>
          <li>Shift creation</li>
          <li>Automatic nurse assignment</li>
          <li>Scheduling constraints</li>
          <li>Backtracking algorithm</li>
        </ul>
      </section>


      <section>
        <h2>Technologies</h2>

        <p>
          Python · React · TypeScript · FastAPI
        </p>
      </section>

    </main>
  );
}

export default HealthcareScheduler;