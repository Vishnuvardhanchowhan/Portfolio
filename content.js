// Main portfolio content. Keep the wording factual and the examples high-level.
export const C = {
  name: "Vishnuvardhan Chowhan",
  word: "SYSTEMS",
  role: "PYTHON DATA ENGINEER · FINANCIAL DATA & ANALYTICS",
  core: ["Python", "SQL", "Power BI"],
  pitch: "I work with Python, SQL and financial data to build reporting workflows, dashboards and useful internal tools. My work covers the full process, from preparing the data to delivering something people can use.",

  links: {
    email: "mailto:vishnuvardhan.chowhan@gmail.com",
    phone: "tel:+917036363267", phoneText: "+91 70363 63267",
    linkedin: "https://www.linkedin.com/in/vishnu-vardhan-chowhan/",
    github: "https://github.com/Vishnuvardhanchowhan",
    archive: "https://vishnuvardhanchowhan.github.io",
    resume: ""
  },

  nav: [["home","Home"],["offer","Services"],["about","About"],["projects","Work"],["matrix","Stack"],["process","Process"],["faq","FAQ"],["contact","Contact"]],

  stats: [
    { pre: "~", to: 400, label: "people use a dashboard I built" },
    { to: 3, label: "database platforms connected" },
    { to: 200, suf: "K+", label: "rows in a quarterly workflow" },
    { to: 2, suf: "M+", label: "SKUs tracked in a past project" }
  ],

  offer: {
    title: "What I work on",
    clients: "Investment teams, financial services firms and businesses with recurring data or reporting work.",
    items: [
      { t: "Financial dashboards", d: "I build dashboards that bring data together and make it easier to review performance, compare results and spot changes. I pay attention to the data behind the charts as much as the visuals.", tags: ["Power BI", "Streamlit", "Plotly"] },
      { t: "Reporting and PowerPoint automation", d: "I automate recurring reports and presentations, including the data refresh and updates to charts and tables. The aim is to spend less time assembling slides and more time reviewing the information.", tags: ["Python", "PowerPoint automation", "SQL"] },
      { t: "Data pipelines and integration", d: "I use Python and SQL to bring data from different sources into a consistent format for analysis, dashboards and reporting.", tags: ["Python", "Snowflake", "SQL Server", "PostgreSQL"] },
      { t: "Data checks and reconciliation", d: "I build checks into the workflow to catch missing, duplicated or inconsistent data before it reaches the final report or dashboard.", tags: ["Data validation", "Reconciliation", "Quality checks"] },
      { t: "Custom analytics tools", d: "When a spreadsheet or standard dashboard is not enough, I build small tools that make a specific reporting or analysis task easier to run.", tags: ["Python", "Streamlit", "Excel"] }
    ]
  },

  about: {
    eyebrow: "// ABOUT_ME",
    title: "A little about me",
    quote: "I enjoy figuring out how to get from raw data to a report people can use.",
    tagline: "Most of my work sits between data, analysis and reporting.",
    body: "Most of my work sits between data engineering and financial reporting. I bring information together from different sources, prepare it for analysis, build dashboards and automate recurring presentations. I also build checks into those workflows so the outputs can be reviewed with confidence. Before this, I worked as a Data Analyst at Bintix, building reporting and analytics tools for FMCG data. I studied Electrical Engineering at IIT Bombay and moved towards data work through projects and hands-on experience.",
    cards: [
      { t: "Start with the data", d: "I want to understand where the numbers come from before deciding how to present them." },
      { t: "Check the output", d: "I build validation and reconciliation into the workflow, not as a last-minute step." },
      { t: "Keep it practical", d: "The result should be clear to use and straightforward for someone else to maintain." }
    ],
    beyond: "Away from work, I enjoy photography, weightlifting, movies and web series.",
    photo: "assets/og-image.jpg"
  },

  experience: [
    {
      role: "Junior Quantitative Analyst, Multi-Assets", org: "Invesco",
      when: "Nov 2025 - Present", place: "Hyderabad · Hybrid",
      points: [
        "Build Python and SQL workflows that prepare data from multiple sources for financial analysis and reporting.",
        "Develop dashboards and automate recurring PowerPoint reports, including data refreshes, chart and table updates, and output checks.",
        "Work across the process, from source data and calculations through to the finished report or dashboard."
      ]
    },
    {
      role: "Data Analyst", org: "Bintix",
      when: "Jun 2024 - Nov 2025", place: "Hyderabad · On-site",
      points: [
        "Worked with FMCG resale data to study product performance, market activity and business trends.",
        "Built Python and VBA tools for data preparation, KPI reporting and product categorisation.",
        "Presented findings through dashboards and presentations for business teams."
      ]
    },
    {
      role: "Data Scientist Intern", org: "Kotak Mahindra Bank",
      when: "Dec 2022 - Jan 2023", place: "Thane",
      points: ["Built an email classification workflow using the Salesforce Einstein API. It sorted messages into three categories and improved classification accuracy by about 25%, while reducing manual sorting by about 40%."]
    },
    {
      role: "B.Tech, Electrical Engineering", org: "IIT Bombay",
      when: "2020 - 2024", place: "Mumbai",
      points: ["Received the EE Department's Best Project Award for an RFID attendance system."]
    }
  ],

  tracks: [
    {
      id: "asset", name: "Financial data and reporting",
      blurb: "A few examples of the data and reporting work I do, described at a general level.",
      cards: [
        { tag: "Production · Dashboard", title: "Financial analytics dashboard",
          problem: "Teams needed a consistent place to review financial data and compare results.",
          approach: "Built the Python and SQL data preparation behind an interactive dashboard. It brings together information from different sources and presents analysis in clear views, with checks on the data before it reaches the dashboard.",
          impact: "Used by around 400 people across the organisation.",
          stats: [{ pre: "~", to: 400, label: "internal users" }],
          stack: ["Python", "SQL", "Power BI", "Data validation"] },
        { tag: "Production · Reporting", title: "PowerPoint reporting automation",
          problem: "Recurring presentations took time to prepare because data, charts and tables had to be updated each cycle.",
          approach: "Automated the reporting process in Python. It pulls refreshed data from SQL Server, Snowflake and PostgreSQL, then updates the relevant charts and tables in the presentation. There is very little manual spreadsheet work in the process, and checks are run on the outputs.",
          impact: "One workflow supports recurring presentations on different reporting schedules.",
          stack: ["Python", "PowerPoint automation", "SQL Server", "Snowflake", "PostgreSQL"] },
        { tag: "Production · Data workflows", title: "Data refresh and reconciliation",
          problem: "Data from several sources needs to be checked and brought into a consistent format before teams can use it.",
          approach: "Built recurring Python and SQL workflows to collect, transform and reconcile data before it is passed to reports, dashboards and shared workbooks.",
          impact: "One quarterly workflow processes more than 200K rows.",
          stats: [{ to: 200, suf: "K+", label: "rows in a quarterly refresh" }],
          stack: ["Python", "SQL", "Reconciliation", "Quality checks"] }
      ]
    },
    {
      id: "scale", name: "FMCG analytics and personal projects",
      blurb: "Earlier analytics work, along with a few tools I have built for my own use.",
      cards: [
        { tag: "Production · Bintix", title: "KPI reporting dashboard",
          problem: "Preparing different versions of recurring reports involved repeating the same data work.",
          approach: "Built a Streamlit dashboard with shared Python and Pandas components to prepare KPI reports in a consistent format.",
          impact: "Made recurring report preparation easier to run and update.",
          stack: ["Python", "Streamlit", "Pandas"] },
        { tag: "Production · Bintix", title: "New Launch Tracker",
          problem: "Keeping track of new products across a large catalogue was difficult to do manually.",
          approach: "Built a Python ETL workflow and dashboard to monitor product activity across catalogues and locations.",
          impact: "Tracked more than 2M SKUs across six metro areas.",
          stats: [{ to: 2, suf: "M+", label: "SKUs" }, { to: 6, label: "metro areas" }],
          stack: ["Python", "ETL", "Dashboarding"] },
        { tag: "Production · Bintix", title: "Barcode scan data cleaning",
          problem: "Repeated barcode scans could lead to duplicate records in the analysis.",
          approach: "Used Python and SQL to identify and remove duplicate scans before the data was used for reporting.",
          impact: "Cleaner inputs for downstream analysis.",
          stack: ["Python", "SQL", "Data cleaning"] },
        { tag: "Prototype · Bintix", title: "Dataset insights and slide-title tool",
          problem: "Writing a first set of observations and slide titles from raw data took time.",
          approach: "Built a small Python tool using the Gemini API to help draft short observations and presentation titles from FMCG datasets.",
          impact: "A starting point for turning analysis into presentation-ready notes.",
          stack: ["Python", "Gemini API", "NLP"] },
        { tag: "Personal project", title: "Wealth projection model",
          problem: "I wanted a clearer view of how changes to savings and assumptions could affect a long-term plan.",
          approach: "Built an Excel model with separate input, calculation, monthly and yearly summary sheets. Assumptions such as inflation, salary growth, expected return and savings rate can be changed from one place.",
          impact: "The projections update when an assumption changes, without editing the formulas.",
          stack: ["Excel", "Financial modelling", "Scenario analysis"] },
        { tag: "Personal project", title: "Expense tracker",
          problem: "Transaction information was spread across emails and downloaded statements.",
          approach: "Built a Python app that reads transaction emails, parses the details and combines them with CSV statements. A scheduled GitHub Actions workflow refreshes the data.",
          impact: "A personal dashboard for keeping track of spending.",
          stack: ["Python", "Streamlit", "Gmail OAuth", "GitHub Actions"],
          link: "https://github.com/Vishnuvardhanchowhan/expense_tracker" },
        { tag: "Personal project", title: "Mobile-first family finance dashboard",
          problem: "I wanted a finance dashboard that was comfortable to use on a phone.",
          approach: "Built a Streamlit interface with bottom navigation and custom HTML and CSS components for a smaller screen.",
          impact: "A mobile-first view for family finance tracking.",
          stack: ["Streamlit", "HTML", "CSS", "Mobile-first design"],
          note: "Private project, no public link." }
      ]
    },
    {
      id: "foundation", name: "Engineering foundation",
      blurb: "Selected university projects from my time at IIT Bombay.",
      cards: [
        { tag: "Best Project Award", title: "RFID attendance management system",
          problem: "Manual attendance takes time and can be error-prone.",
          approach: "Built an RFID attendance system using an MFRC522 reader, a TIVA-C microcontroller and a custom Eagle PCB with a trace antenna.",
          impact: "Recorded about 95% accuracy and received the EE Department's Best Project Award among 200 students.",
          stats: [{ pre: "~", to: 95, suf: "%", label: "accuracy" }],
          stack: ["TIVA-C", "MFRC522", "Eagle PCB"] },
        { tag: "Applied machine learning", title: "Computer vision and classification projects",
          problem: "Course projects covering image classification, medical image segmentation and gesture recognition.",
          approach: "Worked with VGG16 and traditional classifiers, U-Net with watershed segmentation, and a fine-tuned YOLOv5s model with a Gradio interface.",
          impact: "Hands-on experience training and evaluating models across different tasks.",
          stack: ["PyTorch", "TensorFlow", "Keras", "YOLOv5"] },
        { tag: "Digital and embedded systems", title: "Processor, radio and robotics projects",
          problem: "Practical projects across digital design, communications and control systems.",
          approach: "Built a 16-bit multi-cycle processor in VHDL, explored FSK modulation in GNU Radio, and worked on ESP32 and PID-based robotics projects.",
          impact: "A mix of hardware, software and control systems work.",
          stack: ["VHDL", "GNU Radio", "ESP32", "PID control"] }
      ]
    }
  ],

  matrix: [
    { t: "Financial analytics", c: ["Performance analysis", "Attribution", "Benchmark comparison", "Risk analysis", "Asset allocation", "Rebalancing"] },
    { t: "Data engineering", c: ["Python", "SQL", "ETL", "Data transformation", "Multi-source integration", "Validation and reconciliation"] },
    { t: "Dashboards and reporting", c: ["Power BI", "Streamlit", "Plotly", "Tableau", "Excel", "PowerPoint automation", "Think-cell"] },
    { t: "Automation and tools", c: ["Git", "GitHub Actions", "VBA", "Selenium", "Gmail OAuth", "Python automation"] },
    { t: "Machine learning", c: ["PyTorch", "TensorFlow", "scikit-learn", "NLP", "Gemini API", "Salesforce Einstein"] }
  ],

  process: [
    { t: "Understand the task", d: "First I look at what needs to be produced, who uses it and where the current process takes time." },
    { t: "Map the data", d: "I check the source data, how it is structured and what needs to be reconciled." },
    { t: "Build the workflow", d: "Then I put together the data steps, calculations and final output in a way that can be run again." },
    { t: "Check the result", d: "I compare outputs with known figures and check for missing or inconsistent data." },
    { t: "Make it easy to use", d: "I leave the code and instructions clear enough for someone else to run and maintain." }
  ],

  faq: [
    { q: "Can I see real company data?", a: "No. The examples here describe the type of work without showing internal data or systems. Any demos I share use sample data." },
    { q: "What kind of work interests you?", a: "Python and SQL data workflows, financial dashboards, reporting automation and tools that make recurring analysis easier." },
    { q: "Which tools do you use most?", a: "Python, SQL and Power BI are the tools I use most. I have also worked with Snowflake, SQL Server, PostgreSQL and Streamlit." },
    { q: "How do you approach handover?", a: "I try to leave the code organised and include the notes someone needs to understand how the workflow runs." }
  ],

  achievements: [
    "Best Project Award, EE Department, IIT Bombay, for the RFID attendance system among 200 students.",
    "Mentored a team of 6 students on an AI project in Summer of Science '23.",
    "Mentor, College Reach program (2022)."
  ],

  approach: [
    { t: "Check the data", d: "I check the inputs and the finished output, so issues are easier to catch before someone uses the result." },
    { t: "Make errors clear", d: "When something goes wrong, the message should help identify what needs attention." },
    { t: "Make reruns safe", d: "A workflow should be possible to run again without creating duplicates or damaging a previous result." },
    { t: "Keep it maintainable", d: "I prefer clear code and useful notes over a solution that only its original author can operate." }
  ],
  flow: ["Sources", "Ingest", "Validate", "Transform", "Package", "Deliver"],

  cta: {
    title: "Want to talk about a project?",
    text: "For professional conversations, technical questions or project enquiries, email is the best way to reach me. You can also find me on LinkedIn.",
    note: ""
  }
};
