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
    tags: ["AI", "SaaS", "Europe"],
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
    tags: ["SaaS", "Data", "Europe"],
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
    tags: ["SaaS", "AI", "France"],
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
    tags: ["Consulting", "FinTech", "France"],
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
    tags: ["ITServices", "SaaS", "France"],
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
    tags: ["Data", "ITServices", "France"],
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
    tags: ["Data", "Consulting", "France"],
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
    tags: ["SaaS", "Media", "Europe"],
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
    tags: ["SaaS", "Ecommerce", "France"],
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
    tags: ["ITServices", "Media", "Europe"],
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
    tags: ["FinTech", "AI", "France"],
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
    tags: ["HealthTech", "FinTech", "France"],
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
    tags: ["ITServices", "SaaS", "Europe"],
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
    tags: ["ITServices", "France"],
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
    tags: ["AI", "SaaS", "France"],
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
    tags: ["AI", "France"],
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
    tags: ["FinTech", "Ecommerce", "France"],
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
    tags: ["FinTech", "Worldwide"],
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
    tags: ["SaaS", "France"],
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
    tags: ["Gaming", "Europe"],
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
    tags: ["ITServices", "Consulting", "France"],
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
    tags: ["Climate", "Europe"],
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
    tags: ["AI", "Data", "France"],
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
    tags: ["SaaS", "Europe"],
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
    tags: ["Gaming", "Media", "Europe"],
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
    tags: ["AI", "Worldwide"],
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
    tags: ["FinTech", "Europe"],
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
    tags: ["FinTech", "HealthTech", "Europe"],
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
    tags: ["Ecommerce", "Climate", "Europe"],
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
    tags: ["ITServices", "Consulting", "France"],
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
    tags: ["AI", "France"],
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
    tags: ["Media", "France"],
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
    tags: ["SaaS", "Europe"],
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
    tags: ["FinTech", "Worldwide"],
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
    tags: ["FinTech", "Europe"],
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
    tags: ["AI", "SaaS", "France"],
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
    tags: ["SaaS", "Media", "France"],
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
    tags: ["SaaS", "Europe"],
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
    tags: ["SaaS", "Europe"],
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
    tags: ["Ecommerce", "Worldwide"],
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
    tags: ["Media", "France"],
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
    tags: ["SaaS", "Worldwide"],
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
    tags: ["FinTech", "Worldwide"],
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
    tags: ["SaaS", "FinTech", "France"],
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
    tags: ["FinTech", "Ecommerce", "Europe"],
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
    tags: ["Media", "Europe"],
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
    tags: ["SaaS", "Ecommerce", "Europe"],
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
    tags: ["HealthTech", "SaaS", "Worldwide"],
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
    tags: ["Media", "Europe"],
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
    tags: ["SaaS", "Worldwide"],
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
    tags: ["FinTech", "Europe"],
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
    tags: ["FinTech", "Worldwide"],
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
    tags: ["Climate", "Data", "Europe"],
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
    tags: ["Data", "SaaS", "France"],
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
    tags: ["LegalTech", "SaaS", "Europe"],
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
    tags: ["ITServices", "Ecommerce", "France"],
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
    tags: ["AI", "SaaS", "France"],
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
    tags: ["LegalTech", "AI", "Europe"],
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
    tags: ["Ecommerce", "Media", "Europe"],
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
    tags: ["AI", "Media", "France"],
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
    tags: ["FinTech", "France"],
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
    tags: ["Media", "France"],
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
    tags: ["SaaS", "France"],
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
    tags: ["HealthTech", "SaaS", "France"],
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
    tags: ["FinTech", "SaaS", "France"],
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
    tags: ["SaaS", "France"],
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
    tags: ["SaaS", "Worldwide"],
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
    tags: ["Data", "SaaS", "France"],
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
    tags: ["AI", "Data", "France"],
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
    tags: ["Gaming", "Europe"],
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
    tags: ["HealthTech", "Europe"],
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
    tags: ["FinTech", "SaaS", "Worldwide"],
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
    tags: ["Media", "France"],
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
    tags: ["Consulting", "FinTech", "Worldwide"],
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
    tags: ["AI", "Consulting", "France"],
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
    tags: ["FinTech", "Climate", "France"],
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
    tags: ["Data", "SaaS", "France"],
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
    tags: ["ITServices", "Consulting", "France"],
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
    tags: ["Gaming", "Europe"],
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
    tags: ["SaaS", "Europe"],
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
    tags: ["LegalTech", "AI", "France"],
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
    tags: ["Media", "Worldwide"],
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
    tags: ["AI", "SaaS", "France"],
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
    tags: ["Data", "AI", "France"],
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
    tags: ["AI", "Worldwide"],
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
    tags: ["Climate", "Europe"],
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
    tags: ["Gaming", "Ecommerce", "Europe"],
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
    tags: ["Climate", "France"],
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
    tags: ["Media", "France"],
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
    tags: ["Gaming", "Worldwide"],
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
    tags: ["FinTech", "Europe"],
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
    tags: ["FinTech", "Europe"],
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
    tags: ["ITServices", "Consulting", "France"],
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
    tags: ["Climate", "SaaS", "France"],
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
    tags: ["SaaS", "Worldwide"],
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
    tags: ["FinTech", "SaaS", "Worldwide"],
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
    tags: ["AI", "SaaS", "France"],
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
    tags: ["FinTech", "France"],
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
    tags: ["AI", "Worldwide"],
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
    tags: ["Gaming", "France"],
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
    tags: ["SaaS", "Worldwide"],
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
    tags: ["SaaS", "Worldwide"],
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
    tags: ["Gaming", "France"],
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
    tags: ["SaaS", "France"],
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
    tags: ["HealthTech", "Worldwide"],
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
    tags: ["ITServices", "Europe"],
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
    tags: ["SaaS", "FinTech", "France"],
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
    tags: ["AI", "France"],
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
    tags: ["SaaS", "France"],
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
    tags: ["SaaS", "Worldwide"],
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
    tags: ["AI", "France"],
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
    tags: ["Gaming", "France"],
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
    tags: ["AI", "Data", "France"],
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
    tags: ["Climate", "SaaS", "France"],
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
    tags: ["Climate", "Ecommerce", "Europe"],
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
    tags: ["FinTech", "France"],
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
    tags: ["AI", "France"],
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
    tags: ["FinTech", "SaaS", "France"],
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
    tags: ["ITServices", "Consulting", "France"],
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
    tags: ["LegalTech", "AI", "Worldwide"],
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
    tags: ["LegalTech", "AI", "France"],
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
    tags: ["HealthTech", "Europe"],
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
    tags: ["ITServices", "France"],
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
    tags: ["FinTech", "Worldwide"],
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
    tags: ["SaaS", "Data", "France"],
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
    tags: ["ITServices", "France"],
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
    tags: ["Data", "SaaS", "Worldwide"],
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
    tags: ["Gaming", "France"],
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
    tags: ["Gaming", "FinTech", "France"],
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
    tags: ["SaaS", "France"],
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
    tags: ["AI", "Consulting", "Worldwide"],
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
    tags: ["ITServices", "Consulting", "France"],
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
    tags: ["ITServices", "France"],
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
    tags: ["ITServices", "France"],
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
    tags: ["HealthTech", "AI", "France"],
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
  {
    id: "inato",
    title: "Inato",
    websiteUrl: "https://www.inato.com",
    description:
      "Clinical trial management platform for biotech and medtech companies. Provides tools for feasibility, site selection, budgeting, and regulatory tracking to accelerate study start-up and execution.",
    tags: ["HealthTech", "SaaS", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.inato.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/inato",
      },
    ],
  },
  {
    id: "inetum",
    title: "Inetum",
    websiteUrl: "https://www.inetum.com",
    description:
      "European IT services and consulting group supporting digital transformation for large enterprises and public sector. Offers application development, infrastructure, cloud, data, and cybersecurity services.",
    tags: ["ITServices", "Consulting", "Europe"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.inetum.com/global/en/careers/jobs.html",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/inetum",
      },
    ],
  },
  {
    id: "ingenico",
    title: "Ingenico",
    websiteUrl: "https://ingenico.com",
    description:
      "Global provider of payment terminals and solutions for merchants, banks, and service providers. Designs secure hardware and software for in-store, online, and mobile payments, including POS systems and tokenization.",
    tags: ["FinTech", "Europe"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://jobs.ingenico.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ingenico",
      },
    ],
  },
  {
    id: "ingenius",
    title: "Ingenius",
    websiteUrl: "https://www.ingenius.global",
    description:
      "AI product studio building custom AI applications and agents for companies. Combines product design, engineering, and applied AI to deliver end-to-end solutions from prototype to production.",
    tags: ["AI", "ITServices", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.ingenius.global/career",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ingeniusai",
      },
    ],
  },
  {
    id: "inpulse",
    title: "Inpulse",
    websiteUrl: "https://www.inpulse.ai",
    description:
      "AI-powered sales intelligence platform for B2B teams. Enriches lead data, scores prospects, and automates outreach to help sales and marketing teams focus on high-potential opportunities.",
    tags: ["AI", "SaaS", "France"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/deepsight/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/inpulseai",
      },
    ],
  },
  {
    id: "institut_français_d'intelligence_artificielle",
    title: "Institut Français d'Intelligence Artificielle",
    websiteUrl: "https://www.institut-ia.com",
    description:
      "French AI research and training institute offering courses, certifications, and applied research projects in machine learning, deep learning, and generative AI. Works with students, professionals, and companies to build AI skills and solutions.",
    tags: ["AI", "France"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/institut-fran%C3%A7ais-d-intelligence-artificielle",
      },
    ],
  },
  {
    id: "jobadder",
    title: "JobAdder",
    websiteUrl: "https://jobadder.com",
    description:
      "Cloud-based recruitment software for staffing agencies and HR teams. Provides applicant tracking, candidate management, job posting, and reporting tools to streamline hiring workflows.",
    tags: ["SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://jobadder.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/jobadder-com",
      },
    ],
  },
  {
    id: "jobgether",
    title: "Jobgether",
    websiteUrl: "https://jobgether.com",
    description:
      "Remote job board and career platform focused on flexible and location-independent roles. Aggregates remote opportunities across tech, marketing, customer support, and more, with company profiles and salary insights.",
    tags: ["SaaS", "Europe"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://jobgether.com/remote-jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/jobgether",
      },
    ],
  },
  {
    id: "joko",
    title: "Joko",
    websiteUrl: "https://home.joko.com",
    description:
      "Cashback and rewards app that gives users money back on everyday purchases. Partners with major retailers and brands to offer automatic cashback when shopping online or in-store via linked cards.",
    tags: ["FinTech", "Ecommerce", "France"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/joko/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/jokoapp",
      },
    ],
  },
  {
    id: "jus_mundi",
    title: "Jus Mundi",
    websiteUrl: "https://jusmundi.com",
    description:
      "Legal research platform specializing in international arbitration and public international law. Provides access to case law, treaties, awards, and scholarly content with AI-powered search for lawyers and academics.",
    tags: ["LegalTech", "AI", "France"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://jus-mundi.welcomekit.co",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/jus-mundi",
      },
    ],
  },
  {
    id: "justrelate",
    title: "JustRelate",
    websiteUrl: "https://www.justrelate.com",
    description:
      "Digital agency and software studio building web and mobile products for startups and enterprises. Offers product strategy, UX/UI design, and full-stack development with a focus on scalable, user-centric solutions.",
    tags: ["ITServices", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.justrelate.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/justrelate-group",
      },
    ],
  },
  {
    id: "kaisa",
    title: "Kaisa",
    websiteUrl: "https://www.kaisa.io",
    description:
      "Customer engagement platform for high-consideration purchases such as cars and marketplaces. Combines conversational data, AI voice agents, and automation to personalize buyer journeys and improve conversion across channels.",
    tags: ["AI", "SaaS", "Europe"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.kaisa.io/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/kaisa-io",
      },
    ],
  },
  {
    id: "kbrw",
    title: "Kbrw",
    websiteUrl: "https://kbrw.com",
    description:
      "Supply chain software publisher offering OMS and WMS solutions for retailers, luxury brands, and industrial companies. Orchestrates orders, inventory, and fulfillment in real time across complex, multi-channel environments.",
    tags: ["SaaS", "Data", "France"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.kbrw.fr/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/kbrw",
      },
    ],
  },
  {
    id: "klara",
    title: "Klara",
    websiteUrl: "https://www.klarahr.com",
    description:
      "Employee development and skills platform for frontline and deskless teams. Uses AI to map skills, track progress, and guide training and career paths, helping managers improve performance and retention.",
    tags: ["AI", "SaaS", "Europe"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/madtech/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/klarahr",
      },
    ],
  },
  {
    id: "kolsquare",
    title: "Kolsquare",
    websiteUrl: "https://www.kolsquare.com",
    description:
      "Influencer marketing platform that uses AI and big data to find creators, manage campaigns, and measure ROI. Covers Instagram, TikTok, YouTube, and other social networks for brands and agencies.",
    tags: ["AI", "Media", "France"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://kolsquareteamblue.teamtailor.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/kolsquare",
      },
    ],
  },
  {
    id: "komodo",
    title: "Komodo",
    websiteUrl: "https://www.komodohealth.com",
    description:
      "Healthcare data and AI company building a large-scale patient journey map. Provides analytics and insights for life sciences, payers, and providers to improve treatments, access, and outcomes.",
    tags: ["HealthTech", "Data", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page (Greenhouse)",
        url: "https://job-boards.greenhouse.io/komodohealth",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/komodo-health",
      },
    ],
  },
  {
    id: "koyeb",
    title: "Koyeb",
    websiteUrl: "https://www.koyeb.com",
    description:
      "Serverless platform for deploying and running applications, APIs, and workers globally. Lets developers ship from Git or containers without managing servers or Kubernetes, with automatic scaling and edge deployment.",
    tags: ["SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.koyeb.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/koyeb",
      },
    ],
  },
  {
    id: "kpmg",
    title: "KPMG",
    websiteUrl: "http://www.kpmg.com",
    description:
      "Global professional services firm offering audit, tax, and advisory services. Helps organizations with financial reporting, risk, compliance, strategy, and digital transformation across industries.",
    tags: ["Consulting", "FinTech", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://kpmg.com/xx/en/careers/job-search.html",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/kpmg",
      },
    ],
  },
  {
    id: "kyriba",
    title: "Kyriba",
    websiteUrl: "https://www.kyriba.com",
    description:
      "Cloud treasury and liquidity performance platform for CFOs and treasurers. Centralizes cash management, payments, forecasting, and risk to give real-time visibility and control over global liquidity.",
    tags: ["FinTech", "SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/kyriba/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/kyriba",
      },
    ],
  },
  {
    id: "lagardère_travel_retail",
    title: "Lagardère Travel Retail",
    websiteUrl: "https://www.lagardere-tr.com",
    description:
      "Global travel retail operator running shops and restaurants in airports and train stations. Manages duty-free, fashion, travel essentials, and dining brands such as Relay and Aelia across dozens of countries.",
    tags: ["Ecommerce", "Europe"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.lagardere-tr.com/join-us/join-us",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/lagarderetravelretail",
      },
    ],
  },
  {
    id: "lago",
    title: "Lago",
    websiteUrl: "https://getlago.com",
    description:
      "Open-source billing infrastructure for usage-based and subscription pricing. Provides APIs and dashboards to meter usage, configure plans, generate invoices, and sync with payment providers and accounting tools.",
    tags: ["FinTech", "SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://getlago.com/hiring",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/getlago",
      },
    ],
  },
  {
    id: "launchmetrics",
    title: "Launchmetrics",
    websiteUrl: "https://www.launchmetrics.com",
    description:
      "Brand performance cloud for fashion, luxury, and beauty. Combines media monitoring, influencer data, and event management to measure campaign impact and optimize marketing strategies.",
    tags: ["Media", "Data", "France"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.launchmetrics.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/launchmetrics",
      },
    ],
  },
  {
    id: "le_wagon",
    title: "Le Wagon",
    websiteUrl: "https://www.lewagon.com",
    description:
      "Tech bootcamp offering intensive courses in web development, data, and AI. Trains students and professionals through live, project-based programs on campus and online, with career support.",
    tags: ["ITServices", "Europe"],
    extraLinks: [
      {
        label: "Careers page (Notion)",
        url: "https://lewagon.notion.site/career-at-le-wagon",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/school/le-wagon",
      },
    ],
  },
  {
    id: "leboncoin",
    title: "Leboncoin",
    websiteUrl: "https://www.leboncoin.fr",
    description:
      "Leading French online marketplace for classified ads. Connects buyers and sellers for real estate, cars, jobs, home goods, and services, with both consumer and professional listings.",
    tags: ["Ecommerce", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.leboncoin.fr/boutique/11532/postulez_aux_offres_d_emploi_leboncoin.htm",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/leboncoin",
      },
    ],
  },
  {
    id: "ledger",
    title: "Ledger",
    websiteUrl: "https://www.ledger.com",
    description:
      "Crypto security company designing hardware wallets and software for self-custody of digital assets. Provides devices and apps to store, manage, and transact with cryptocurrencies and NFTs securely.",
    tags: ["FinTech", "France"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/ledger",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ledgerhq",
      },
    ],
  },
  {
    id: "lemlist",
    title: "Lemlist",
    websiteUrl: "https://www.lemlist.com",
    description:
      "AI-powered sales engagement platform for multichannel outbound. Combines lead database, enrichment, and automated sequences across email, LinkedIn, calls, and messaging to personalize outreach at scale.",
    tags: ["AI", "SaaS", "Europe"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/lemlist",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/lemlist",
      },
    ],
  },
  {
    id: "licorne_society",
    title: "Licorne Society",
    websiteUrl: "https://www.licornesociety.com",
    description:
      "Recruitment firm specialized in tech, digital, and startups. Connects startups and scale-ups with candidates in engineering, data, product, sales, marketing, and operations across France and Europe.",
    tags: ["ITServices", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.licornesociety.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/licorne-society",
      },
    ],
  },
  {
    id: "lightdash",
    title: "Lightdash",
    websiteUrl: "https://www.lightdash.com",
    description:
      "Open-source, AI-first BI platform for modern data teams. Connects to dbt and data warehouses to define metrics once and expose them via dashboards, AI agents, and embedded analytics.",
    tags: ["Data", "SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/lightdash",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/lightdash",
      },
    ],
  },
  {
    id: "lightspeed",
    title: "Lightspeed",
    websiteUrl: "https://www.lightspeedhq.com",
    description:
      "Cloud commerce platform providing POS, payments, inventory, and ecommerce for retail and hospitality. Unifies in-store and online sales, procurement, and reporting for merchants worldwide.",
    tags: ["Ecommerce", "FinTech", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.lightspeedhq.com/careers/openings",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/lightspeedcommerce",
      },
    ],
  },
  {
    id: "limova.ai",
    title: "Limova.ai",
    websiteUrl: "https://www.limova.ai",
    description:
      "Platform of autonomous AI agents for business operations. Automates legal documents, compliance checks, marketing, sales, and customer tasks by connecting to everyday tools via chat interfaces.",
    tags: ["AI", "LegalTech", "France"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/limova",
      },
    ],
  },
  {
    id: "linear",
    title: "Linear",
    websiteUrl: "https://linear.app",
    description:
      "Product development system for software teams. Combines issue tracking, roadmaps, and AI-powered workflows to plan, build, and ship products with tight integration to code and CI/CD.",
    tags: ["SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://linear.app/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/linearapp",
      },
    ],
  },
  {
    id: "lity",
    title: "Lity",
    websiteUrl: "https://lity.so",
    description:
      "Multi-specialist recruitment agency covering tech, sales, marketing, finance, legal, and people roles. Supports startups and large companies across France with permanent and freelance hiring.",
    tags: ["ITServices", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://lity.so/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/lityso",
      },
    ],
  },
  {
    id: "lseg",
    title: "LSEG",
    websiteUrl: "https://www.lseg.com",
    description:
      "Global financial markets infrastructure and data provider. Operates the London Stock Exchange and offers data & analytics, indices, risk intelligence, trading, clearing, and post-trade services.",
    tags: ["FinTech", "Data", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page (Workday)",
        url: "https://lseg.wd3.myworkdayjobs.com/Careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/london-stock-exchange-group",
      },
    ],
  },
  {
    id: "luma_ai",
    title: "Luma AI",
    websiteUrl: "https://lumalabs.ai",
    description:
      "Creative AI platform for generating and editing video, images, and 3D content. Provides AI agents and models that assist with visual creation from concept to final render.",
    tags: ["AI", "Media", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://lumalabs.ai/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/lumalabsai",
      },
    ],
  },
  {
    id: "lumapps",
    title: "Lumapps",
    websiteUrl: "https://www.lumapps.com",
    description:
      "Employee experience platform combining intranet, communications, AI, and workflows. Connects employees, tools, and knowledge in a unified hub for internal comms, learning, and operations.",
    tags: ["SaaS", "Europe"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://job.lumapps.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/lumapps",
      },
    ],
  },
  {
    id: "madbox",
    title: "Madbox",
    websiteUrl: "https://madbox.io",
    description:
      "Mobile gaming studio that creates and self-publishes casual games for a global audience. Focuses on hyper-casual and hybrid-casual titles with large-scale user acquisition and live operations.",
    tags: ["Gaming", "France"],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.madbox.io",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/madbox",
      },
    ],
  },
  {
    id: "mallow",
    title: "Mallow",
    websiteUrl: "https://mallow.fr",
    description:
      "Edtech startup creating screen-free audio learning experiences for children. Combines storytelling, voice interaction, and AI to build educational games that develop concentration, memory, and confidence.",
    tags: ["EdTech", "AI", "France"],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/mallow-kids",
      },
    ],
  },
  {
    id: "malou",
    title: "Malou",
    websiteUrl: "https://www.malou.io",
    description:
      "AI-powered marketing platform for multi-location restaurant groups. Centralizes local SEO, listings, reviews, and social media to improve visibility, attract diners, and automate reputation management.",
    tags: ["AI", "Media", "France"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/malou/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/malou",
      },
    ],
  },
  {
    id: "mambu",
    title: "Mambu",
    websiteUrl: "https://mambu.com",
    description:
      "Cloud-native core banking platform for lenders and financial institutions. Provides composable SaaS infrastructure for deposits, loans, and digital banking products with open APIs and integrations.",
    tags: ["FinTech", "SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers-mambu.icims.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/mambu",
      },
    ],
  },
  {
    id: "mastercard",
    title: "Mastercard",
    websiteUrl: "https://www.mastercard.com",
    description:
      "Global payments technology company operating one of the world’s largest card networks. Enables secure electronic transactions for consumers, merchants, and financial institutions across debit, credit, and digital payments.",
    tags: ["FinTech", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://careers.mastercard.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/mastercard",
      },
    ],
  },
  {
    id: "medusa",
    title: "Medusa",
    websiteUrl: "https://medusajs.com",
    description:
      "Open-source, headless commerce platform for building custom ecommerce experiences. Provides a modular backend with APIs for products, cart, checkout, payments, and order management, designed for developers.",
    tags: ["Ecommerce", "SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://medusajs.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/medusajs",
      },
    ],
  },
  {
    id: "meltwater",
    title: "Meltwater",
    websiteUrl: "https://www.meltwater.com",
    description:
      "Media and consumer intelligence platform for PR, marketing, and insights teams. Monitors news, social media, and online conversations, and uses AI to analyze sentiment, trends, and brand perception.",
    tags: ["Media", "AI", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://meltwatercareers.ttcportals.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/meltwater",
      },
    ],
  },
  {
    id: "meritis",
    title: "Meritis",
    websiteUrl: "https://meritis.fr",
    description:
      "IT and digital transformation consulting group. Supports clients with IT strategy, project management, software engineering, data, cloud, cybersecurity, and finance-related technology projects.",
    tags: ["ITServices", "Consulting", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://meritis.fr/home-career",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/meritis-b-corp%E2%84%A2",
      },
    ],
  },
  {
    id: "metabase",
    title: "Metabase",
    websiteUrl: "https://www.metabase.com",
    description:
      "Open-source business intelligence and analytics platform. Lets teams explore data, build dashboards, and ask questions via a visual interface or AI, with options to embed analytics in other products.",
    tags: ["Data", "SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.metabase.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/metabase",
      },
    ],
  },
  {
    id: "mind7_consulting",
    title: "Mind7 Consulting",
    websiteUrl: "https://mind7.com",
    description:
      "Consulting and services group helping organizations with digital transformation, IT strategy, and sustainable tech. Combines project management, microservices architecture, data engineering, and Green IT expertise.",
    tags: ["Consulting", "ITServices", "France"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/mind7/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/groupe-mind7-consulting",
      },
    ],
  },
  {
    id: "mistral",
    title: "Mistral",
    websiteUrl: "https://mistral.ai",
    description:
      "French AI company developing large language models and an enterprise AI platform. Offers open-weight models, custom model training, and sovereign AI infrastructure for deploying assistants and agents from cloud to edge.",
    tags: ["AI", "SaaS", "France"],
    extraLinks: [
      {
        label: "Careers page (Ashby)",
        url: "https://jobs.ashbyhq.com/mistral.ai",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/mistralai",
      },
    ],
  },
  {
    id: "mobiapps",
    title: "Mobiapps",
    websiteUrl: "https://mobiapps.fr",
    description:
      "Mobile and digital agency designing, developing, and managing multi-platform apps and enterprise mobility solutions. Covers UX/UI, native and hybrid development, testing, and mobile device management for businesses.",
    tags: ["ITServices", "France"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://mobiapps.fr/job/nos-offres-demploi",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/mobiappsfr",
      },
    ],
  },
  {
    id: "molotov",
    title: "Molotov",
    websiteUrl: "https://www.molotov.tv",
    description:
      "Streaming TV platform aggregating live channels, replay, and on-demand content in a unified interface. Provides free and premium plans with cloud recording, multi-screen support, and advanced discovery features.",
    tags: ["Media", "France"],
    extraLinks: [
      {
        label: "Careers page (Welcome to the Jungle)",
        url: "https://www.welcometothejungle.com/companies-v1/molotov/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/molotov-tv",
      },
    ],
  },
  {
    id: "mui",
    title: "MUI",
    websiteUrl: "https://mui.com",
    description:
      "Open-source React component library and design system toolkit. Provides Material UI, Base UI, and advanced components (data grid, date pickers, charts) to help teams build accessible, production-ready interfaces.",
    tags: ["SaaS", "Worldwide"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://mui.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/mui",
      },
    ],
  },
];
