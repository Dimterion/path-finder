export type ListingLink = {
  label: string;
  url: string;
};

export type ListingImageKey = "placeholder";

export type JobListing = {
  id: string;
  title: string;
  websiteUrl: string;
  description: string;
  imageKey?: ListingImageKey;
  tags?: string[];
  extraLinks?: ListingLink[];
};

/** Tag rules:
- No country tags (France, Germany, etc.).
- Region tags:
  - "EU": company primarily hires in Europe.
  - "Remote-worldwide": company is fully remote and can hire anywhere.
- Domain tags (1–2): EdTech, PropTech, MarTech, FinTech, HealthTech, Consulting, Gaming, E-commerce, AI / Data, etc.
- Product/business model tags (0–1): SaaS, Marketplace, Platform, Agency, Enterprise.
- Tech/function tags (1–3): A/B Testing, Personalization, Learning & Development, Real Estate, Financial Advisory, Software Development, Cloud, IoT, AR/VR, Data & Analytics, etc.
- About 3–7 tags per listing, mixing domain + tech + region. */

export const listings: JobListing[] = [
  {
    id: "360_learning",
    title: "360Learning",
    websiteUrl: "https://360learning.com",
    description:
      "Online learning platform that helps companies create and share internal courses. Employees can publish short lessons, track progress, and build skills without heavy LMS setup.",
    // imageKey: "placeholder",
    tags: ["EdTech", "SaaS", "Learning & Development", "EU"],
    extraLinks: [
      {
        label: "Careers page (Lever)",
        url: "https://jobs.lever.co/360learning",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/360learning",
      },
    ],
  },
  {
    id: "aareon",
    title: "Aareon",
    websiteUrl: "https://www.aareon.com",
    description:
      "European software company that provides cloud-based property management systems for real estate companies. Their platform helps housing associations and commercial property managers handle rent, contracts, maintenance, and reporting in one system.",
    // imageKey: "placeholder",
    tags: ["PropTech", "SaaS", "Real Estate", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.aareon.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/aareon",
      },
    ],
  },
  {
    id: "ab_tasty",
    title: "AB Tasty",
    websiteUrl: "https://www.abtasty.com",
    description:
      "French SaaS company that provides an all-in-one platform for A/B testing, personalization, and feature management. Marketing and product teams use it to run experiments, optimize websites, and roll out new features safely.",
    // imageKey: "placeholder",
    tags: ["MarTech", "SaaS", "A/B Testing", "Personalization", "EU"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.abtasty.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ab-tasty",
      },
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy",
    websiteUrl: "https://www.accuracy.com",
    description:
      "Independent global consulting firm that advises companies and investors on high-stakes decisions. Teams work on M&A and valuations, disputes and arbitration, crises and restructurings, and corporate strategy.",
    // imageKey: "placeholder",
    tags: ["Consulting", "Financial Advisory", "M&A", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.accuracy.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/accuracy",
      },
    ],
  },
  {
    id: "actimage",
    title: "Actimage",
    websiteUrl: "https://www.actimage.com",
    description:
      "French-German digital agency that builds custom software and cloud solutions for companies and public organizations. Teams work on web and mobile apps, UX/UI design, data projects, IoT, and mixed-reality (AR/VR) solutions.",
    // imageKey: "placeholder",
    tags: [
      "Software Development",
      "Digital Agency",
      "Cloud",
      "IoT",
      "AR/VR",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://jobs.actimage.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/actimage",
      },
    ],
  },
  {
    id: "adelean",
    title: "Adelean",
    websiteUrl: "https://www.adelean.com",
    description:
      "Paris-based consulting and software company specialized in search engines and data platforms. Teams build and optimize enterprise search, data extraction/transformation, and analytics solutions using technologies like Elasticsearch, Solr, and OpenSearch.",
    // imageKey: "placeholder",
    tags: [
      "Data & Analytics",
      "Search",
      "Big Data",
      "Software Development",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.adelean.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/adelean",
      },
    ],
  },
  {
    id: "advanced_schema",
    title: "Advanced Schema",
    websiteUrl: "https://www.advanced-schema.com",
    description:
      "International data consulting firm that helps companies build data warehouses, business intelligence, and CRM systems. Teams work on data engineering, analytics, cloud platforms, and digital transformation projects across Europe and North America.",
    // imageKey: "placeholder",
    tags: [
      "Data & Analytics",
      "Business Intelligence",
      "Big Data",
      "Cloud",
      "EU",
    ],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/advancedschema",
      },
    ],
  },
  {
    id: "aircall",
    title: "Aircall",
    websiteUrl: "https://aircall.io",
    description:
      "Cloud phone system for sales and support teams. Combines VoIP calling with CRM integrations, call analytics, and automation so teams can manage calls, follow-ups, and performance in one place.",
    // imageKey: "placeholder",
    tags: ["MarTech", "SaaS", "Sales Tech", "Cloud", "EU"],
    extraLinks: [
      {
        label: "Careers page (Greenhouse)",
        url: "https://job-boards.greenhouse.io/aircallioinc",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/aircall",
      },
    ],
  },
  {
    id: "akeneo",
    title: "Akeneo",
    websiteUrl: "https://www.akeneo.com",
    description:
      "Product information management (PIM) platform that helps brands centralize, enrich, and distribute product data across e-commerce, marketplaces, and print. Used by retail and manufacturing teams to keep product catalogs consistent.",
    // imageKey: "placeholder",
    tags: ["E-commerce", "SaaS", "Product Data", "Retail Tech", "EU"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.akeneo.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/akeneo",
      },
    ],
  },
  {
    id: "akqa",
    title: "AKQA",
    websiteUrl: "https://www.akqa.com",
    description:
      "Global design and innovation agency that creates digital products, campaigns, and experiences for large brands. Teams work on strategy, UX/UI, content, and technology for web, mobile, and connected devices.",
    // imageKey: "placeholder",
    tags: [
      "Digital Agency",
      "Design",
      "Advertising",
      "Software Development",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.akqa.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/akqa",
      },
    ],
  },
  {
    id: "akur8",
    title: "Akur8",
    websiteUrl: "https://www.akur8.com",
    description:
      "Insurtech company that provides AI-powered pricing and underwriting software for insurers. Their platform uses advanced statistical models to help insurance companies set more accurate premiums and manage risk.",
    // imageKey: "placeholder",
    tags: ["InsurTech", "AI / Data", "SaaS", "Financial Services", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.akur8.com/career",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/akur8",
      },
    ],
  },
  {
    id: "alan",
    title: "Alan",
    websiteUrl: "https://alan.com",
    description:
      "Digital health insurance company offering simple, online health plans for employees and self-employed people. Combines insurance coverage with a mobile app for claims, reimbursements, and telemedicine services.",
    // imageKey: "placeholder",
    tags: ["HealthTech", "InsurTech", "SaaS", "B2C", "EU"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/alan",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/avec-alan",
      },
    ],
  },
  {
    id: "alcatel_lucent",
    title: "Alcatel-Lucent",
    websiteUrl: "https://www.al-enterprise.com",
    description:
      "Global provider of networking and communications solutions for enterprises and service providers. Products include cloud PBX, Wi‑Fi, LAN, and unified communications systems for offices and campuses.",
    // imageKey: "placeholder",
    tags: ["Telecom", "Networking", "Enterprise", "Hardware & Software", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://jobs.al-enterprise.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/alcatellucententerprise",
      },
    ],
  },
  {
    id: "aletiq",
    title: "Aletiq",
    websiteUrl: "https://www.aletiq.com",
    description:
      "French IT services company that designs and manages secure IT infrastructure for mid-sized and large organizations. Services cover cloud, cybersecurity, networks, workplace support, and project management.",
    // imageKey: "placeholder",
    tags: ["IT Services", "Cloud", "Cybersecurity", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/aletiq/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/aletiq",
      },
    ],
  },
  {
    id: "algolia",
    title: "Algolia",
    websiteUrl: "https://www.algolia.com",
    description:
      "Search and discovery API platform that helps apps and websites add fast, relevant search, recommendations, and personalization. Used by e-commerce and media companies to improve product and content discovery.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "SaaS", "Search", "E-commerce", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.algolia.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/algolia",
      },
    ],
  },
  {
    id: "alice_&_bob",
    title: "Alice & Bob",
    websiteUrl: "https://alice-bob.com",
    description:
      "Quantum computing startup building fault-tolerant quantum processors and software. Focuses on hardware architecture and error correction to make quantum computers reliable for real-world problems.",
    // imageKey: "placeholder",
    tags: ["Quantum Computing", "Hardware", "AI / Data", "Deep Tech", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://alice-bob.com/join-us",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/alice-bob",
      },
    ],
  },
  {
    id: "alma",
    title: "Alma",
    websiteUrl: "https://almapay.com",
    description:
      "Buy-now-pay-later and installment payment solution for online merchants. Integrates with e-commerce platforms to offer flexible payment options at checkout while managing risk and compliance for shops.",
    // imageKey: "placeholder",
    tags: ["FinTech", "E-commerce", "Payments", "SaaS", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/alma/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/almapay",
      },
    ],
  },
  {
    id: "american_express",
    title: "American Express",
    websiteUrl: "https://www.americanexpress.com",
    description:
      "Global financial services company known for credit cards, charge cards, and travel services. Offers consumer and business payment products, plus rewards, lounge access, and merchant services.",
    // imageKey: "placeholder",
    tags: [
      "FinTech",
      "Financial Services",
      "Payments",
      "Enterprise",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.americanexpress.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/american-express",
      },
    ],
  },
  {
    id: "amplemarket",
    title: "Amplemarket",
    websiteUrl: "https://www.amplemarket.com",
    description:
      "Sales engagement and lead generation platform for B2B teams. Provides email automation, calling, LinkedIn outreach, and analytics to help sales and marketing teams find and convert prospects.",
    // imageKey: "placeholder",
    tags: ["MarTech", "SaaS", "Sales Tech", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.amplemarket.com/careers",
      },
    ],
  },
  {
    id: "appquantum",
    title: "AppQuantum",
    websiteUrl: "https://appquantum.com",
    description:
      "Mobile game publisher and developer that acquires, optimizes, and scales games across app stores. Works with external studios and internal teams on user acquisition, monetization, and live operations.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Mobile", "Publishing", "User Acquisition", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://appquantum.pinpointhq.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/appquantum",
      },
    ],
  },
  {
    id: "apsia",
    title: "Apsia",
    websiteUrl: "https://www.apsia.eu",
    description:
      "Cybersecurity and digital sovereignty consulting firm. Helps organizations secure their systems, manage identities, and implement trusted cloud and data solutions, often for public-sector and regulated industries.",
    // imageKey: "placeholder",
    tags: ["Cybersecurity", "Consulting", "Cloud", "Public Sector", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.apsia.eu/rejoignez-nous",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/sharpdx",
      },
    ],
  },
  {
    id: "arkema",
    title: "Arkema",
    websiteUrl: "https://www.arkema.com",
    description:
      "Global materials science company producing specialty chemicals and advanced materials for industries like aerospace, automotive, electronics, and construction. Focuses on sustainable and high-performance solutions.",
    // imageKey: "placeholder",
    tags: [
      "Materials Science",
      "Chemicals",
      "Manufacturing",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://jobs.arkema.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/arkema",
      },
    ],
  },
  {
    id: "artefact",
    title: "Artefact",
    websiteUrl: "https://www.artefact.com",
    description:
      "Data and AI consulting company that helps businesses use data for marketing, sales, and product decisions. Services include analytics, customer data platforms, personalization, and AI-driven campaigns.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Consulting", "MarTech", "Data & Analytics", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.artefact.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/artefact-global",
      },
    ],
  },
  {
    id: "ashby",
    title: "Ashby",
    websiteUrl: "https://www.ashbyhq.com",
    description:
      "Recruitment software platform combining ATS, CRM, and analytics for hiring teams. Helps companies manage candidates, automate workflows, and track recruiting metrics in one system.",
    // imageKey: "placeholder",
    tags: ["HR Tech", "SaaS", "Recruiting", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.ashbyhq.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ashbyhq",
      },
    ],
  },
  {
    id: "asobo_studio",
    title: "Asobo Studio",
    websiteUrl: "https://www.asobostudio.com",
    description:
      "Animation and visual effects studio creating content for film, series, and games. Teams work on 2D/3D animation, character design, and storytelling for entertainment projects.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Animation", "VFX", "Entertainment", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.asobostudio.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/asobo-studio",
      },
    ],
  },
  {
    id: "assemblyai",
    title: "AssemblyAI",
    websiteUrl: "https://www.assemblyai.com",
    description:
      "API platform for speech-to-text and audio understanding. Provides transcription, speaker diarization, summarization, and other NLP features for developers building voice and audio applications.",
    // imageKey: "placeholder",
    tags: [
      "AI / Data",
      "SaaS",
      "Speech Tech",
      "Developer Tools",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.assemblyai.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/assemblyai",
      },
    ],
  },
  {
    id: "aviv_group",
    title: "AVIV Group",
    websiteUrl: "https://www.aviv-group.com",
    description:
      "European real estate investment and asset management group focused on office and mixed-use properties. Manages property portfolios, development projects, and leasing across major cities.",
    // imageKey: "placeholder",
    tags: ["Real Estate", "Asset Management", "Investment", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page (SmartRecruiters)",
        url: "https://careers.smartrecruiters.com/avivgroup",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/aviv-group",
      },
    ],
  },
  {
    id: "axa",
    title: "AXA",
    websiteUrl: "https://www.axa.com",
    description:
      "Global insurance and asset management group offering life, health, property, and casualty insurance. Operates in many countries with large teams in underwriting, claims, IT, and digital products.",
    // imageKey: "placeholder",
    tags: ["InsurTech", "Financial Services", "Enterprise", "HealthTech", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.axa.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/axa",
      },
    ],
  },
  {
    id: "back_market",
    title: "Back Market",
    websiteUrl: "https://www.backmarket.com",
    description:
      "Global online marketplace for professionally refurbished electronics. Connects buyers with vetted refurbishers for phones, laptops, and appliances, with warranties and quality checks to extend device lifecycles and reduce e-waste.",
    // imageKey: "placeholder",
    tags: [
      "E-commerce",
      "Marketplace",
      "Sustainability",
      "Consumer Tech",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/backmarket",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/back-market",
      },
    ],
  },
  {
    id: "basikon",
    title: "Basikon",
    websiteUrl: "https://www.basikon.com",
    description:
      "French IT consulting firm that advises companies on systems, software, and digital projects. Services include IT strategy, architecture, software design, and implementation for mid-sized and large organizations.",
    // imageKey: "placeholder",
    tags: [
      "Consulting",
      "IT Services",
      "Software Development",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://basikon.welcomekit.co",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/basikon",
      },
    ],
  },
  {
    id: "batvoiceai",
    title: "BatvoiceAI",
    websiteUrl: "https://www.bevoiceai.com",
    description:
      "AI startup focused on voice and audio technologies. Builds tools for analyzing, transcribing, or enhancing audio content using machine learning and speech-processing models.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Speech Tech", "SaaS", "Deep Tech", "EU"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/bevoiceai",
      },
    ],
  },
  {
    id: "believe",
    title: "Believe",
    websiteUrl: "https://www.believe.com",
    description:
      "Global digital music company that distributes and promotes music for independent artists and labels. Offers distribution to streaming platforms, marketing, analytics, and label services through brands like TuneCore.",
    // imageKey: "placeholder",
    tags: [
      "Music Tech",
      "Digital Distribution",
      "SaaS",
      "Media & Entertainment",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.believe.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/believeglobal",
      },
    ],
  },
  {
    id: "bending_spoons",
    title: "Bending Spoons",
    websiteUrl: "https://bendingspoons.com",
    description:
      "Technology company that builds and acquires consumer mobile apps and digital products. Operates a portfolio of apps (e.g., Evernote, Remini, WeTransfer) with a shared infrastructure for growth and monetization.",
    // imageKey: "placeholder",
    tags: ["Mobile", "Consumer Apps", "AI / Data", "Publishing", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://jobs.bendingspoons.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/bendingspoons",
      },
    ],
  },
  {
    id: "binance",
    title: "Binance",
    websiteUrl: "https://www.binance.com",
    description:
      "Global cryptocurrency exchange and digital-asset platform. Enables users to trade, stake, and store cryptocurrencies, with products for spot and derivatives trading, NFTs, and yield services.",
    // imageKey: "placeholder",
    tags: ["FinTech", "Crypto", "Trading Platform", "B2C", "Remote-worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.binance.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/binance",
      },
    ],
  },
  {
    id: "bitstack",
    title: "Bitstack",
    websiteUrl: "https://www.bitstack-app.com",
    description:
      "Mobile app that makes saving and investing in Bitcoin simple. Offers recurring purchases and round-up savings on everyday spending, targeting long-term Bitcoin savers in Europe.",
    // imageKey: "placeholder",
    tags: ["FinTech", "Crypto", "Mobile", "Savings & Investment", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.bitstack-app.com/en/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/bitstack-app",
      },
    ],
  },
  {
    id: "botpress",
    title: "Botpress",
    websiteUrl: "https://botpress.com",
    description:
      "Conversational AI platform for building chatbots and AI agents. Provides tools to design, train, and deploy LLM-powered bots for customer support, lead capture, and workflow automation.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "SaaS", "Chatbots", "Developer Tools", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://botpress.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/botpress",
      },
    ],
  },
  {
    id: "brevo",
    title: "Brevo",
    websiteUrl: "https://www.brevo.com",
    description:
      "Cloud marketing platform (formerly Sendinblue) for email, SMS, and marketing automation. Provides tools for campaigns, transactional messages, CRM, landing pages, and chat to help businesses manage customer communication.",
    // imageKey: "placeholder",
    tags: ["MarTech", "SaaS", "Email Marketing", "CRM", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.brevo.com/careers/open-positions",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/brevo",
      },
    ],
  },
  {
    id: "buildkite",
    title: "Buildkite",
    websiteUrl: "https://buildkite.com",
    description:
      "Continuous integration and delivery (CI/CD) platform for software teams. Orchestrates build, test, and deployment pipelines on infrastructure companies control, used by high-scale engineering organizations.",
    // imageKey: "placeholder",
    tags: ["DevTools", "CI/CD", "SaaS", "Software Development", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://buildkite.com/about/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/buildkite",
      },
    ],
  },
  {
    id: "cadence",
    title: "Cadence",
    websiteUrl: "https://www.cadence.com",
    description:
      "Engineering software company that provides electronic design automation (EDA) tools for designing chips, circuit boards, and complex electronic systems. Used by semiconductor and electronics companies to simulate, verify, and optimize hardware before manufacturing.",
    // imageKey: "placeholder",
    tags: ["Software Development", "EDA", "Semiconductors", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.cadence.com/en_US/home/company/life-at-cadence/careers.html",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/cadence",
      },
    ],
  },
  {
    id: "cainiao",
    title: "Cainiao",
    websiteUrl: "https://global.cainiao.com",
    description:
      "Global logistics and supply-chain technology company, part of Alibaba Group. Builds smart logistics networks, cross-border shipping solutions, and warehouse/last-mile technology for e-commerce merchants worldwide.",
    // imageKey: "placeholder",
    tags: [
      "Logistics",
      "E-commerce",
      "Supply Chain",
      "Platform",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://cainiao.teamtailor.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/cainiaogroup",
      },
    ],
  },
  {
    id: "canal+",
    title: "Canal+",
    websiteUrl: "https://www.canalplusgroup.com",
    description:
      "Global media and entertainment group operating pay-TV channels, streaming services, and production studios. Creates and distributes films, series, sports, and original content across Europe, Africa, and Asia.",
    // imageKey: "placeholder",
    tags: [
      "Media & Entertainment",
      "Streaming",
      "Content Production",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://joinus.canalplus.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/canal-",
      },
    ],
  },
  {
    id: "canonical",
    title: "Canonical",
    websiteUrl: "https://canonical.com",
    description:
      "Company behind the Ubuntu Linux operating system. Provides enterprise support, security updates, and management tools for Ubuntu on desktops, servers, cloud, and IoT devices, used by developers and IT teams worldwide.",
    // imageKey: "placeholder",
    tags: [
      "Open Source",
      "Cloud",
      "Linux",
      "Developer Tools",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://canonical.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/canonical",
      },
    ],
  },
  {
    id: "capi",
    title: "Capi",
    websiteUrl: "https://capi.com",
    description:
      "Fintech platform that simplifies cross-border payments for businesses in emerging markets. Enables fast, low-cost international transfers and currency exchange for importers and SMEs in Africa and beyond.",
    // imageKey: "placeholder",
    tags: [
      "FinTech",
      "Payments",
      "B2B",
      "Emerging Markets",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://capi.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/capilux",
      },
    ],
  },
  {
    id: "cegid",
    title: "Cegid",
    websiteUrl: "https://www.cegid.com",
    description:
      "French software publisher of cloud-based business management solutions. Offers ERP, payroll, finance, tax, and retail software for accountants, retailers, and mid-sized enterprises.",
    // imageKey: "placeholder",
    tags: ["SaaS", "ERP", "Finance", "Retail Tech", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://jobs.cegid.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/cegid",
      },
    ],
  },
  {
    id: "checkout.com",
    title: "Checkout.com",
    websiteUrl: "https://www.checkout.com",
    description:
      "Global payment service provider that helps online businesses accept and manage payments. Offers payment gateway, acquiring, fraud prevention, and payout solutions through a unified API for enterprise merchants.",
    // imageKey: "placeholder",
    tags: ["FinTech", "Payments", "SaaS", "E-commerce", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.checkout.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/checkout",
      },
    ],
  },
  {
    id: "christy_media",
    title: "Christy Media",
    websiteUrl: "https://www.christy-media.com",
    description:
      "Digital media and ad-tech company that operates content sites and monetizes traffic through advertising and affiliate marketing. Teams work on SEO, content strategy, programmatic ads, and revenue optimization.",
    // imageKey: "placeholder",
    tags: ["Media & Entertainment", "AdTech", "SEO", "Content", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.christy-media.com/job-results",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/christy-media-solutions",
      },
    ],
  },
  {
    id: "clerk",
    title: "Clerk",
    websiteUrl: "https://clerk.com",
    description:
      "E-commerce personalization platform that helps online shops increase conversions with tailored product recommendations, email capture, and behavioral targeting. Integrates with major e-commerce platforms.",
    // imageKey: "placeholder",
    tags: ["E-commerce", "MarTech", "SaaS", "Personalization", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://clerk.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/clerkinc",
      },
    ],
  },
  {
    id: "clipboard",
    title: "Clipboard",
    websiteUrl: "https://www.clipboard.com",
    description:
      "Healthcare software company building tools for clinical documentation and care coordination. Provides digital charting, templates, and workflow automation for hospitals and medical practices.",
    // imageKey: "placeholder",
    tags: [
      "HealthTech",
      "SaaS",
      "Clinical Software",
      "B2B",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.clipboard.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/clipboard",
      },
    ],
  },
  {
    id: "clipmyhorse",
    title: "ClipMyHorse",
    websiteUrl: "https://www.clipmyhorse.tv",
    description:
      "Streaming platform dedicated to equestrian sports. Broadcasts live competitions, on-demand videos, and original content for horse-riding enthusiasts worldwide.",
    // imageKey: "placeholder",
    tags: ["Media & Entertainment", "Streaming", "Sports", "B2C", "EU"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/clipmyhorse-tv",
      },
    ],
  },
  {
    id: "cloudflare",
    title: "Cloudflare",
    websiteUrl: "https://www.cloudflare.com",
    description:
      "Web infrastructure and security company that protects and accelerates websites and applications. Provides CDN, DDoS protection, DNS, Zero Trust security, and developer platforms used by millions of sites.",
    // imageKey: "placeholder",
    tags: [
      "Cybersecurity",
      "Cloud",
      "CDN",
      "Developer Tools",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.cloudflare.com/careers/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/cloudflare",
      },
    ],
  },
  {
    id: "coinspaid",
    title: "Coinspaid",
    websiteUrl: "https://coinspaid.com",
    description:
      "Crypto payment gateway and treasury platform for online businesses. Enables merchants to accept cryptocurrencies, manage digital assets, and convert to fiat with integrated risk and compliance tools.",
    // imageKey: "placeholder",
    tags: ["FinTech", "Crypto", "Payments", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page (Lever)",
        url: "https://jobs.eu.lever.co/coinspaid",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/coinspaid-com",
      },
    ],
  },
  {
    id: "consensys",
    title: "Consensys",
    websiteUrl: "https://consensys.io",
    description:
      "Blockchain software company behind MetaMask and Ethereum infrastructure tools. Builds wallets, developer platforms, and protocol clients that power decentralized applications and onchain finance.",
    // imageKey: "placeholder",
    tags: [
      "Blockchain",
      "Crypto",
      "Developer Tools",
      "Infrastructure",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/consensys-incorporated",
      },
    ],
  },
  {
    id: "constellr",
    title: "ConstellR",
    websiteUrl: "https://www.constellr.com",
    description:
      "Space-tech startup building a constellation of small satellites to measure land surface temperature and other Earth-observation data. Sells analytics to agriculture, climate, and environmental sectors.",
    // imageKey: "placeholder",
    tags: [
      "Space Tech",
      "Earth Observation",
      "Data & Analytics",
      "Deep Tech",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page (Greenhouse)",
        url: "https://job-boards.eu.greenhouse.io/constellrgmbh",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/constellr",
      },
    ],
  },
  {
    id: "contentsquare",
    title: "Contentsquare",
    websiteUrl: "https://contentsquare.com",
    description:
      "Digital experience analytics platform that shows how users interact with websites and apps. Combines session replays, heatmaps, journey analytics, and feedback to help teams improve UX and conversions.",
    // imageKey: "placeholder",
    tags: ["MarTech", "SaaS", "Analytics", "UX", "EU"],
    extraLinks: [
      {
        label: "Careers page (Lever)",
        url: "https://jobs.lever.co/contentsquare",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/contentsquare",
      },
    ],
  },
  {
    id: "contractbook",
    title: "Contractbook",
    websiteUrl: "https://contractbook.com",
    description:
      "Legal-tech platform that automates contract creation and management for companies. Provides templates, workflows, and e-signature to streamline drafting, negotiating, and storing contracts.",
    // imageKey: "placeholder",
    tags: ["Legal Tech", "SaaS", "Automation", "B2B", "EU"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/contractbook/about",
      },
    ],
  },
  {
    id: "converteo",
    title: "Converteo",
    websiteUrl: "https://converteo.com",
    description:
      "Digital agency specialized in e-commerce and performance marketing. Helps brands optimize conversion rates, run paid campaigns, and improve online sales through data-driven strategies.",
    // imageKey: "placeholder",
    tags: [
      "Digital Agency",
      "E-commerce",
      "MarTech",
      "Performance Marketing",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://jobs.converteo.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/converteo",
      },
    ],
  },
  {
    id: "corma",
    title: "Corma",
    websiteUrl: "https://www.corma.io",
    description:
      "AI productivity startup building tools to reduce distractions and help knowledge workers focus. Combines AI with workflow management to prioritize tasks and minimize context switching.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Productivity", "SaaS", "Developer Tools", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://corma.welcomekit.co",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/getcorma",
      },
    ],
  },
  {
    id: "corsearch",
    title: "Corsearch",
    websiteUrl: "https://corsearch.com",
    description:
      "Brand protection and trademark management platform. Uses AI and expert services to monitor online channels, detect counterfeits, enforce IP rights, and manage domain portfolios for global brands.",
    // imageKey: "placeholder",
    tags: ["Legal Tech", "Brand Protection", "AI / Data", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.corsearch.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/corsearchinc",
      },
    ],
  },
  {
    id: "creative_fabrica",
    title: "Creative Fabrica",
    websiteUrl: "https://www.creativefabrica.com",
    description:
      "Online marketplace for digital design assets like fonts, graphics, and templates. Serves designers, crafters, and creators with subscriptions and à la carte downloads for personal and commercial projects.",
    // imageKey: "placeholder",
    tags: ["E-commerce", "Marketplace", "Design", "Creator Economy", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.creativefabrica.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/creative-fabrica",
      },
    ],
  },
  {
    id: "criteo",
    title: "Criteo",
    websiteUrl: "https://www.criteo.com",
    description:
      "Ad-tech company that powers performance advertising and retargeting campaigns. Uses AI to deliver personalized ads across the web and help retailers and brands increase online sales.",
    // imageKey: "placeholder",
    tags: ["AdTech", "MarTech", "AI / Data", "E-commerce", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.criteo.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/criteo",
      },
    ],
  },
  {
    id: "cryptoNext_security",
    title: "CryptoNext Security",
    websiteUrl: "https://www.cryptonext-security.com",
    description:
      "Cybersecurity firm specialized in quantum-safe cryptography and post-quantum security solutions. Helps organizations protect data and communications against future quantum-computing threats.",
    // imageKey: "placeholder",
    tags: ["Cybersecurity", "Cryptography", "Deep Tech", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page (Workable)",
        url: "https://apply.workable.com/cryptonext-security",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/cryptonext-security",
      },
    ],
  },
  {
    id: "dailymotion",
    title: "Dailymotion",
    websiteUrl: "https://www.dailymotion.com",
    description:
      "Video hosting and streaming platform where users can upload, share, and watch videos. Offers ad-supported content and programmatic video advertising for publishers and brands.",
    // imageKey: "placeholder",
    tags: ["Media & Entertainment", "Video", "AdTech", "Platform", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.dailymotion.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dailymotion",
      },
    ],
  },
  {
    id: "dash0",
    title: "Dash0",
    websiteUrl: "https://www.dash0.com",
    description:
      "Observability platform built on OpenTelemetry for monitoring logs, metrics, and traces. Helps engineering teams detect issues, analyze performance, and automate incident response across cloud and AI systems.",
    // imageKey: "placeholder",
    tags: ["DevTools", "Observability", "SaaS", "Cloud", "EU"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/dash0",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dash0hq",
      },
    ],
  },
  {
    id: "dashdoc",
    title: "Dashdoc",
    websiteUrl: "https://www.dashdoc.com",
    description:
      "Healthtech startup building digital care pathway and patient engagement tools. Helps clinics and hospitals coordinate care, collect patient-reported outcomes, and improve treatment adherence.",
    // imageKey: "placeholder",
    tags: ["HealthTech", "SaaS", "Care Coordination", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/dashdoc/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dashdoc-eu",
      },
    ],
  },
  {
    id: "dashlane",
    title: "Dashlane",
    websiteUrl: "https://www.dashlane.com",
    description:
      "Password manager and digital identity platform for consumers and businesses. Stores passwords, passkeys, and personal data securely, with breach alerts and autofill across devices.",
    // imageKey: "placeholder",
    tags: ["Cybersecurity", "SaaS", "Identity", "B2C", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.dashlane.com/about/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dashlane",
      },
    ],
  },
  {
    id: "dassault_systèmes",
    title: "Dassault Systèmes",
    websiteUrl: "https://www.3ds.com",
    description:
      "Software company behind 3D design, simulation, and product lifecycle management (PLM) solutions. Provides the 3DEXPERIENCE platform used in aerospace, automotive, life sciences, and manufacturing.",
    // imageKey: "placeholder",
    tags: ["Software Development", "3D Design", "PLM", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.3ds.com/careers/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dassaultsystemes",
      },
    ],
  },
  {
    id: "datadog",
    title: "Datadog",
    websiteUrl: "https://www.datadoghq.com",
    description:
      "Cloud monitoring and analytics platform for applications, infrastructure, and logs. Provides dashboards, alerts, and tracing to help engineering teams detect and fix performance issues.",
    // imageKey: "placeholder",
    tags: ["DevTools", "Observability", "SaaS", "Cloud", "Remote-worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.datadoghq.com/all-jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/datadog",
      },
    ],
  },
  {
    id: "datagalaxy",
    title: "DataGalaxy",
    websiteUrl: "https://www.datagalaxy.com",
    description:
      "Data catalog and governance platform that maps metadata, lineage, and business definitions. Helps organizations discover, understand, and trust their data assets across teams.",
    // imageKey: "placeholder",
    tags: ["Data & Analytics", "Data Governance", "SaaS", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/datagalaxy/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/datagalaxy",
      },
    ],
  },
  {
    id: "dataiku",
    title: "Dataiku",
    websiteUrl: "https://www.dataiku.com",
    description:
      "Enterprise AI and data science platform (Data Science Studio) for building, deploying, and governing analytics and machine learning projects. Supports code and no-code workflows for mixed teams.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "SaaS", "Machine Learning", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page (Greenhouse)",
        url: "https://job-boards.greenhouse.io/dataiku",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dataiku",
      },
    ],
  },
  {
    id: "deca_games",
    title: "DECA Games",
    websiteUrl: "https://decagames.com",
    description:
      "Mobile gaming company that acquires, operates, and grows live-service games. Works with external studios on user acquisition, monetization, product management, and live operations.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Mobile", "Publishing", "User Acquisition", "EU"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/deca-games",
      },
    ],
  },
  {
    id: "dedalus",
    title: "Dedalus",
    websiteUrl: "https://www.dedalus.com",
    description:
      "Healthcare IT company providing electronic health records, laboratory systems, and diagnostic software for hospitals and care networks. Focuses on clinical workflows and interoperability across care settings.",
    // imageKey: "placeholder",
    tags: ["HealthTech", "EHR", "Software Development", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.dedalus.com/global/working-at-dedalus/our-job-offers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dedalus-group",
      },
    ],
  },
  {
    id: "deel",
    title: "Deel",
    websiteUrl: "https://www.deel.com",
    description:
      "Global HR and payroll platform for hiring and paying employees and contractors in many countries. Offers employer-of-record, payroll, benefits, and HRIS tools for remote and international teams.",
    // imageKey: "placeholder",
    tags: ["HR Tech", "Payroll", "SaaS", "Remote", "Remote-worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.deel.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/deel",
      },
    ],
  },
  {
    id: "deezer",
    title: "Deezer",
    websiteUrl: "https://www.deezer.com",
    description:
      "Music streaming service offering on-demand access to a large catalog of songs, albums, playlists, and podcasts. Provides subscription plans for consumers and family, plus ad-supported tiers and artist tools.",
    // imageKey: "placeholder",
    tags: ["Media & Entertainment", "Music Tech", "Streaming", "B2C", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.deezerjobs.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/deezer",
      },
    ],
  },
  {
    id: "deloitte",
    title: "Deloitte",
    websiteUrl: "https://www.deloitte.com",
    description:
      "Global professional services firm offering audit, consulting, tax, and advisory services. Helps large organizations with strategy, technology implementation, operations, risk, and M&A projects.",
    // imageKey: "placeholder",
    tags: [
      "Consulting",
      "Audit",
      "Financial Advisory",
      "Enterprise",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.deloitte.com/global/en/careers/job-search.html",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/deloitte",
      },
    ],
  },
  {
    id: "descartes_&_mauss_verra",
    title: "Descartes & Mauss (Verra)",
    websiteUrl: "https://verra.work",
    description:
      "Strategy-tech startup building an AI-powered assistant for strategic decision-making. Analyzes market signals and internal data to help leadership teams identify opportunities and model long-term scenarios.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Consulting", "Strategy", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/descartes-mauss/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/verra-work",
      },
    ],
  },
  {
    id: "descartes_underwriting",
    title: "Descartes Underwriting",
    websiteUrl: "https://descartesunderwriting.com",
    description:
      "Insurtech specializing in parametric insurance for climate, cyber, and emerging risks. Uses data, AI, and climate science to design policies that pay out automatically when predefined triggers (e.g., wind speed, rainfall) are met.",
    // imageKey: "placeholder",
    tags: ["InsurTech", "Climate Tech", "Data & Analytics", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://descartesunderwriting.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/descartesunderwriting",
      },
    ],
  },
  {
    id: "diduenjoy",
    title: "Diduenjoy",
    websiteUrl: "https://www.diduenjoy.com",
    description:
      "Customer feedback and voice-of-customer platform. Collects surveys, reviews, and social signals, then uses AI to analyze sentiment and surface actionable insights for product, marketing, and support teams.",
    // imageKey: "placeholder",
    tags: ["MarTech", "SaaS", "Customer Feedback", "AI / Data", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/diduenjoy/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/diduenjoy",
      },
    ],
  },
  {
    id: "digisap-solutions",
    title: "Digisap Solutions",
    websiteUrl: "https://www.digisap-solutions.com",
    description:
      "IT services and consulting company delivering software development, integration, and support projects. Works with clients on custom applications, modernization, and managed services.",
    // imageKey: "placeholder",
    tags: [
      "IT Services",
      "Software Development",
      "Consulting",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://digisapsolutions.teamtailor.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/digisap-solutions",
      },
    ],
  },
  {
    id: "disruptive_games",
    title: "Disruptive Games",
    websiteUrl: "https://www.disruptivegames.com",
    description:
      "Independent game development studio founded by industry veterans. Builds online and multiplayer games, providing design, engineering, live-ops, and backend services for partners and original titles.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Game Development", "Multiplayer", "Entertainment", "EU"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/disruptive-games",
      },
    ],
  },
  {
    id: "distribusion",
    title: "Distribusion",
    websiteUrl: "https://www.distribusion.com",
    description:
      "Ground-transportation technology platform connecting rail, bus, ferry, and airport-transfer operators with travel retailers. Provides APIs and booking tools for search, pricing, and ticketing across multiple carriers.",
    // imageKey: "placeholder",
    tags: ["Travel Tech", "Transportation", "API", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.distribusion.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/distribusion",
      },
    ],
  },
  {
    id: "doctrine",
    title: "Doctrine",
    websiteUrl: "https://www.doctrine.fr",
    description:
      "Legal-tech platform offering AI-powered legal research, document analysis, and drafting tools. Aggregates court decisions and legal texts to help lawyers and legal departments work faster and more accurately.",
    // imageKey: "placeholder",
    tags: ["Legal Tech", "AI / Data", "SaaS", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.doctrine.fr/recrutement",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/doctrine",
      },
    ],
  },
  {
    id: "doubleVerify",
    title: "DoubleVerify",
    websiteUrl: "https://doubleverify.com",
    description:
      "Digital advertising verification platform that measures ad viewability, fraud, brand safety, and attention. Helps advertisers and agencies ensure ads are seen by real users in suitable environments.",
    // imageKey: "placeholder",
    tags: ["AdTech", "Measurement", "SaaS", "B2B", "Remote-worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://doubleverify.com/en/company/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/doubleverify-inc",
      },
    ],
  },
  {
    id: "dust",
    title: "Dust",
    websiteUrl: "https://dust.tt",
    description:
      "Enterprise AI platform for building and deploying AI agents that connect to company data and tools. Enables teams to automate workflows across apps like Notion, Slack, and Salesforce with shared, governed agents.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "SaaS", "Enterprise AI", "Automation", "EU"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/dust",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/dust-tt",
      },
    ],
  },
  {
    id: "ekimetrics",
    title: "Ekimetrics",
    websiteUrl: "https://www.ekimetrics.com",
    description:
      "Data science and AI consulting firm helping companies optimize marketing, pricing, and operations. Builds custom analytics solutions, marketing mix models, and decision tools combining data, business strategy, and sustainability.",
    // imageKey: "placeholder",
    tags: [
      "Consulting",
      "Data & Analytics",
      "AI / Data",
      "Marketing Analytics",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page (Lever)",
        url: "https://jobs.lever.co/ekimetrics",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ekimetrics",
      },
    ],
  },
  {
    id: "elevenlabs",
    title: "ElevenLabs",
    websiteUrl: "https://elevenlabs.io",
    description:
      "AI voice research and product company. Provides text-to-speech, voice cloning, dubbing, and conversational voice agents used by creators, developers, and enterprises for content, customer support, and interactive experiences.",
    // imageKey: "placeholder",
    tags: [
      "AI / Data",
      "Speech Tech",
      "SaaS",
      "Developer Tools",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://elevenlabs.io/careers/positions",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/elevenlabs",
      },
    ],
  },
  {
    id: "enapi",
    title: "ENAPI",
    websiteUrl: "https://enapi.com",
    description:
      "EV charging infrastructure platform providing roaming and clearing services between charge-point operators and e-mobility apps. Implements OCPI standards to enable cross-network charging and settlement across Europe.",
    // imageKey: "placeholder",
    tags: ["CleanTech", "EV Charging", "API", "Infrastructure", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://enapi.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/enapi",
      },
    ],
  },
  {
    id: "eneba",
    title: "Eneba",
    websiteUrl: "https://www.eneba.com",
    description:
      "Digital marketplace for video game keys, gift cards, and in-game content. Connects gamers with verified sellers offering PC, console, and subscription products at competitive prices.",
    // imageKey: "placeholder",
    tags: ["E-commerce", "Gaming", "Marketplace", "B2C", "EU"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/eneba",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/enebagames",
      },
    ],
  },
  {
    id: "ensol",
    title: "Ensol",
    websiteUrl: "https://www.goensol.com",
    description:
      "Residential solar and home energy company offering solar panels, batteries, EV chargers, and heat pumps. Provides end-to-end installation and an app to monitor and optimize energy production and consumption.",
    // imageKey: "placeholder",
    tags: ["CleanTech", "Solar", "Energy", "Hardware & Software", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/ensol/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ensol-solaire",
      },
    ],
  },
  {
    id: "equativ",
    title: "Equativ",
    websiteUrl: "https://www.equativ.com",
    description:
      "Independent adtech platform offering an ad server, SSP, and DSP for publishers and advertisers. Supports programmatic and direct deals across display, video, and connected TV with a focus on transparency and performance.",
    // imageKey: "placeholder",
    tags: ["AdTech", "Programmatic", "SaaS", "Video & CTV", "EU"],
    extraLinks: [
      {
        label: "Careers page (Lever)",
        url: "https://jobs.lever.co/equativ",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/equativ",
      },
    ],
  },
  {
    id: "escape_velocity_entertainment",
    title: "Escape Velocity Entertainment",
    websiteUrl: "https://eve.games",
    description:
      "Independent game development studio creating new genres with inclusive, accessible gameplay. Builds multiplayer and competitive titles designed for players of all skill levels and backgrounds.",
    // imageKey: "placeholder",
    tags: [
      "Gaming",
      "Game Development",
      "Multiplayer",
      "Entertainment",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://eve.games/home/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/escape-velocity-entertainment",
      },
    ],
  },
  {
    id: "euroclear",
    title: "Euroclear",
    websiteUrl: "https://www.euroclear.com",
    description:
      "Financial market infrastructure providing settlement, custody, and post-trade services for bonds, equities, funds, and derivatives. Operates central securities depositories and clearing systems across multiple European markets.",
    // imageKey: "placeholder",
    tags: [
      "Financial Services",
      "Market Infrastructure",
      "Securities",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.euroclear.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/euroclear",
      },
    ],
  },
  {
    id: "euronext",
    title: "Euronext",
    websiteUrl: "https://www.euronext.com",
    description:
      "Leading European stock exchange operator running regulated markets in multiple countries. Provides listing, trading, clearing, and settlement for equities, bonds, derivatives, commodities, and indices such as the CAC 40 and AEX.",
    // imageKey: "placeholder",
    tags: [
      "Financial Services",
      "Stock Exchange",
      "Capital Markets",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.euronext.com/about/careers/open-positions",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/euronext",
      },
    ],
  },
  {
    id: "extia",
    title: "Extia",
    websiteUrl: "https://www.extia-group.com",
    description:
      "IT and digital consulting firm placing consultants in client teams across sectors like finance, telecom, energy, and retail. Supports projects in development, infrastructure, data, cybersecurity, and agile transformation.",
    // imageKey: "placeholder",
    tags: [
      "IT Services",
      "Consulting",
      "Software Development",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.extia-group.com/join-us",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/extia",
      },
    ],
  },
  {
    id: "fairly_made",
    title: "Fairly Made",
    websiteUrl: "https://www.fairlymade.com",
    description:
      "Sustainability platform for fashion and luxury brands. Provides supply-chain traceability, environmental impact measurement (LCA), ecodesign simulations, and digital product passports to help brands meet regulations and communicate transparently with consumers.",
    // imageKey: "placeholder",
    tags: ["Sustainability", "SaaS", "Fashion Tech", "Data & Analytics", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.fairlymade.com/career",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/fairly-made",
      },
    ],
  },
  {
    id: "figma",
    title: "Figma",
    websiteUrl: "https://www.figma.com",
    description:
      "Collaborative design platform used by product teams to create UI/UX designs, prototypes, design systems, and websites. Runs in the browser with real-time collaboration, plugins, and AI-assisted workflows.",
    // imageKey: "placeholder",
    tags: [
      "Design Tools",
      "SaaS",
      "Collaboration",
      "Developer Tools",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.figma.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/figma",
      },
    ],
  },
  {
    id: "fingerprint",
    title: "Fingerprint",
    websiteUrl: "https://fingerprint.com",
    description:
      "Device intelligence platform that identifies browsers and devices to detect fraud, bots, and account abuse. Provides signals for risk scoring, authentication, and payment security used by thousands of online businesses.",
    // imageKey: "placeholder",
    tags: [
      "Cybersecurity",
      "Fraud Detection",
      "SaaS",
      "API",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://fingerprint.com/careers/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/fingerprintjs",
      },
    ],
  },
  {
    id: "flexai",
    title: "FlexAI",
    websiteUrl: "https://flex.ai",
    description:
      "AI infrastructure platform that orchestrates GPU compute across clouds and hardware providers. Offers managed inference, fine-tuning, and training for AI teams, abstracting away cloud complexity and vendor lock-in.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Cloud", "Infrastructure", "Developer Tools", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://flex.ai/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/flexaihq",
      },
    ],
  },
  {
    id: "flowdesk",
    title: "Flowdesk",
    websiteUrl: "https://flowdesk.co",
    description:
      "Crypto market maker and digital-asset liquidity provider. Offers market-making-as-a-service, brokerage, custody, and treasury management for token issuers, exchanges, and institutions across centralized and decentralized venues.",
    // imageKey: "placeholder",
    tags: ["FinTech", "Crypto", "Market Making", "Trading", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.flowdesk.co/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/flowdesk-france",
      },
    ],
  },
  {
    id: "fluence_cloud",
    title: "Fluence Cloud",
    websiteUrl: "https://fluence.ai",
    description:
      "GPU cloud platform for AI workloads. Provides on-demand and reserved GPUs across global data centers for training, inference, fine-tuning, and model serving, with transparent pricing and flexible infrastructure options.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Cloud", "GPU", "Infrastructure", "Remote-worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://cloudless.dev/join",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/fluence-cloud",
      },
    ],
  },
  {
    id: "forgotten_empires",
    title: "Forgotten Empires",
    websiteUrl: "https://www.forgottenempires.net",
    description:
      "Game development studio specializing in real-time strategy titles, notably the Age of Empires series. Provides full-service PC game development, from design and engineering to art, QA, and live operations.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Game Development", "Strategy Games", "PC", "EU"],
    extraLinks: [
      {
        label: "Careers page (Workable)",
        url: "https://apply.workable.com/forgotten-empires",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/forgotten-empires",
      },
    ],
  },
  {
    id: "fountain",
    title: "Fountain",
    websiteUrl: "https://www.fountain.com",
    description:
      "AI-native hiring and workforce platform for frontline and hourly workers. Provides applicant tracking, AI screening, scheduling, onboarding, and workforce management to help enterprises hire and manage large teams.",
    // imageKey: "placeholder",
    tags: [
      "HR Tech",
      "AI / Data",
      "SaaS",
      "High-Volume Hiring",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://fountain.scalis.ai/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/fountaininc",
      },
    ],
  },
  {
    id: "front",
    title: "Front",
    websiteUrl: "https://front.com",
    description:
      "Customer operations platform with a shared inbox for email, chat, and other channels. Combines team collaboration, automation, and AI to help support, sales, and operations teams manage customer conversations at scale.",
    // imageKey: "placeholder",
    tags: [
      "Customer Support",
      "SaaS",
      "Collaboration",
      "Communication",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://front.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/fronthq",
      },
    ],
  },
  {
    id: "gameloft",
    title: "Gameloft",
    websiteUrl: "https://www.gameloft.com",
    description:
      "Mobile game developer and publisher with a large portfolio of franchises (e.g., Asphalt, Disney Dreamlight Valley). Creates and operates games for mobile, PC, and consoles with live-ops and global distribution.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Mobile", "Publishing", "Live Operations", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.gameloft.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gameloft",
      },
    ],
  },
  {
    id: "gandi",
    title: "Gandi",
    websiteUrl: "https://www.gandi.net",
    description:
      "Domain registrar and web services provider offering domain names, hosting, email, and SSL certificates. Focuses on simplicity, security, and ethical practices for individuals and businesses.",
    // imageKey: "placeholder",
    tags: ["Web Services", "Domains", "Hosting", "SMB", "EU"],
    extraLinks: [
      {
        label: "Careers page (Taleez)",
        url: "https://gandi.taleez.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gandi",
      },
    ],
  },
  {
    id: "ge_healthcare",
    title: "GE HealthCare",
    websiteUrl: "https://www.gehealthcare.com",
    description:
      "Global medical technology company providing imaging systems, ultrasound, patient monitoring, anesthesia, and pharmaceutical diagnostics. Builds AI-enabled devices and software to support diagnosis, treatment, and hospital workflows.",
    // imageKey: "placeholder",
    tags: [
      "HealthTech",
      "Medical Devices",
      "Imaging",
      "Enterprise",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.gehealthcare.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gehealthcare",
      },
    ],
  },
  {
    id: "gentis",
    title: "Gentis",
    websiteUrl: "https://www.gentis.com",
    description:
      "Global recruitment and staffing agency specializing in IT, engineering, finance, life sciences, and construction. Connects professionals with permanent and contract roles across Europe, the Middle East, and North America.",
    // imageKey: "placeholder",
    tags: ["Recruitment", "HR Tech", "Staffing", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.gentis.com/vacancies/list/1",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gentis-group",
      },
    ],
  },
  {
    id: "gestimum",
    title: "Gestimum",
    websiteUrl: "https://www.gestimum.com",
    description:
      "French ERP software publisher for SMEs. Provides integrated modules for sales, purchasing, inventory, accounting, and asset management, with industry-specific configurations and web services for integrations.",
    // imageKey: "placeholder",
    tags: ["SaaS", "ERP", "SMB", "Finance", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.gestimum.com/recrutement",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gestimum",
      },
    ],
  },
  {
    id: "getvocal_ai",
    title: "GetVocal AI",
    websiteUrl: "https://www.getvocal.ai",
    description:
      "AI voice platform for realistic text-to-speech and voice cloning. Enables creators and businesses to generate natural-sounding audio in multiple languages for content, ads, and applications.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Speech Tech", "SaaS", "Creator Tools", "EU"],
    extraLinks: [
      {
        label: "Careers page (Workable)",
        url: "https://apply.workable.com/getvocal-ai",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/getvocal",
      },
    ],
  },
  {
    id: "gitguardian",
    title: "GitGuardian",
    websiteUrl: "https://www.gitguardian.com",
    description:
      "Secrets detection and security platform for code and developer tools. Scans repositories, CI/CD pipelines, and collaboration apps to find and remediate leaked API keys, credentials, and tokens before they cause breaches.",
    // imageKey: "placeholder",
    tags: ["Cybersecurity", "DevSecOps", "SaaS", "Developer Tools", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.gitguardian.com/job-openings",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gitguardian",
      },
    ],
  },
  {
    id: "gitlab",
    title: "GitLab",
    websiteUrl: "https://about.gitlab.com",
    description:
      "DevOps platform that combines source code management, CI/CD, security scanning, and project management in a single application. Enables teams to plan, build, test, and ship software with end-to-end traceability.",
    // imageKey: "placeholder",
    tags: [
      "DevTools",
      "CI/CD",
      "SaaS",
      "Software Development",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://about.gitlab.com/jobs/all-jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gitlab-com",
      },
    ],
  },
  {
    id: "gladia",
    title: "Gladia",
    websiteUrl: "https://www.gladia.io",
    description:
      "AI audio infrastructure API for speech recognition, transcription, and enrichment. Provides multilingual, real-time transcription and speaker diarization for apps, contact centers, and media platforms.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Speech Tech", "API", "SaaS", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/gladia/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gladia-io",
      },
    ],
  },
  {
    id: "glera_games",
    title: "Glera Games",
    websiteUrl: "https://www.glera-games.com",
    description:
      "Mobile game development studio creating casual and mid-core games for global audiences. Handles full production from concept and art to live operations and monetization.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Mobile", "Game Development", "Live Operations", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://glera-games.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/gleragames",
      },
    ],
  },
  {
    id: "graphmytech",
    title: "GraphMyTech",
    websiteUrl: "https://www.graphmytech.com",
    description:
      "Innovation intelligence platform using AI and graph modeling to analyze patents, scientific papers, and technical data. Helps R&D and strategy teams detect emerging technologies and prioritize innovation opportunities.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "R&D", "SaaS", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.graphmytech.com/nous-recrutons",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/graphmytech",
      },
    ],
  },
  {
    id: "greenly",
    title: "Greenly",
    websiteUrl: "https://greenly.earth",
    description:
      "Carbon accounting and climate management platform for businesses. Automates Scope 1–3 emissions measurement, reduction planning, and regulatory reporting (CSRD, CBAM) with expert support.",
    // imageKey: "placeholder",
    tags: ["Climate Tech", "SaaS", "Carbon Accounting", "Sustainability", "EU"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.greenly.earth/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/greenly-earth",
      },
    ],
  },
  {
    id: "greenspark",
    title: "Greenspark",
    websiteUrl: "https://www.getgreenspark.com",
    description:
      "Climate action plugin and API for e-commerce and apps. Enables brands to plant trees, rescue plastic, and offset carbon per order, review, or subscription, with impact dashboards and customer-facing widgets.",
    // imageKey: "placeholder",
    tags: ["Climate Tech", "E-commerce", "Sustainability", "API", "EU"],
    extraLinks: [
      {
        label: "Careers page (Notion)",
        url: "https://getgreenspark.notion.site/Join-our-team-at-Greenspark-a3a1148f7d034ce2b09229090d44977b",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/get-greenspark",
      },
    ],
  },
  {
    id: "groupe_bpce",
    title: "Groupe BPCE",
    websiteUrl: "https://www.groupebpce.com",
    description:
      "Second-largest banking group in France, operating retail banks (Banque Populaire, Caisse d'Epargne), corporate and investment banking (Natixis), asset management, insurance, and payment services across Europe.",
    // imageKey: "placeholder",
    tags: ["Financial Services", "Banking", "Enterprise", "Insurance", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://recrutement.bpce.fr/offres-emploi",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/bpce",
      },
    ],
  },
  {
    id: "h_company",
    title: "H Company",
    websiteUrl: "https://hcompany.ai",
    description:
      "AI research and product company building action-oriented agents that operate computers and browsers. Develops models and tools that automate complex workflows for enterprises.",
    // imageKey: "placeholder",
    tags: ["AI / Data", "Automation", "Enterprise AI", "Deep Tech", "EU"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/hcompany",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/h-company-ai",
      },
    ],
  },
  {
    id: "harfanglab",
    title: "HarfangLab",
    websiteUrl: "https://harfanglab.io",
    description:
      "French cybersecurity company providing EDR (Endpoint Detection and Response) and endpoint protection. Offers a unified, ANSSI-certified platform for preventing, detecting, and responding to cyberattacks on workstations and servers.",
    // imageKey: "placeholder",
    tags: ["Cybersecurity", "EDR", "Enterprise", "SaaS", "EU"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://harfanglab-1666711819.teamtailor.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/harfanglab",
      },
    ],
  },
  {
    id: "harvest",
    title: "Harvest",
    websiteUrl: "https://www.harvest.fr",
    description:
      "French digital group offering consulting, integration, and managed services in cloud, data, cybersecurity, and application development. Supports large enterprises and public sector organizations in their digital transformation.",
    // imageKey: "placeholder",
    tags: ["IT Services", "Consulting", "Cloud", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page (Taleez)",
        url: "https://groupe-harvest.taleez.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/harvest-sas",
      },
    ],
  },
  {
    id: "harvey",
    title: "Harvey",
    websiteUrl: "https://www.harvey.ai",
    description:
      "Legal AI platform for law firms and corporate legal teams. Uses specialized models and agents to automate contract analysis, due diligence, compliance, litigation research, and document drafting.",
    // imageKey: "placeholder",
    tags: ["Legal Tech", "AI / Data", "SaaS", "Enterprise", "Remote-worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.harvey.ai/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/harvey-ai",
      },
    ],
  },
  {
    id: "hegia",
    title: "Hegia",
    websiteUrl: "https://hegia.fr",
    description:
      "Legal-tech startup building AI tools for legal professionals. Focuses on automating legal research, document review, and analysis to help lawyers and in-house teams work more efficiently.",
    // imageKey: "placeholder",
    tags: ["Legal Tech", "AI / Data", "SaaS", "B2B", "EU"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/heg-ia",
      },
    ],
  },
  {
    id: "hellobetter",
    title: "HelloBetter",
    websiteUrl: "https://hellobetter.de",
    description:
      "Digital mental health company offering evidence-based online therapy programs and an AI companion for stress, anxiety, sleep, and other conditions. Provides prescription-covered digital therapeutics in Germany.",
    // imageKey: "placeholder",
    tags: ["HealthTech", "Mental Health", "Digital Therapeutics", "B2C", "EU"],
    extraLinks: [
      {
        label: "Careers page (Personio)",
        url: "https://geton.jobs.personio.de",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/hellobetter",
      },
    ],
  },
  {
    id: "helpline",
    title: "Helpline",
    websiteUrl: "https://www.helpline.fr",
    description:
      "IT service desk and digital workplace provider. Delivers user support, application support, and IT asset management for enterprises, combining human expertise with AI-enhanced tools.",
    // imageKey: "placeholder",
    tags: ["IT Services", "Service Desk", "Enterprise", "Support", "EU"],
    extraLinks: [
      {
        label: "Careers page (SmartRecruiters)",
        url: "https://careers.smartrecruiters.com/EVERIENCE/helpline",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/helpline-service-desk",
      },
    ],
  },
  {
    id: "hexa",
    title: "Hexa",
    websiteUrl: "https://www.hexa.com",
    description:
      "Crypto wallet and on-ramp platform simplifying access to Web3. Provides a user-friendly interface for buying, storing, and managing digital assets across multiple blockchains.",
    // imageKey: "placeholder",
    tags: ["Crypto", "Wallet", "Web3", "B2C", "Remote-worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.hexa.com/positions",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/joinhexa",
      },
    ],
  },
  {
    id: "hexaly",
    title: "Hexaly",
    websiteUrl: "https://www.hexaly.com",
    description:
      "Mathematical optimization software company. Provides a next-generation solver and low-code studio for routing, scheduling, packing, and supply-chain problems used by logistics, manufacturing, and tech companies.",
    // imageKey: "placeholder",
    tags: ["Optimization", "SaaS", "Operations Research", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.hexaly.com/join-us",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/hexaly",
      },
    ],
  },
  {
    id: "hgh_infrared_systems",
    title: "HGH Infrared Systems",
    websiteUrl: "https://hgh-infrared.com",
    description:
      "Electro-optics and infrared technology company designing surveillance, thermography, and test-and-measurement systems. Serves defense, security, and industrial markets with panoramic IR cameras and calibration equipment.",
    // imageKey: "placeholder",
    tags: [
      "Defense Tech",
      "Infrared",
      "Hardware & Software",
      "Enterprise",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://hgh-infrared.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/hgh-infrared-systems",
      },
    ],
  },
  {
    id: "hightouch",
    title: "Hightouch",
    websiteUrl: "https://hightouch.com",
    description:
      "Data activation and composable CDP platform. Syncs customer data from warehouses to 300+ marketing, sales, and support tools, and provides AI-driven audience building and campaign orchestration.",
    // imageKey: "placeholder",
    tags: [
      "MarTech",
      "Data & Analytics",
      "SaaS",
      "Customer Data",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://hightouch.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/hightouchio",
      },
    ],
  },
  {
    id: "homa",
    title: "Homa",
    websiteUrl: "https://www.homagames.com",
    description:
      "Mobile game developer and publisher focused on hyper-casual and casual titles. Provides data-driven tools, funding, and user-acquisition expertise to help studios scale hit games.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Mobile", "Publishing", "User Acquisition", "EU"],
    extraLinks: [
      {
        label: "Careers page (Workable)",
        url: "https://apply.workable.com/homa-games",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/homa-games",
      },
    ],
  },
  {
    id: "honoré_gaming",
    title: "Honoré Gaming",
    websiteUrl: "https://honore-gaming.com",
    description:
      "Betting software provider for regulated iGaming operators. Offers a turnkey platform for sports betting, horse racing (pari-mutuel), lottery, and casino with integrated odds, risk management, and reporting.",
    // imageKey: "placeholder",
    tags: ["Gaming", "Betting", "B2B", "Platform", "EU"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.honore-gaming.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/honore-gaming",
      },
    ],
  },
  {
    id: "hublo",
    title: "Hublo",
    websiteUrl: "https://hublo.com",
    description:
      "Alumni and community engagement platform for schools, universities, and organizations. Provides networking, mentoring, job boards, and events tools to strengthen alumni relations and career support.",
    // imageKey: "placeholder",
    tags: ["EdTech", "Community", "SaaS", "Networking", "EU"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.hublo.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/hublo-fr",
      },
    ],
  },
  {
    id: "ibm",
    title: "IBM",
    websiteUrl: "https://www.ibm.com",
    description:
      "Global technology and consulting company providing hybrid cloud, AI, quantum computing, and enterprise software. Offers consulting, infrastructure, security, and automation solutions for large organizations.",
    // imageKey: "placeholder",
    tags: [
      "Enterprise",
      "Cloud",
      "AI / Data",
      "Consulting",
      "Remote-worldwide",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.ibm.com/careers/search",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ibm",
      },
    ],
  },
  {
    id: "icd_international",
    title: "ICD INTERNATIONAL",
    websiteUrl: "https://icdint.fr",
    description:
      "Engineering and digital consulting firm supporting clients in automotive, aerospace, energy, and industry. Provides R&D, embedded systems, IT, and digital transformation services across Europe.",
    // imageKey: "placeholder",
    tags: ["Engineering", "Consulting", "Embedded Systems", "Enterprise", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://icdint.fr/carrieres",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/icd-international-icdsc",
      },
    ],
  },
  {
    id: "ideawise_group",
    title: "IDEAWISE GROUP",
    websiteUrl: "https://www.ideawisegroup.com",
    description:
      "Digital product and technology group building web and mobile applications for startups and scale-ups. Combines product strategy, UX/UI design, and engineering to launch and scale digital products.",
    // imageKey: "placeholder",
    tags: [
      "Digital Agency",
      "Software Development",
      "Product Design",
      "Startups",
      "EU",
    ],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ideawise-group",
      },
    ],
  },
  {
    id: "iliad",
    title: "Iliad",
    websiteUrl: "https://www.iliad.fr",
    description:
      "French telecom group operating Free Mobile, Freebox, and data-center infrastructure. Provides mobile, fixed-line, and internet services to consumers and businesses in Europe.",
    // imageKey: "placeholder",
    tags: ["Telecom", "ISP", "Infrastructure", "Consumer", "EU"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://recrutement.iliad-free.fr",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/groupe-iliad",
      },
    ],
  },
  {
    id: "implicity",
    title: "Implicity",
    websiteUrl: "https://implicity.com",
    description:
      "Digital health startup offering remote monitoring and decision-support tools for breast cancer care. Provides AI-assisted imaging analysis and care coordination for radiologists and oncologists.",
    // imageKey: "placeholder",
    tags: ["HealthTech", "AI / Data", "Medical Imaging", "B2B", "EU"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://implicity.welcomekit.co",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/implicity-healthcare",
      },
    ],
  },
];
