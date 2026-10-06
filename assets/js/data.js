/* ==========================================================
   EDIT YOUR CONTENT HERE. Everything on the site comes from this file
   (except the page headings and the SEO tags in index.html).
   Keep the quotes and commas exactly as they are.
   ========================================================== */
const portfolioData = {
  name: "Prince Ubong Ebong",
  title: "IT Business Analyst | Project Manager | Data Improvement Analyst",
  location: "Lagos, Nigeria",
  tagline: "Bridging Business, Technology, and Data to Build Better Processes, Smarter Decisions, and Practical Digital Solutions.",
  shortBio: "IT Business Analyst, Project Manager, and Data Improvement Analyst with 8+ years of experience across project delivery, business analysis, process improvement, data analysis, and digital solutions. I understand business problems, improve processes, analyse data, and turn business needs into practical solutions.",
  about: [
    "I began my project management journey in 2018 and have since taken on blended project delivery and Business Analysis responsibilities. That lets me work on both the strategic and the operational side of a business problem.",
    "I have worked in public-sector skills development, education technology, and technology training, and have supported organisations remotely through consulting engagements in the UK and US. I have also trained and mentored 500+ technology professionals and developers.",
    "My approach: define the problem clearly, engage stakeholders, analyse the process and the data, identify the gaps, document the requirements, and recommend a solution that improves how the organisation operates."
  ],
  highlights: [
    { value: "8+", label: "Years of professional experience" },
    { value: "500+", label: "Technology professionals mentored" },
    { value: "BA", label: "Business Analysis" },
    { value: "PM", label: "Project Management" },
    { value: "Data", label: "Data & process improvement" }
  ],
  profileImage: "assets/images/profile.jpg",
  email: "princemichael612@gmail.com", // Your contact email. Leave empty to show a placeholder.
  phone: "", // Optional. Leave empty to hide.
  linkedin: "https://www.linkedin.com/in/ubong-ebong-016931175",
  github: "https://github.com/UbongAlanpoza001",
  resume: "assets/documents/Prince-Ubong-Ebong-CV.pdf",
  resumeText: "Download CV",
  formspreeEndpoint: "https://formspree.io/f/xnpjjnyg",

  skills: {
    "Business Analysis": ["Requirements Gathering & Elicitation", "Requirements Analysis & Documentation", "Stakeholder Analysis & Management", "Business Requirements Documentation", "Functional Requirements", "User Stories", "Acceptance Criteria", "Process Mapping", "As-Is / To-Be Process Analysis", "Gap Analysis", "Root Cause Analysis", "Business Process Improvement", "Business Case Analysis", "SDLC", "UAT Support", "Issue Analysis & Resolution", "Requirements Traceability", "Solution Evaluation", "Business Problem Definition", "Solution Recommendation"],
    "Data & Analytics": ["SQL", "PostgreSQL", "Microsoft Excel", "Power BI", "Data Cleaning", "Data Transformation", "Data Analysis", "Data Visualisation", "Dashboard Development", "KPI Analysis", "Operational Reporting", "Performance Analysis", "Trend Analysis", "Data-Driven Decision Support", "Business Intelligence"],
    "Tools": ["Microsoft Excel", "Power BI", "PostgreSQL", "pgAdmin", "Jira", "Confluence", "Trello", "Azure / Azure DevOps", "Draw.io", "Microsoft Office", "HTML", "CSS", "JavaScript"],
    "Methodologies": ["Agile", "Scrum", "Waterfall", "SDLC", "Business Process Management", "Process Improvement", "Continuous Improvement", "Project Management"],
    "Other Skills": ["Project Planning & Coordination", "Stakeholder Communication", "Technical Training & Mentorship", "Workshop Facilitation", "Technical Troubleshooting", "Documentation", "Knowledge Management", "Digital Product Planning", "Website Design", "Customer / Participant Journey Analysis", "Operational Improvement", "Remote Team Collaboration", "Cross-Functional Communication"]
  },

  experience: [
    {
      company: "10Alytics", role: "Technical Data Associate / Business Analyst", location: "Canada / Remote", period: "Present",
      description: "A data and strategic learning organisation. I support technology professionals and contribute to business analysis, participant journey improvement, technical support, learning operations, and data-driven process improvement.",
      responsibilities: [
        "Support participants across Business Analysis, Data Analytics, and related technology learning journeys.",
        "Analyse participant and operational issues to identify root causes and practical resolutions.",
        "Identify process gaps affecting bookings, attendance, session access, and issue resolution.",
        "Use operational information, feedback, and performance data to support reporting and service improvement."
      ],
      achievements: [
        "Mentored and supported 500+ technology professionals and developers across technology learning programmes.",
        "Contributed to identifying and documenting recurring participant-journey issues and operational pain points.",
        "Supported improvements to participant support processes through structured issue analysis, documentation, and recommendations.",
        "Contributed to operational reporting and performance analysis used to understand participant engagement and service delivery."
      ],
      impact: "Improved visibility into participant-journey challenges and supported more structured learning operations, issue resolution, and continuous service improvement.",
      tools: ["Excel", "Power BI", "PostgreSQL", "Jira", "Confluence", "Trello", "Microsoft Office"]
    },
    {
      company: "Imperial EduTech", role: "Project Manager", location: "Nigeria / UK", period: "2020 – 2022",
      description: "Managed and supported technology-enabled projects in an education-technology environment serving stakeholders across Nigeria and the UK, with a focus on coordination, process improvement, stakeholder management, and operational delivery.",
      responsibilities: [
        "Planned and coordinated project activities, timelines, deliverables, and stakeholder responsibilities.",
        "Monitored progress, risks, issues, dependencies, and outstanding actions.",
        "Coordinated communication between technical, operational, and business stakeholders.",
        "Translated project requirements and business needs into actionable tasks and delivery plans."
      ],
      achievements: [
        "Improved project structure and visibility through clearer planning, task coordination, documentation, and follow-up.",
        "Strengthened collaboration between business, operational, and technical stakeholders.",
        "Supported process improvements that made project activities more organised and easier to track.",
        "Developed practical experience managing projects across Nigeria and UK-facing environments."
      ],
      impact: "Strengthened project coordination, stakeholder alignment, process visibility, and delivery discipline across technology-enabled initiatives.",
      tools: ["Trello", "Jira", "Confluence", "Microsoft Excel", "Microsoft Office"]
    },
    {
      company: "Essential Cares International (in partnership with the Lagos State Government)", role: "Project Manager / IT Strategic Analyst", location: "Lagos, Nigeria", period: "2018 – 2020",
      description: "Supported skills-acquisition initiatives through project management, IT-focused analysis, operational improvement, stakeholder coordination, and event-management activities.",
      responsibilities: [
        "Coordinated project activities supporting skills-acquisition programmes and related events.",
        "Planned and tracked activities, deliverables, timelines, and responsibilities.",
        "Reviewed operational processes and identified opportunities to improve event planning and execution.",
        "Provided IT and strategic analysis perspectives to support technology-enabled operational improvements."
      ],
      achievements: [
        "Contributed to successful coordination of skills-acquisition and event-related activities.",
        "Helped improve structure and visibility of project and event-management processes.",
        "Gained experience in government-partnered programmes and multi-stakeholder environments.",
        "Built a foundation for the transition from Project Management into Business Analysis and process improvement."
      ],
      impact: "Supported structured project coordination, event management, stakeholder engagement, and operational processes within skills-acquisition initiatives.",
      tools: ["Microsoft Excel", "Microsoft Office", "Project Planning Tools", "Process Documentation"]
    }
  ],

  projects: [
    {
      id: "event-tracking", name: "Event Tracking & Customer Experience Website",
      tags: ["Business Analysis", "Digital Solutions", "Customer Experience"],
      short: "A digital event platform designed to centralise event information, improve customer interaction, track events, capture feedback, and provide a better understanding of customer satisfaction.",
      problem: "Event information, customer interaction, and satisfaction feedback can become fragmented when managed through disconnected channels. This makes it difficult to provide a consistent customer experience and understand feedback across the event lifecycle.",
      objective: "Design a user-focused digital platform that communicates event information clearly, supports event tracking, captures customer feedback, and creates a structured basis for analysing customer satisfaction.",
      role: "Business Analyst / Project Manager / Website Designer",
      tools: ["HTML", "CSS", "JavaScript", "Formspree", "Excel"],
      methodology: "Agile / User-Centred Design / Business Analysis",
      dataSource: "Event information, customer feedback, user interactions, and website form submissions",
      analysis: ["Identified key customer and business requirements for event discovery, information access, interaction, and feedback.", "Mapped the customer journey from discovering an event through engagement and post-event feedback.", "Structured information and feedback requirements around stages of the event lifecycle.", "Designed website structure to make information easier to access while supporting feedback collection.", "Considered how customer feedback could be analysed to identify recurring satisfaction issues and improvement opportunities."],
      findings: ["A centralised event experience improves information visibility and reduces fragmented customer interactions.", "Structured feedback collection provides a stronger basis for understanding customer satisfaction.", "Customer journey analysis helps identify opportunities to improve experience before, during, and after events."],
      recommendations: ["Maintain a centralised source of event information and updates.", "Use structured customer feedback to identify recurring issues and improvement opportunities.", "Monitor customer interactions and satisfaction trends to support continuous improvement."],
      outcome: "Functional portfolio project demonstrating the ability to translate customer and business requirements into a practical digital solution.",
      impact: "Demonstrates how Business Analysis, Project Management, website design, and customer-experience thinking can be combined to create a practical business solution.",
      image: "assets/images/project-01.jpg", imageAlt: "Event Tracking & Customer Experience Website project"
    },
    {
      id: "lms-process-tracker", name: "LMS Process & Participant Journey Tracker",
      tags: ["Business Analysis", "Process Improvement", "Data Analysis"],
      short: "Structured operational tracking solution designed to improve visibility across participant status, engagement, bookings, attendance, issue resolution, and follow-up.",
      problem: "Learning operations can become difficult to monitor when participant activity, bookings, attendance, engagement, and support issues are tracked across multiple operational touchpoints.",
      objective: "Create a structured process and tracking approach that provides clearer visibility into participant journeys, highlights potential risks, and supports more consistent operational follow-up.",
      role: "Business Analyst / Data Improvement Analyst / Project Support",
      tools: ["Excel", "Power BI", "PostgreSQL", "Jira", "Confluence"],
      methodology: "Agile / Business Process Management / Continuous Improvement",
      dataSource: "Participant records, booking information, attendance data, engagement information, issue logs, feedback, operational reports",
      analysis: ["Reviewed participant journey stages and identified key points where issues could occur.", "Defined operational categories for participant status, engagement, attendance, support issues, and follow-up.", "Analysed participant and operational information to identify patterns, gaps, and areas requiring attention.", "Structured KPI and reporting requirements to improve visibility into operational performance.", "Translated recurring operational issues into process recommendations and clearer support guidance."],
      findings: ["Participant journeys are easier to manage when status and operational information are consistently structured.", "Clear tracking of attendance, engagement, and support issues helps teams identify participants requiring attention.", "Operational data can provide useful insight for improving participant experience and service delivery."],
      recommendations: ["Maintain a centralised participant tracking structure.", "Use clearly defined status categories and operational KPIs.", "Create clearer guidance for recurring participant issues.", "Use regular reporting to identify process gaps and improvement opportunities."],
      outcome: "Structured Business Analysis and data-improvement case study demonstrating how operational data can be translated into process visibility and actionable recommendations.",
      impact: "Improves operational visibility and supports consistent participant support, follow-up, and process improvement.",
      image: "assets/images/project-02.jpg", imageAlt: "LMS Process & Participant Journey Tracker project"
    },
    {
      id: "sales-analysis", name: "Sales Performance & Decision Support Analysis",
      tags: ["Data Analysis", "Business Intelligence", "Decision Support"],
      short: "Data-analysis project focused on transforming sales data into meaningful performance insights and recommendations for business decision-making.",
      problem: "Sales teams need clear visibility into performance trends, product/customer behaviour, and areas requiring management attention, but raw transactional data can be difficult to interpret without structured analysis.",
      objective: "Analyse sales data, develop KPIs, identify performance patterns, and translate findings into actionable recommendations.",
      role: "Data Analyst / Business Analyst",
      tools: ["Microsoft Excel", "SQL", "PostgreSQL", "Power BI"],
      methodology: "Data Analysis Lifecycle / Business Intelligence / KPI Analysis",
      dataSource: "Sales transactions, customer records, product information, order information, revenue and performance data",
      analysis: ["Cleaned and structured sales data.", "Used SQL to query and investigate business questions.", "Analysed performance across products, customers, periods, and locations.", "Developed KPIs and dashboards.", "Identified trends, patterns, and areas requiring attention.", "Translated findings into business recommendations."],
      findings: ["Structured sales analysis makes it easier to identify high- and low-performing areas.", "KPI-driven reporting provides a clearer view of business performance.", "Combining SQL with visual reporting improves communication of insights."],
      recommendations: ["Monitor core sales KPIs regularly.", "Investigate significant changes in sales performance and customer behaviour.", "Use dashboard reporting for management reviews.", "Link sales insights to commercial and operational decisions."],
      outcome: "Complete data-analysis case study from raw data through SQL and visualisation to business recommendations.",
      impact: "Provides decision-support insight to help stakeholders understand sales performance and prioritise areas for investigation.",
      image: "assets/images/project-03.jpg", imageAlt: "Sales Performance & Decision Support Analysis project"
    },
    {
      id: "process-improvement", name: "Business Process Improvement & Workflow Optimisation",
      tags: ["Business Analysis", "Process Improvement", "Project Management"],
      short: "Process-improvement initiative focused on analysing an existing workflow, identifying operational gaps, and designing a clearer future-state process.",
      problem: "Teams can lose time and experience errors through unclear responsibilities, duplicated activities, inconsistent hand-offs, and limited process visibility.",
      objective: "Analyse the current process, identify bottlenecks and gaps, define improvement requirements, and design a future-state workflow.",
      role: "Business Analyst / Project Manager",
      tools: ["Draw.io", "Jira", "Confluence", "Trello", "Microsoft Office"],
      methodology: "Agile / Business Process Management / Process Improvement",
      dataSource: "Stakeholder interviews, process documentation, workflow observations, issue records, operational feedback",
      analysis: ["Documented the current-state process and key activities.", "Identified bottlenecks, duplicated activities, unclear responsibilities, and hand-off issues.", "Analysed stakeholder needs and defined improvement requirements.", "Developed a future-state process for improved clarity and accountability.", "Converted recommendations into actionable delivery tasks."],
      findings: ["Clear ownership and hand-offs improve process visibility.", "Visual process mapping helps stakeholders understand operational gaps.", "Future-state design provides a bridge between problem identification and implementation."],
      recommendations: ["Document SOPs around the improved workflow.", "Clearly define ownership and responsibilities.", "Use process performance indicators.", "Review the process periodically for further improvement."],
      outcome: "Complete process-improvement case demonstrating current-state analysis, stakeholder requirements, gap identification, future-state design, and implementation planning.",
      impact: "Demonstrates the ability to turn an operational problem into a structured and measurable improvement approach.",
      image: "assets/images/project-04.jpg", imageAlt: "Business Process Improvement & Workflow Optimisation project"
    },
    {
      id: "skills-acquisition", name: "Skills Acquisition Programme & Event Operations Improvement",
      tags: ["Project Management", "Business Analysis", "Process Improvement"],
      short: "Project-management and process-improvement case study based on supporting skills-acquisition initiatives and event operations in partnership with Lagos State Government.",
      problem: "Skills-acquisition programmes and events require coordination across stakeholders, activities, timelines, logistics, communication, and programme objectives. Without structured coordination, operational gaps can affect delivery.",
      objective: "Improve project and event-management processes through stronger planning, stakeholder coordination, responsibility tracking, operational review, and structured follow-up.",
      role: "Project Manager / IT Strategic Analyst",
      tools: ["Microsoft Excel", "Microsoft Office", "Project Planning and Documentation Tools"],
      methodology: "Project Management / Process Improvement / Stakeholder Management",
      dataSource: "Project plans, activity schedules, stakeholder requirements, event information, operational records, follow-up information",
      analysis: ["Reviewed project and event activities against programme requirements.", "Identified operational dependencies and areas requiring stronger coordination.", "Structured responsibilities, deliverables, timelines, and follow-up.", "Reviewed event-management processes for improvement opportunities.", "Supported communication and coordination among stakeholders."],
      findings: ["Clear ownership and structured follow-up are essential for multi-stakeholder delivery.", "Event processes are easier to manage when activities, responsibilities, and dependencies are documented.", "Project-management discipline improves operational visibility."],
      recommendations: ["Maintain project plans and responsibility matrices.", "Establish clear communication and follow-up processes.", "Document repeatable event-management processes.", "Review operational lessons after major activities."],
      outcome: "Real professional case study demonstrating Project Management, IT Strategic Analysis, stakeholder coordination, and process improvement within a skills-acquisition environment.",
      impact: "Supported structured programme coordination, event operations, stakeholder engagement, and delivery processes.",
      image: "assets/images/project-05.jpg", imageAlt: "Skills Acquisition Programme & Event Operations Improvement project"
    },
    {
      id: "participant-support", name: "Participant Support & Service Journey Improvement",
      tags: ["Business Analysis", "Service Improvement", "Data & Operations"],
      short: "Service-improvement initiative focused on recurring participant support issues and improving the support and booking journey.",
      problem: "Participants may experience challenges around booking, session access, login guidance, installation support, waiting times, or presenting a different issue from the one originally submitted when they join a support session.",
      objective: "Identify recurring service issues, improve support guidance, make booking expectations clearer, and create a more efficient approach to managing participant requests.",
      role: "Technical Data Associate / Business Analyst",
      tools: ["Excel", "Operational Reporting", "Jira", "Confluence", "Process Documentation"],
      methodology: "Agile / Service Improvement / Root Cause Analysis / Continuous Improvement",
      dataSource: "Participant feedback, booking information, support-session records, issue submissions, attendance information, operational observations",
      analysis: ["Reviewed recurring participant concerns and categorised issues.", "Identified limitations in the existing booking and support process.", "Analysed the difference between submitted issues and issues presented during support sessions.", "Identified waiting-time and appointment-management considerations.", "Used feedback and operational observations to develop practical recommendations."],
      findings: ["Participants may submit one issue before a session but present a different or additional issue when the session begins, which can complicate preparation and time allocation.", "Some participants require additional guidance on booking, login details, and support expectations.", "Different support requests have different levels of complexity and may require different amounts of support time.", "A clearer booking and FAQ process could reduce avoidable confusion."],
      recommendations: ["Develop a clear FAQ and booking guide so participants understand preparation and booking expectations.", "Explore allocating support time based on the complexity or weight of the request.", "Provide clearer expectations on what can reasonably be handled within a support session.", "Track recurring support categories to identify opportunities for self-service guidance and process improvement."],
      outcome: "Real-world Business Analysis and service-improvement case demonstrating how participant feedback, operational observations, and issue analysis can be converted into practical process recommendations.",
      impact: "Supports a clearer and more structured participant support experience while helping the team identify recurring issues and improve support-time allocation.",
      image: "assets/images/project-06.jpg", imageAlt: "Participant Support & Service Journey Improvement project"
    }
  ]
};
