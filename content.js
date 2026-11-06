// ALL site content lives here. Edit text, roles, projects and links in this file only.
// Rules: numbers appear only where you gave them. Case studies are anonymized (no client, fund or internal system names).
// Problem lines are my framing of the situation, not sourced facts: please read them. A field left as "" is hidden.

export const C = {
  name: "Vishnuvardhan Chowhan",
  word: "SYSTEMS",
  role: "DATA ENGINEER · INVESTMENT REPORTING SYSTEMS",
  core: ["Power BI", "SQL Server", "Python"],
  pitch: "I build the data backbone behind portfolio decisions: pipelines that reconcile, dashboards hundreds of people rely on, and client decks that update themselves. Open for freelance.",

  links: {
    email: "mailto:vishnuvardhan.chowhan@gmail.com",
    phone: "tel:+917036363267", phoneText: "+91 70363 63267",
    linkedin: "https://www.linkedin.com/in/vishnu-vardhan-chowhan/",
    github: "https://github.com/Vishnuvardhanchowhan",
    archive: "https://vishnuvardhanchowhan.github.io",
    resume: "" // TODO: "assets/resume.pdf"
  },

  nav: [["home","Home"],["offer","Services"],["about","About"],["projects","Work"],["matrix","Stack"],["process","Process"],["faq","FAQ"],["contact","Contact"]],

  stats: [
    { pre: "~", to: 400, label: "users on a dashboard I built" },
    { to: 3, label: "SQL platforms, one pipeline" },
    { to: 200, suf: "K+", label: "rows per quarterly refresh" },
    { pre: "~", to: 1.7, dec: 1, suf: "K", label: "rows refreshed daily" },
    { to: 2, suf: "M+", label: "SKUs tracked at scale" }
  ],

  offer: {
    title: "What I can build for you",
    clients: "boutique asset managers, wealth and advisory firms, funds and family offices, fintech startups.",
    items: [
      { t: "Dashboards your team actually uses", d: "Power BI first, Streamlit or Plotly when the job needs it: performance, allocation and benchmark views with the cuts people ask for, backed by reconciled data.", tags: ["Power BI", "Streamlit", "Plotly"] },
      { t: "Reporting & deck automation", d: "Recurring reports and client presentations that refresh from the database and arrive checked, so managers present instead of assembling.", tags: ["Python", "PowerPoint automation", "Excel"] },
      { t: "Data pipelines & reconciliation", d: "Multi-source ingestion across SQL platforms, with reconciliation at several levels before anything reaches a screen.", tags: ["Snowflake", "SQL Server", "PostgreSQL"] },
      { t: "Validation & QC layers", d: "Automated checks on every project, so bad inputs stop early and failures are loud, not plausible and wrong.", tags: ["Data quality", "Reconciliation"] },
      { t: "CI/CD for data work", d: "Version control, tests and repeatable deployment for reporting code that used to live on one person's laptop.", tags: ["GitHub Actions", "Python CI/CD"] },
      { t: "System design & audits", d: "Architecture for a new reporting stack, or a review of the one you have: where it breaks, what to automate first.", tags: ["Architecture", "Review"] }
    ]
  },

  about: {
    eyebrow: "// ABOUT_ME",
    title: "Background & Philosophy",
    quote: "A script solves today's task. A system makes it boring forever.",
    tagline: "Engineer by training. Finance data systems by craft.",
    body: "I work in the multi-asset space of a global asset manager, on a fund-of-funds business running custom and off-the-shelf model portfolios for advisors and wealthy clients. I own the backend: metrics, charts, dashboards and presentation decks, built end to end so portfolio managers open something finished and checked, and spend their time on the client. Before that I built analytics automation at scale in FMCG. I trained as an electrical engineer at IIT Bombay, which is why I debug from the signal up.",
    cards: [
      { t: "Backend to boardroom", d: "Raw data in, client-ready decks and dashboards out, with nobody gluing steps together by hand." },
      { t: "Controls first", d: "Reconciliation and QC are part of the design, not an afterthought." },
      { t: "Systems over scripts", d: "Tested, versioned, repeatable, and documented enough to hand over." }
    ],
    beyond: "Beyond code: photography, weightlifting, movies and web series.",
    photo: "" // TODO: "assets/me.jpg"
  },

  experience: [
    {
      role: "Junior Quantitative Analyst, Multi-Assets", org: "Invesco",
      when: "Nov 2025 – Present", place: "Hyderabad · Hybrid",
      points: [
        "Own the full automation lifecycle for reporting and presentation workflows across model portfolios and global strategies.",
        "Build Power BI dashboards, metric engines and client-ready decks on Python and SQL Server, with QC checks on every project.",
        "Maintain the whole codebase from architecture to CI/CD deployment, integrating multiple database platforms."
      ]
    },
    {
      role: "Data Analyst", org: "Bintix",
      when: "Jun 2024 – Nov 2025", place: "Hyderabad · On-site",
      points: [
        "Analytics on resale datasets for leading FMCG brands: market trends, product performance, growth opportunities.",
        "Automated data prep, KPI reporting and categorization with Python and VBA.",
        "Turned findings into boardroom-ready presentations and dynamic dashboards."
      ]
    },
    {
      role: "Data Scientist Intern", org: "Kotak Mahindra Bank",
      when: "Dec 2022 – Jan 2023", place: "Thane",
      points: ["Automated email triage across 3 categories with the Salesforce Einstein API: ~25% better classification accuracy, ~40% less manual sorting."]
    },
    {
      role: "B.Tech, Electrical Engineering", org: "IIT Bombay",
      when: "2020 – 2024", place: "Mumbai",
      points: ["Best Project Award from the EE Department for the RFID attendance system."]
    }
  ],

  tracks: [
    {
      id: "asset", name: "Asset-management reporting systems",
      blurb: "Anonymized: what the systems do, with no client, fund or internal names.",
      cards: [
        { tag: "Production · Dashboard", title: "Model-portfolio performance dashboard",
          problem: "A large organization needed one trusted view of how models and funds perform.",
          approach: "A Python and SQL pipeline feeding an interactive dashboard: index-affiliation cuts, business-line views, and model and fund performance against benchmarks, with AUM data reconciled at several levels before display.",
          impact: "Used by about 400 people across the organization.",
          stats: [{ pre: "~", to: 400, label: "internal users" }],
          stack: ["Python", "SQL", "Power BI", "Reconciliation"] },
        { tag: "Production · Decks", title: "Client presentation automation",
          problem: "Long client decks were assembled by hand every cycle.",
          approach: "Decks whose charts and tables refresh straight from Snowflake, SQL Server and PostgreSQL, built end to end in code with near-zero Excel dependency and compliance-checked outputs.",
          impact: "Client managers open a finished, checked deck and only present.",
          stack: ["Python", "PowerPoint automation", "Snowflake", "SQL Server", "PostgreSQL"] },
        { tag: "Production · Cadence", title: "Monthly launch-deck automation",
          problem: "A recurring monthly deck ate analyst days.",
          approach: "A scheduled pipeline that rebuilds the whole monthly launch deck from source data.",
          impact: "",
          stack: ["Python", "SQL", "PowerPoint automation"] },
        { tag: "Production · Daily", title: "Daily fee-characteristics refresh",
          problem: "",
          approach: "A daily job that updates fee-characteristics data across the product set and validates it before release.",
          impact: "About 1,700 rows refreshed every day.",
          stats: [{ pre: "~", to: 1.7, dec: 1, suf: "K", label: "rows / day" }],
          stack: ["Python", "SQL", "QC checks"] },
        { tag: "Production · Workbooks", title: "Core model data workbook",
          problem: "Several teams depend on one model data workbook, so errors travel far.",
          approach: "Fully automated refresh with QC checks implemented on every project.",
          impact: "A dependable shared source for multiple teams.",
          stack: ["Python", "Excel output", "QC checks"] },
        { tag: "Production · Quarterly", title: "Quarterly allocation workbook",
          problem: "",
          approach: "Pulls data from many sources each quarter, reconciles it at multiple levels and writes the finished workbook.",
          impact: "200K+ rows updated per quarter.",
          stats: [{ to: 200, suf: "K+", label: "rows / quarter" }],
          stack: ["Python", "SQL", "Reconciliation"] }
      ]
    },
    {
      id: "scale", name: "Data at scale & systems I build for myself",
      blurb: "FMCG analytics at scale, plus personal systems where I own every decision.",
      cards: [
        { tag: "Production · Bintix", title: "Modular KPI dashboard",
          problem: "Multi-format, geography-specific client reports ate analyst hours.",
          approach: "A modular Streamlit app on Pandas that automates each report variant from shared building blocks.",
          impact: "Manual reporting work cut by about 90%.",
          stats: [{ pre: "~", to: 90, suf: "%", label: "manual work cut" }],
          stack: ["Python", "Streamlit", "Pandas"] },
        { tag: "Production · Bintix", title: "New Launch Tracker",
          problem: "Spotting new product launches across huge catalogs by hand doesn't scale.",
          approach: "A dashboard on a Python ETL pipeline that monitors product launches.",
          impact: "Tracks launches across 2M+ SKUs and 6 metros.",
          stats: [{ to: 2, suf: "M+", label: "SKUs" }, { to: 6, label: "metros" }],
          stack: ["Python", "ETL", "Dashboarding"] },
        { tag: "Production · Bintix", title: "Barcode scan de-duplication",
          problem: "Redundant barcode scans caused double-counting in analysis.",
          approach: "A Python + SQL data-cleaning solution that removes the redundant scans.",
          impact: "About 30% better analysis accuracy.",
          stats: [{ pre: "~", to: 30, suf: "%", label: "accuracy gain" }],
          stack: ["Python", "SQL"] },
        { tag: "Production · Bintix", title: "Gemini insights & slide-title tool",
          problem: "Turning datasets into concise takeaways was slow, manual writing.",
          approach: "An NLP tool on the Gemini 2.5 API that generates insights and slide titles from FMCG datasets.",
          impact: "Raw datasets become ready-to-use insights and slide titles.",
          stack: ["Gemini 2.5 API", "NLP", "Python"] },
        { tag: "Systems I build for myself", title: "Wealth projection model (Excel)",
          problem: "Most budget sheets record the past but never show where the plan leads.",
          approach: "Strict layering: Inputs (the only cells you edit), an Items calculation sheet, a Monthly ledger, a Yearly roll-up, and a Dashboard with control-panel levers for inflation, raises, expected return and savings rate. Every month is tagged History, Current or Projected automatically, and everything below Inputs is formulas only.",
          impact: "Change one lever and the whole timeline reprojects, with no formula edits.",
          stack: ["Excel", "Model design", "Scenario levers"] },
        { tag: "Systems I build for myself", title: "Expense tracker",
          problem: "Bank statements arrive late, while transaction emails arrive instantly but in messy templates.",
          approach: "Gmail OAuth ingests bank transaction emails. A fallback-chain regex parser handles multiple templates, and results merge with local CSV statements into a master CSV. GitHub Actions refreshes it daily.",
          impact: "A self-updating finance dashboard. Lessons: layered data sources, silent-failure bugs (DD-MM-YYYY dates parsed without dayfirst=True), secrets handling, CI debugging.",
          stack: ["Streamlit", "Gmail OAuth", "Regex parsing", "GitHub Actions", "Python"],
          link: "https://github.com/Vishnuvardhanchowhan/expense_tracker" },
        { tag: "Systems I build for myself", title: "Mobile-first family finance dashboard",
          problem: "Finance views built for desktop don't hold up on a phone.",
          approach: "A dark fintech theme with bottom tab navigation, and custom HTML/CSS widgets so charts stay mobile-safe.",
          impact: "A dashboard designed for phone use first.",
          stack: ["Streamlit", "Custom HTML/CSS", "Mobile-first UI"],
          note: "Private project, no public link." }
      ]
    },
    {
      id: "foundation", name: "Engineering foundation",
      blurb: "IIT Bombay projects behind how I debug and design.",
      cards: [
        { tag: "Best Project Award", title: "RFID attendance management system",
          problem: "Taking attendance by hand is slow and error-prone.",
          approach: "An MFRC522 reader with a TIVA-C microcontroller and a custom Eagle PCB with a trace antenna.",
          impact: "About 95% accuracy. Won the EE Department's Best Project Award among 200 students.",
          stats: [{ pre: "~", to: 95, suf: "%", label: "accuracy" }, { to: 1, label: "Best Project Award" }],
          stack: ["TIVA-C", "MFRC522", "Eagle PCB"] },
        { tag: "Applied ML", title: "Music genre, nucleus segmentation, gesture recognition",
          problem: "",
          approach: "VGG16 plus classic classifiers in an ensemble, U-Net with watershed on MoNuSeg, and a fine-tuned YOLOv5s gesture recognizer with a Gradio UI.",
          impact: "Ensemble AUC 0.894, segmentation precision 0.70, gesture recall 0.85.",
          stats: [{ to: 0.894, dec: 3, label: "AUC" }, { to: 0.7, dec: 2, label: "precision" }, { to: 0.85, dec: 2, label: "recall" }],
          stack: ["PyTorch", "TensorFlow", "Keras", "YOLOv5s"] },
        { tag: "Digital & embedded", title: "Processor, radio and robotics projects",
          problem: "",
          approach: "A 16-bit multi-cycle IITB-RISC processor in VHDL, FSK modulation in GNU Radio, an ESP32 RC bot and a PID line follower.",
          impact: "",
          stack: ["VHDL", "GNU Radio", "ESP32", "PID control"] }
      ]
    }
  ],

  matrix: [
    { t: "Investment analytics", c: ["Performance reporting", "Attribution", "Benchmark-relative analysis", "Up/down capture", "Sharpe ratio", "Risk metrics", "Allocation", "Rebalancing"] },
    { t: "Data platforms & languages", c: ["Python", "SQL Server", "SQL", "Snowflake", "PostgreSQL", "VBA", "C/C++"] },
    { t: "BI & reporting", c: ["Power BI", "Streamlit", "Plotly", "Tableau", "Excel", "PowerPoint automation", "Think-cell"] },
    { t: "Automation & engineering", c: ["Python pipelines", "ETL", "Reconciliation & QC", "GitHub", "GitHub Actions CI/CD", "Selenium", "Gmail OAuth"] },
    { t: "ML / AI", c: ["PyTorch", "TensorFlow", "scikit-learn", "NLP", "Gemini API", "Salesforce Einstein"] }
  ],

  process: [
    { t: "Discover", d: "Map the sources, the outputs and who consumes them, and find what breaks today." },
    { t: "Design", d: "Architecture, data contracts and the controls that decide what counts as correct." },
    { t: "Build", d: "Pipelines, dashboards and decks, in versioned code you own." },
    { t: "Validate", d: "Reconcile against known numbers and run in parallel with the old process before switching." },
    { t: "Hand over", d: "Documentation, deployment and a runbook, so the system survives without me." }
  ],

  faq: [
    { q: "Do you show real client or employer data?", a: "Never. Case studies here describe what the systems do, with no names and no data. Demos use synthetic data." },
    { q: "What kind of projects do you take?", a: "Dashboards, reporting and deck automation, multi-source pipelines, validation layers and CI/CD for data work, and architecture reviews, mostly for investment and finance teams." },
    { q: "Which tools do you work in?", a: "Power BI, SQL Server and Python are my daily core, alongside Snowflake and PostgreSQL, with Streamlit when a custom app fits better. I'll adapt to your stack where it makes sense." },
    { q: "What do I get at the end?", a: "Working code in your repository, documentation and a deployment you can run without me." }
  ],

  achievements: [
    "Best Project Award, EE Department, IIT Bombay, for the RFID attendance system (among 200 students).",
    "Mentored a team of 6 students on an AI project in Summer of Science '23.",
    "Mentor, College Reach program (2022)."
  ],

  approach: [
    { t: "Validate at the boundaries", d: "Check data when it enters and before it leaves. Bad inputs stop early, not in a client deck." },
    { t: "Make failures loud", d: "Silent errors are the expensive ones. Fail with a clear message instead of a plausible wrong number." },
    { t: "Idempotent and re-runnable", d: "Any run can be repeated safely, so recovery is a re-run, not a rescue." },
    { t: "Ship the package, not the script", d: "Deliver finished, versioned outputs through CI/CD that people can use without knowing the code." }
  ],
  flow: ["Sources", "Ingest", "Validate", "Transform", "Package", "Deliver"],

  cta: {
    title: "Got messy reporting? Let's fix it for good.",
    text: "Tell me what you produce every month and how much of it is still manual. I'll tell you what to automate first.",
    note: "Freelance work is independent of my employer. Nothing on this site contains client or proprietary data."
  }
};
