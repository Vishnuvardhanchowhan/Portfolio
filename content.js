// ALL site content lives here. Edit text, roles, projects and links in this file only.
//
// Rules I followed:
// - Numbers appear only where your CVs or LinkedIn give them.
// - A card field left as "" is hidden by the renderer (Part 4), so thin sources never get padded.
// - Lines marked "framing" are my wording of a goal or problem, not a quoted fact. Please check them.

export const C = {
  name: "Vishnuvardhan Chowhan",
  word: "SYSTEMS",
  role: "QUANT ANALYST · DATA ENGINEERING",
  pitch: "A deliberate systems builder who turns messy, recurring reporting work into reliable, automated pipelines: architecture, validation, CI/CD and delivery, owned end to end.",

  links: {
    email: "mailto:vishnuvardhan.chowhan@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishnu-vardhan-chowhan/",
    github: "https://github.com/Vishnuvardhanchowhan",
    archive: "https://vishnuvardhanchowhan.github.io",
    resume: "" // TODO: set to "assets/resume.pdf" once the file exists; the button is hidden while empty
  },

  nav: [
    ["home", "Home"], ["about", "About"], ["experience", "Experience"],
    ["projects", "Projects"], ["matrix", "Systems"], ["approach", "Approach"], ["contact", "Contact"]
  ],

  // Hero stat pills and the bottom status bar. True numbers only.
  stats: [
    { to: 2, suf: "M+", label: "SKUs tracked" },
    { to: 6, label: "metros covered" },
    { pre: "~", to: 90, suf: "%", label: "manual work cut" },
    { to: 0.894, dec: 3, label: "ensemble AUC" },
    { to: 1, label: "Best Project Award" }
  ],

  about: {
    eyebrow: "// ABOUT_ME",
    title: "Background & Philosophy",
    quote: "A script solves today's task. A system makes it boring forever.",
    tagline: "Tech enthusiast interested in AI, ML, IoT and EE.",
    body: "I'm an Electrical Engineering graduate from IIT Bombay (2024) who found my home in reporting and data engineering. I like recurring, error-prone work because it rewards real engineering: clear architecture, checks at every boundary, and outputs people can trust without thinking about them.",
    cards: [
      { t: "Systems over scripts", d: "Pipelines with validation, tests and deployment, not one-off notebooks." },
      { t: "End-to-end ownership", d: "From data sources to packaged, delivery-ready output." },
      { t: "Hardware roots", d: "Circuits, microprocessors and embedded work shaped how I debug." }
    ],
    beyond: "Beyond code: photography, weightlifting, movies and web series.",
    photo: "" // TODO: set to "assets/me.jpg"; a labelled placeholder shows while empty
  },

  experience: [
    {
      role: "Junior Quantitative Analyst, Multi-Assets", org: "Invesco",
      when: "Nov 2025 – Present", place: "Hyderabad · Hybrid",
      points: [
        "Own the full automation lifecycle for reporting and presentation workflows across model portfolios and global strategies.",
        "Blend data engineering, BI dashboards, Python CI/CD pipelines and reporting automation.",
        "Build and maintain the whole codebase, from architecture to deployment: multi-source integration, validation accuracy and packaged outputs."
      ]
    },
    {
      role: "Data Analyst", org: "Bintix",
      when: "Jun 2024 – Nov 2025", place: "Hyderabad · On-site",
      points: [
        "Analytics on waste/resale datasets for leading FMCG brands: market trends, product performance, growth opportunities.",
        "Automated data prep, KPI reporting and categorization with Python and VBA.",
        "Turned findings into boardroom-ready presentations and dynamic dashboards."
      ]
    },
    {
      role: "Data Scientist Intern", org: "Kotak Mahindra Bank",
      when: "Dec 2022 – Jan 2023", place: "Thane",
      points: [
        "Automated email triage across 3 categories with the Salesforce Einstein API: ~25% better classification accuracy, ~40% less manual sorting."
      ]
    },
    {
      role: "B.Tech, Electrical Engineering", org: "IIT Bombay",
      when: "2020 – 2024", place: "Mumbai",
      points: ["Best Project Award from the EE Department for the RFID attendance system."]
    }
  ],

  // Three tracks. Each card: tag, title, problem, approach, impact, stack, and optionally stats / link / note.
  tracks: [
    {
      id: "automation",
      name: "Production Automation & Data Engineering",
      blurb: "The work that shows how I think: pipelines, validation, delivery.",
      cards: [
        {
          tag: "Production · Invesco", title: "Reporting automation platform",
          problem: "Recurring portfolio reporting was manual, slow and easy to get subtly wrong.",
          approach: "Python pipelines pulling from multiple sources, validation layers, Power BI dashboards, CI/CD and packaged delivery.",
          impact: "Repeatable, validated, delivery-ready outputs instead of hand-built decks.",
          stack: ["Python", "Power BI", "CI/CD", "Data engineering"]
        },
        {
          tag: "Production · Bintix", title: "Modular KPI dashboard",
          problem: "Multi-format, geography-specific client reports ate analyst hours.",
          approach: "A modular Streamlit app on Pandas that automates each report variant from shared building blocks.",
          impact: "Manual reporting work cut by about 90%.",
          stats: [{ pre: "~", to: 90, suf: "%", label: "manual work cut" }],
          stack: ["Python", "Streamlit", "Pandas"]
        },
        {
          tag: "Production · Bintix", title: "Brand & consumer-journey dashboards",
          problem: "Brand teams needed to see how shoppers choose, return and overlap across brands.", // framing
          approach: "Interactive Streamlit + Plotly dashboards covering brand saliency, repeat purchase behavior and market overlap.",
          impact: "Findings delivered as dynamic dashboards and boardroom-ready presentations.",
          stack: ["Streamlit", "Plotly", "Python"]
        },
        {
          tag: "Production · Bintix", title: "New Launch Tracker",
          problem: "Spotting new product launches across huge catalogs by hand doesn't scale.", // framing
          approach: "A dashboard on top of a Python ETL pipeline that monitors product launches.",
          impact: "Tracks launches across 2M+ SKUs and 6 metros.",
          stats: [{ to: 2, suf: "M+", label: "SKUs" }, { to: 6, label: "metros" }],
          stack: ["Python", "ETL", "Dashboarding"]
        },
        {
          tag: "Production · Bintix", title: "Barcode scan de-duplication",
          problem: "Redundant barcode scans caused double-counting in analysis.",
          approach: "A Python + SQL data-cleaning solution that removes the redundant scans.",
          impact: "About 30% better analysis accuracy.",
          stats: [{ pre: "~", to: 30, suf: "%", label: "accuracy gain" }],
          stack: ["Python", "SQL"]
        },
        {
          tag: "Production · Bintix", title: "AI product-image scraper",
          problem: "Product image databases need clean, correct images, and scraped ones are noisy.", // framing
          approach: "An AI-powered scraper that extracts clean product images from e-commerce platforms and validates each against its barcode.",
          impact: "95% validation accuracy and about 30% better image database integrity.",
          stats: [{ to: 95, suf: "%", label: "accuracy" }, { pre: "~", to: 30, suf: "%", label: "integrity gain" }],
          stack: ["Python", "Web scraping", "AI", "Barcode validation"]
        },
        {
          tag: "Production · Bintix", title: "Gemini insights & slide-title tool",
          problem: "Turning FMCG datasets into concise, context-specific takeaways was slow, manual writing.", // framing
          approach: "An NLP tool on the Gemini 2.5 API that generates insights and slide titles from FMCG datasets.",
          impact: "Raw datasets become ready-to-use insights and slide titles.",
          stack: ["Gemini 2.5 API", "NLP", "Python"]
        },
        {
          tag: "Systems I build for myself", title: "Expense tracker",
          problem: "Bank statements arrive late, while transaction emails arrive instantly but in messy templates.",
          approach: "Gmail OAuth ingests Axis Bank transaction emails. A fallback-chain regex parser handles multiple templates, and results merge with local CSV statements into a master CSV. GitHub Actions refreshes it daily.",
          impact: "A self-updating personal finance dashboard. Lessons: layered data sources, silent-failure bugs (DD-MM-YYYY dates parsed without dayfirst=True), secrets handling, CI debugging.",
          stack: ["Streamlit", "Gmail OAuth", "Regex parsing", "GitHub Actions", "Python"],
          link: "https://github.com/Vishnuvardhanchowhan/expense_tracker"
        },
        {
          tag: "Systems I build for myself", title: "Mobile-first family finance dashboard",
          problem: "Finance views built for desktop don't hold up on a phone.", // framing
          approach: "A dark fintech theme with bottom tab navigation, and custom HTML/CSS widgets so charts stay mobile-safe.",
          impact: "A dashboard designed for phone use first.",
          stack: ["Streamlit", "Custom HTML/CSS", "Mobile-first UI"],
          note: "Private: it holds family financial data, so there is no link." // Stack: Streamlit is my assumption from your other dashboards. TODO: confirm.
        }
      ]
    },
    {
      id: "ml",
      name: "ML & AI",
      blurb: "IIT Bombay coursework and projects.",
      cards: [
        {
          tag: "ML · Audio", title: "Music Genre Classifier",
          problem: "Classify music genres from audio.", // framing
          approach: "Four classic ML classifiers plus VGG16 on audio spectrograms, combined into an ensemble (AudioSet).",
          impact: "Ensemble AUC of 0.894.",
          stats: [{ to: 0.894, dec: 3, label: "AUC" }],
          stack: ["Python", "scikit-learn", "VGG16", "AudioSet"]
        },
        {
          tag: "ML · Vision", title: "Nucleus Segmentation",
          problem: "Separate individual cell nuclei in microscopy images.", // framing
          approach: "A U-Net (TensorFlow/Keras) trained on MoNuSeg, followed by watershed.",
          impact: "0.70 precision.",
          stats: [{ to: 0.7, dec: 2, label: "precision" }],
          stack: ["TensorFlow", "Keras", "U-Net", "Watershed", "MoNuSeg"]
        },
        {
          tag: "ML · Vision", title: "Face recognition with Siamese networks",
          problem: "Decide whether two face images show the same person.", // framing
          approach: "A Siamese network scored with cosine similarity, with data augmentation and a pretrained ImageNet backbone.",
          impact: "",
          stack: ["Siamese networks", "Cosine similarity", "ImageNet backbone", "Augmentation"]
        },
        {
          tag: "ML · Time series", title: "LSTM stock price predictor",
          problem: "Predict stock prices from historical data.", // framing
          approach: "An LSTM-based model for stock price prediction.",
          impact: "",
          stack: ["LSTM", "Python"]
        },
        {
          tag: "ML · Vision", title: "Hand gesture recognizer",
          problem: "Recognize alphabet hand gestures from camera input.", // framing
          approach: "YOLOv5s fine-tuned on 21 alphabet gestures, with a Gradio UI.",
          impact: "Recall of 0.85.",
          stats: [{ to: 0.85, dec: 2, label: "recall" }],
          stack: ["YOLOv5s", "Gradio", "Python"]
        },
        {
          tag: "ML · NLP", title: "Sentiment analyser",
          problem: "Classify the sentiment of movie reviews.", // framing
          approach: "An RNN/LSTM model trained on movie reviews.",
          impact: "",
          stack: ["RNN", "LSTM", "NLP"]
        },
        {
          tag: "ML · Vision", title: "Satellite image corner detection",
          problem: "Find corners in satellite imagery.", // framing
          approach: "Harris corner detection with a Tkinter GUI.",
          impact: "",
          stack: ["Harris corner detection", "Tkinter", "Python"]
        }
      ]
    },
    {
      id: "hardware",
      name: "Hardware & Systems",
      blurb: "Where I learned to debug from the signal up.",
      cards: [
        {
          tag: "Best Project Award", title: "RFID attendance management system",
          problem: "Taking attendance by hand is slow and error-prone.", // framing
          approach: "An MFRC522 reader with a TIVA-C microcontroller and a custom Eagle PCB with a trace antenna and a QFN board.",
          impact: "About 95% accuracy. Won the EE Department's Best Project Award among 200 students.",
          stats: [{ pre: "~", to: 95, suf: "%", label: "accuracy" }, { to: 1, label: "Best Project Award" }],
          stack: ["TIVA-C", "MFRC522", "Eagle PCB", "Embedded C"]
        },
        {
          tag: "Digital design", title: "IITB-RISC microprocessor",
          problem: "Design a working processor from the instruction set up.", // framing
          approach: "A 16-bit multi-cycle processor in VHDL with 8 registers, R/I/J instruction formats and 17 instructions.", // 17 per CV; old site says 16. TODO: confirm.
          impact: "",
          stack: ["VHDL", "Quartus", "Multi-cycle design"]
        },
        {
          tag: "B.Tech project", title: "FSK modulation & demodulation",
          problem: "Move digital data over a radio link.", // framing
          approach: "Frequency-shift keying modulation and demodulation built in GNU Radio.",
          impact: "",
          stack: ["GNU Radio", "FSK", "Signal processing"]
        },
        {
          tag: "Competition · XLR8", title: "ESP32 RC bot",
          problem: "Drive a competition bot precisely from a remote.", // framing
          approach: "An RC bot on an ESP32 with differential steering, built for the XLR8 competition.",
          impact: "",
          stack: ["ESP32", "Differential steering", "Embedded"]
        },
        {
          tag: "Robotics", title: "PID line-follower bot",
          problem: "Keep a robot on a line smoothly at speed.", // framing
          approach: "A line-follower bot controlled with a PID loop.",
          impact: "",
          stack: ["PID control", "Embedded C"]
        },
        {
          tag: "Embedded", title: "8051 microcontroller projects",
          problem: "",
          approach: "Microcontroller projects written in 8051 assembly and developed in Keil.",
          impact: "",
          stack: ["8051", "Assembly", "Keil"]
        },
        {
          tag: "VLSI", title: "Dadda multiplier & Brent-Kung adder",
          problem: "Make arithmetic circuits fast and area-efficient.", // framing
          approach: "VLSI designs of a Dadda multiplier and a Brent-Kung adder.",
          impact: "",
          stack: ["VLSI", "Dadda multiplier", "Brent-Kung adder"]
        },
        {
          tag: "IoT experiments", title: "Ambient and audio-reactive LEDs",
          problem: "",
          approach: "Arduino/ESP32 experiments in ambient LED lighting and audio-reactive LEDs.",
          impact: "",
          stack: ["Arduino", "ESP32", "LEDs"]
        }
      ]
    }
  ],

  matrix: [
    { t: "Languages", c: ["Python", "SQL/MySQL", "C/C++", "VBA", "VHDL", "Assembly (8051)", "LaTeX"] },
    { t: "Data & BI", c: ["Pandas", "NumPy", "Streamlit", "Plotly", "Power BI", "Tableau", "Excel", "Think-cell"] },
    { t: "Automation & Engineering", c: ["Python pipelines", "ETL", "GitHub", "GitHub Actions CI/CD", "Selenium web scraping", "Gmail OAuth"] },
    { t: "ML / AI", c: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "NLP", "Gemini API", "Salesforce Einstein", "YOLOv5"] },
    { t: "Hardware", c: ["Embedded C", "Arduino", "ESP32", "Eagle", "Quartus", "Keil", "Fusion 360", "SolidWorks", "NgSpice"] }
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
    title: "Let's build something reliable.",
    text: "Open to conversations about data engineering, reporting automation and quant tooling."
  }
};