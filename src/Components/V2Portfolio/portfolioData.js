const portfolioData = {
  profile: {
    name: "Tarun Reddy Nerella",
    role: "AI Data Engineer",
    location: "Jersey City, NJ",
    email: "tarunreddynerella@yahoo.com",
    phone: "+1 (303) 596 4928",
    resumePdf: "/Files/tarun-reddy-nerella-ai-data-engineer-resume.pdf",
    resumePages: [
      "/Files/resume-v2-page-1.png",
      "/Files/resume-v2-page-2.png",
    ],
    headline: "I turn data and AI into reliable systems.",
    summary:
      "AI Data Engineer with a computer science background across data platforms, applied ML, and agent workflows. I care about making complex systems observable, useful, and ready for real users.",
    links: {
      portfolio: "https://tarunreddynerella.github.io/",
      linkedin: "https://www.linkedin.com/in/tarun-reddy-nerella/",
      github: "https://github.com/tarunreddynerella",
      email: "mailto:tarunreddynerella@yahoo.com",
    },
  },
  proof: [
    {
      value: "2B+",
      label: "Rows supported across healthcare Databricks migration work.",
    },
    {
      value: "30-40%",
      label: "Spark runtime improvement through partitioning and workflow tuning.",
    },
    {
      value: "4",
      label: "Azure, Databricks Data Engineer, and Databricks GenAI certifications.",
    },
    {
      value: "20+",
      label: "Students mentored on Python, debugging, data structures, and code quality.",
    },
  ],
  buildAreas: [
    {
      title: "Lakehouse Data Platforms",
      body:
        "Bronze, silver, and gold layer pipelines with Databricks, Spark, Delta Lake, Unity Catalog, Lakeflow, Azure Data Factory, Synapse, and ADLS.",
    },
    {
      title: "Data Quality and Observability",
      body:
        "Contracts, reconciliation, schema drift, freshness, SLA monitoring, lineage context, runbooks, and source readiness checks.",
    },
    {
      title: "AI Engineering Workflows",
      body:
        "RAG, embeddings, vector search, semantic search, prompt engineering, LLM evaluation, local LLMs, ReAct agents, and multi-agent workflows.",
    },
    {
      title: "Data Products",
      body:
        "Dashboards, APIs, human-agent CRM workflows, audit trails, source onboarding, and operational interfaces built around real data work.",
    },
  ],
  caseStudies: [
    {
      id: "P.01",
      title: "Healthcare Lakehouse Migration",
      meta: "Hexaware Technologies | 2024 to present",
      status: "Production client work",
      problem:
        "Production healthcare workflows needed migration from Azure Synapse patterns into Databricks lakehouse pipelines without losing validation, orchestration, or release controls.",
      outcome:
        "Contributed to bronze, silver, and gold migration paths for processes reaching 2B+ rows, with parameterized jobs, dependencies, production checks, reconciliation, incident response, and stakeholder updates.",
      stack: [
        "Databricks",
        "Spark",
        "Delta Lake",
        "Azure Data Factory",
        "Azure Synapse",
        "ADLS",
        "Scala",
        "Python",
      ],
    },
    {
      id: "P.02",
      title: "Data Contract Observability System",
      meta: "Azure Databricks, Delta Lake, Unity Catalog, Lakeflow | 2026",
      links: [
        {
          label: "GitHub Repo",
          url: "https://github.com/tarunreddynerella/data-contract-observability-system",
        },
      ],
      problem:
        "Downstream Delta tables needed stronger protection from schema drift, type changes, null spikes, freshness misses, row count drift, and SLA breaks.",
      outcome:
        "Built contract, owner, severity, lineage impact, change history, and remediation status workflows that publish owner-ready alerts after ingestion jobs, ADLS events, and release checks.",
      stack: [
        "Databricks",
        "Delta Lake",
        "Unity Catalog",
        "Lakeflow",
        "Data Contracts",
      ],
    },
    {
      id: "P.03",
      title: "HomeOps AI Native Data Pipeline",
      meta: "GCP, Cloud Run, PostgreSQL, pgvector, LangGraph, MCP | 2025",
      links: [
        {
          label: "GitHub Repo",
          url: "https://github.com/tarunreddynerella/homeops-ai-native-data-pipeline",
        },
      ],
      problem:
        "New IoT device sources needed reusable ingestion adapters, inferred schemas, validation, metadata approval, and natural language operations without manual onboarding each time.",
      outcome:
        "Built metadata-driven source discovery using Cloud Run, PostgreSQL, pgvector, LangGraph, REST/MCP tools, vector search over docs, audit history, and adapter recommendations.",
      stack: [
        "GCP",
        "Cloud Run",
        "PostgreSQL",
        "pgvector",
        "LangGraph",
        "MCP",
      ],
    },
    {
      id: "P.04",
      title: "ATRIA Human Agent CRM Workflow Platform",
      meta: "Next.js, NestJS, PostgreSQL, Redis, Ollama, BYOK | 2026",
      links: [
        {
          label: "GitHub Repo",
          url: "https://github.com/tarunreddynerella/atria-human-agent-crm-workflow-platform",
        },
      ],
      problem:
        "Human-agent CRM workflows needed clear approvals, trust scoring, relationship follow-ups, cost controls, and auditable AI actions.",
      outcome:
        "Built workflows that route OpenAI, Anthropic, and Ollama through row-level security, Redis queues, BYOK keys, audit trails, human overrides, and approval decisions.",
      stack: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Ollama",
        "BYOK",
      ],
    },
    {
      id: "P.05",
      title: "Codex Council Agent Collaboration Plugin",
      meta: "Claude Code, Codex CLI, Node.js, JSONL | 2026",
      links: [
        {
          label: "GitHub Repo",
          url: "https://github.com/tarunreddynerella/codex-council-agent-collaboration-plugin",
        },
      ],
      problem:
        "Agent collaboration needed repeatable handoffs, critique loops, transcript capture, validation, and secret-safe task packets across Claude, subagents, and Codex.",
      outcome:
        "Built slash commands, lock-safe JSONL logs, schema validation, secret scanning, automated tests, and structured collaboration paths.",
      stack: ["Claude Code", "Codex CLI", "Node.js", "JSONL", "Agents"],
    },
  ],
  aiLab: [
    {
      title: "Local Meeting Intelligence Agent",
      links: [
        {
          label: "GitHub Repo",
          url: "https://github.com/tarunreddynerella/local-meeting-intelligence-agent",
        },
      ],
      body:
        "Local Ollama workflow that converts transcripts into Obsidian graph notes for participants, decisions, actions, owners, and time-zone-aware follow-ups using Google Calendar context.",
      stack: ["Ollama", "Obsidian", "Google Calendar"],
    },
    {
      title: "ReAct Fitness Recommendation Agent",
      links: [
        {
          label: "GitHub Repo",
          url: "https://github.com/tarunreddynerella/react-fitness-recommendation-agent",
        },
      ],
      body:
        "Reasoning-loop agent that reviews 30 days of fitness exports, recent training load, recovery constraints, and workout history before emailing auditable recommendations.",
      stack: ["ReAct", "APIs", "Email Automation"],
    },
  ],
  experience: [
    {
      title: "Data Engineer",
      org: "Hexaware Technologies",
      date: "Jul 2024 to Present",
      body:
        "Databricks and Azure Data Factory ingestion pipelines, Synapse to Databricks migration, healthcare validation and reconciliation, file observability, Spark tuning, incident response, and production runbooks.",
    },
    {
      title: "Graduate Student Assistant",
      org: "CEDC, University of Colorado Denver",
      date: "Jan 2023 to May 2024",
      body:
        "ML education research support, Python experiments, reproducible notebooks, model checks, result validation, and mentorship for 20+ students.",
    },
    {
      title: "Data Engineer",
      org: "9th Networks Inc.",
      date: "Aug 2020 to Aug 2022",
      body:
        "Batch and streaming telemetry pipelines, Snowflake/Snowpipe loading, Kafka pub/sub flows, curated utility reporting tables, reconciliation checks, Plotly/Dash observability, and Docker/CI/CD patterns.",
    },
    {
      title: "Full-Stack Developer",
      org: "IIIT Hyderabad",
      date: "Jun 2020 to Aug 2020",
      body:
        "React/Node.js app, backend APIs, D3.js visualizations, responsive feature flows, and API/server performance tuning.",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      date: "Apr 2024",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-gb/users/tarunreddynerella-7070/transcript/dg15gfegmmnkp1z",
    },
    {
      title: "Databricks Certified Data Engineer Associate",
      date: "May 2024",
      issuer: "Databricks",
      url: "https://credentials.databricks.com/ec6d4af2-437b-4a8a-8b7b-0ef2d7fb9bbf#gs.8zxlzx",
    },
    {
      title: "Databricks Certified Data Engineer Professional",
      date: "Jun 2024",
      issuer: "Databricks",
      url: "https://credentials.databricks.com/999dea26-a13b-45a6-a33c-c031ec5ccbf0#gs.9oesxt",
    },
    {
      title: "Databricks Certified Generative AI Engineer Associate",
      date: "May 2026",
      issuer: "Databricks",
      url: "https://credentials.databricks.com/e9fbc52b-33f1-4a57-be00-a776ef63b91b#acc.Y4NOhfbs",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["Python", "SQL", "Scala", "Java", "JavaScript", "C++"],
    },
    {
      title: "Data Platforms",
      items: [
        "Databricks",
        "Spark",
        "Delta Lake",
        "Unity Catalog",
        "Lakeflow",
        "Snowflake",
        "Snowpipe",
        "ADF",
        "Synapse",
        "ADLS",
      ],
    },
    {
      title: "Cloud and Streaming",
      items: [
        "Azure",
        "GCP BigQuery",
        "Dataflow",
        "Pub/Sub",
        "Cloud Run",
        "GCS",
        "Kafka",
        "AWS",
      ],
    },
    {
      title: "Observability",
      items: [
        "ETL/ELT",
        "Medallion Architecture",
        "Data Contracts",
        "Data Quality",
        "Schema Evolution",
        "Lineage",
        "SLA Monitoring",
      ],
    },
    {
      title: "AI Engineering",
      items: [
        "RAG",
        "Embeddings",
        "Vector Databases",
        "Semantic Search",
        "Chunking",
        "Prompt Engineering",
        "LLM Evaluation",
        "Local LLMs",
      ],
    },
    {
      title: "Agents and DevOps",
      items: [
        "Agent Bricks",
        "ReAct Agents",
        "MCP",
        "REST APIs",
        "Docker",
        "CI/CD",
        "Git",
        "Jenkins",
        "Claude Code",
        "Codex",
        "Cursor",
      ],
    },
    {
      title: "ML and Visualization",
      items: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "YOLO",
        "Hugging Face",
        "Ollama",
        "Plotly",
        "Dash",
      ],
    },
  ],
  education: [
    {
      title: "Master of Science, Computer Science",
      org: "University of Colorado Denver | Denver, CO",
      date: "Aug 2022 to May 2024",
      body:
        "GPA: 3.8. Coursework: Big Data Systems, Artificial Intelligence, Deep Learning, Computer Vision, Machine Learning.",
    },
    {
      title: "Bachelor of Technology, Computer Science and Engineering",
      org: "JB Institute of Engineering and Technology | Hyderabad, India",
      date: "Aug 2018 to Jun 2022",
      body:
        "Coursework: Data Structures, Operating Systems, Computer Networks, Database Management Systems.",
    },
  ],
  earlierWork: [
    {
      title: "Applied ML and Software Portfolio",
      body:
        "Older V1 work remains represented here: waste segregation, road sign detection, assistive vision, news classification, maze solving, Django polyclinic, Flutter/Firebase e-commerce, React/Node/D3 applications, and asteroid prediction research.",
      links: [
        {
          label: "Waste Classification",
          url: "https://github.com/tarunreddynerella/WasteClassificationML",
        },
        {
          label: "Maze Solver",
          url: "https://tarunreddynerella.github.io/MazeSolver",
        },
        {
          label: "Road Sign Detection",
          url: "https://github.com/tarunreddynerella/RoadSignDetectionProject",
        },
        {
          label: "News Classifier",
          url: "https://github.com/tarunreddynerella/NewsClassifier.git",
        },
        {
          label: "Assistive Vision",
          url: "https://github.com/tarunreddynerella/AssistantfortheVisuallyImpaired.git",
        },
        {
          label: "E-Commerce App",
          url: "https://github.com/tarunreddynerella/Ecommerce-Application.git",
        },
        {
          label: "Polyclinic",
          url: "https://github.com/tarunreddynerella/SoftwareForPolyclinic.git",
        },
        {
          label: "Asteroid Research",
          url: "https://www.irjet.net/archives/V8/i9/IRJET-V8I9244.pdf",
        },
      ],
    },
  ],
  research: [
    "Publication: Hazardous Asteroid Prediction using XGBoost | IRJET, Sep 2021",
    "Summer Analytics 2021: IIT Guwahati | ML algorithms, statistical modeling, applied analytics",
    "ML Program: E-Cell IIT Kharagpur | Predictive modeling, business analytics, applied machine learning",
  ],
};

export default portfolioData;
