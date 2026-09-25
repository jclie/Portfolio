import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,

    title: "USC Study Spots",

    year: 2026,

    startDate: "2025-10",
    endDate: "2026-09",

    category: "Full-Stack Web Application",

    description:
      "A campus study-space finder designed for students who prefer quiet, less crowded environments and want an easier way to find a comfortable place to focus.",

    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "SQLite",
      "Leaflet",
      "OpenStreetMap",
    ],

    slug: "usc-spots",

    featured: true,
    status: "complete",

    role: "Full-Stack Developer",
    teamProject: false,

    // Add your actual URLs here
    liveUrl: "https://uscstudyspots.onrender.com",
    github: "https://github.com/jclie/USCstudySpots",

    overview:
      "USC Study Spots is a full-stack study-space discovery platform designed to make it easier to find quieter and less crowded places to work around campus.",

    highlights: [
      "Built an interactive campus map using Leaflet and OpenStreetMap",
      "Added search and filtering for study locations",
      "Implemented user-submitted study spots",
      "Built a SQLite-backed moderation workflow",
      "Created admin tools for approving and removing submissions",
      "Added input validation, rate limiting, and security protections",
    ],

    challenges: [
      "Designing a map-based interface that remained easy to navigate",
      "Connecting the frontend to an Express and SQLite backend",
      "Handling user-submitted locations safely",
      "Building a moderation workflow for new study spots",
    ],
  },

  {
    id: 2,

    title: "Financial Transaction Classification",

    year: 2026,

    startDate: "2026-02",
    endDate: "2026-05",

    category: "Machine Learning",

    description:
      "A machine learning system for classifying financial transactions into spending categories using transaction descriptions and structured financial data.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "TF-IDF",
      "Matplotlib",
    ],

    slug: "transaction-classification",

    featured: false,
    status: "complete",

    role: "Machine Learning Developer",
    teamProject: true,

    github:
      "https://github.com/jclie/Financial-Classifier-Tracker",

    overview:
      "This project explores automated financial transaction categorization by combining natural-language features with numerical, categorical, and temporal transaction data.",

    highlights: [
      "Generated TF-IDF features from transaction descriptions",
      "Engineered numerical, categorical, and temporal features",
      "Separated training and testing data before preprocessing to prevent data leakage",
      "Tuned Logistic Regression hyperparameters using cross-validation",
      "Evaluated models using accuracy, precision, recall, F1-score, and confusion matrices",
      "Compared multiple classification approaches including Logistic Regression, Decision Tree, KNN, and SVM",
    ],

    challenges: [
      "Combining text and structured data in one machine learning pipeline",
      "Handling transaction categories with limited training examples",
      "Preventing test data from influencing preprocessing",
      "Evaluating models across uneven category distributions",
    ],
  },

  {
    id: 3,

    title: "GradeFlow Process Grader",

    year: 2026,

    startDate: "2026-01",
    endDate: "2026-05",

    category: "Education Technology",

    description:
      "A team-built system that evaluates student work processes using engagement activity, revision history, and structured learning data.",

    technologies: [
      "Python",
      "Pandas",
      "Flask",
      "JSON",
      "CSV",
    ],

    slug: "gradeflow",

    featured: false,
    status: "complete",

    role: "Developer",
    teamProject: true,

    // Intentionally no GitHub link because the project/data stays private.

    overview:
      "GradeFlow evaluates how students work rather than relying only on the final result. The system analyzes engagement activity and revision history to produce process-based scores and supporting metrics.",

    highlights: [
      "Developed scoring logic for task coverage",
      "Analyzed resource usage and student engagement activity",
      "Measured hint use and revision behavior",
      "Processed structured JSON and CSV data with Pandas",
      "Integrated analysis functionality with a Flask backend",
      "Generated process scores and supporting metrics",
    ],

    challenges: [
      "Turning raw engagement activity into useful scoring signals",
      "Combining multiple types of learning data",
      "Designing understandable process-based evaluation metrics",
    ],
  },

  {
    id: 4,

    title: "Healthcare Scheduling Optimizer",

    year: 2026,

    startDate: "2026-08",

    category: "Healthcare Software",

    description:
      "A scheduling system designed to assign nurses to hospital shifts while enforcing availability, qualifications, workload, and staffing constraints.",

    technologies: [
      "Python",
    ],

    slug: "healthcare-scheduler",

    featured: false,
    status: "in-progress",

    role: "Software Developer",
    teamProject: false,

    overview:
      "The Healthcare Scheduling Optimizer explores constraint-based scheduling for assigning nurses to shifts while respecting real-world scheduling rules.",

    highlights: [
      "Implemented nurse availability validation",
      "Added department and qualification checks",
      "Built assignment validation logic",
      "Developing workload and staffing constraints",
      "Designing scheduling logic for valid shift assignments",
    ],

    challenges: [
      "Representing multiple scheduling constraints clearly",
      "Preventing invalid or conflicting assignments",
      "Designing scheduling logic that can recover from dead ends",
    ],
  },

  {
    id: 5,

    title: "PhishNet",

    year: 2026,

    category: "Machine Learning · Cybersecurity",

    description:
      "An AI-assisted phishing and spam safety tool that analyzes Gmail messages using a trained machine learning classifier and optional AI-assisted analysis.",

    technologies: [
      "Python",
      "Flask",
      "scikit-learn",
      "Gmail API",
      "Google OAuth",
      "Gemini API",
      "Pandas",
    ],

    slug: "phishnet",

    featured: false,
    status: "complete",

    role: "Developer",

    github: "https://github.com/khoin119/PhishNet",

    overview:
      "PhishNet is an email safety assistant that retrieves Gmail messages through read-only OAuth access, assigns phishing probabilities using a trained classifier, and can provide additional analysis for suspicious messages.",

    highlights: [
      "Integrated Gmail using OAuth and the Gmail API",
      "Built machine learning-based phishing scoring",
      "Processed and cleaned email content before classification",
      "Added suspicious URL and sender analysis",
      "Integrated optional Gemini-assisted explanations",
      "Created model evaluation and feedback workflows",
    ],

    challenges: [
      "Distinguishing phishing emails from ordinary spam",
      "Combining textual and structural email indicators",
      "Reducing false positives",
      "Handling authentication and email data safely",
    ],
  },

  {
    id: 6,

    title: "Emergency Room Triage System",

    year: 2026,

    category: "Data Structures · Java",

    description:
      "A Java emergency room triage simulator that prioritizes patients using urgency, wait time, health indicators, and arrival order.",

    technologies: [
      "Java",
      "PriorityQueue",
    ],

    slug: "er-triage",

    featured: false,
    status: "complete",

    role: "Developer",
    teamProject: false,

    github:
      "https://github.com/jclie/CS460FinalProject",

    overview:
      "A Java-based triage simulator built to explore how priority queues can determine which emergency room patient should receive treatment next.",

    highlights: [
      "Implemented patient scheduling using Java PriorityQueue",
      "Calculated patient priority from multiple health indicators",
      "Included wait time in patient prioritization",
      "Used arrival order to resolve priority ties",
      "Compared priority-based scheduling with first-come-first-served behavior",
    ],

    challenges: [
      "Designing a priority calculation that combines multiple factors",
      "Handling patients with equal priority",
      "Maintaining fair ordering as patient wait times increase",
    ],
  },

  {
    id: 7,

    title: "VIN Discord Bot",

    category: "API Integration · Automation",

    description:
      "A Discord bot that retrieves vehicle information from VIN numbers using the NHTSA vehicle API and can deliver results through Discord or email.",

    technologies: [
      "Python",
      "Discord API",
      "NHTSA API",
      "Requests",
      "SMTP",
    ],

    slug: "vin-discord-bot",

    featured: false,
    status: "complete",

    role: "Developer",
    teamProject: false,

    github: "https://github.com/jclie/VinBot",

    overview:
      "A Python Discord bot created to explore third-party API integration and automated information delivery using vehicle identification numbers.",

    highlights: [
      "Created Discord bot commands for VIN lookup",
      "Connected the bot to the NHTSA vehicle API",
      "Retrieved vehicle information from VIN numbers",
      "Added email delivery through SMTP",
      "Used environment variables for configuration",
    ],

    challenges: [
      "Working with third-party API responses",
      "Formatting API information for Discord messages",
      "Handling credentials and configuration securely",
    ],
  },

  {
    id: 9,

    title: "DebtAnalyst",

    category: "Web Development",

    description:
      "An early prototype for a debt-analysis web application.",

    technologies: [
      "HTML",
    ],

    slug: "debt-analyst",

    featured: false,
    status: "prototype",

    role: "Developer",
    teamProject: false,

    github: "https://github.com/jclie/DebtAnalyst",

    visible: true,
  },
];