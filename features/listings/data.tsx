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
        url: "https://www.welcometothejungle.com/fr/companies-v1/alma/jobs",
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
    description: "",
    // imageKey: "placeholder",
    tags: [],
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
    description: "",
    // imageKey: "placeholder",
    tags: [],
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
    description: "",
    // imageKey: "placeholder",
    tags: [],
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
    description: "",
    // imageKey: "placeholder",
    tags: [],
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
    description: "",
    // imageKey: "placeholder",
    tags: [],
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
];
