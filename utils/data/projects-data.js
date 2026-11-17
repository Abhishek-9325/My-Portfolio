import sany from "/public/image/sany.png";
import hrone from "/public/image/hrone.png";
import landglobal from "/public/image/landglobal.png";
import symphony from "/public/image/symphony.png";
import nisarg from "/public/image/nisarg.png";
import ari from "/public/image/ari.png";
import movix from "/public/image/movix.png";
import shoe_store from "/public/image/shoe_store.png";
import tutopia from "/public/image/tutopia.png";
import bmwtecworks from "/public/image/BMW-TechWorks.png";
import MERNCHAT from "/public/image/MERN-CHAT.png";

// Featured Engineering & Web Applications
export const projectsData = [
  {
    id: 1,
    name: "Shopify Invoice Automation",
    badge: "Featured Engineering",
    diagramId: "shopify-invoice",
    description:
      "Architected and engineered two custom Shopify automation applications designed to streamline end-to-end invoice generation and processing for enterprise store operations. Built resilient API integrations with Shopify Admin APIs, utilizing asynchronous background job queues and batch processing workflows to eliminate manual fulfillment overhead, prevent API rate-limit bottlenecks, and ensure uninterrupted operations during high-volume sales peaks.",
    tools: [
      "Next.js",
      "Shopify Admin APIs",
      "Background Job Queues",
      "Batch Workflows",
      "REST APIs",
      "TypeScript",
      "Node.js",
    ],
    contributions: [
      "Engineered automated webhook and API ingestion pipelines connecting Shopify store checkouts to custom invoice services.",
      "Implemented asynchronous background job queues and batch-processing workers to handle high-concurrency order spikes smoothly.",
      "Designed intelligent retry mechanisms with exponential backoff to recover automatically from transient external API limits or network drops.",
      "Ensured strict data consistency, invoice compliance, and seamless order fulfillment status synchronization.",
    ],
    code: "",
    demo: "",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Kylas CRM – Delhivery Integration",
    badge: "Featured Engineering",
    diagramId: "kylas-delhivery",
    clientRef: "https://kylas.io/",
    clientRefLabel: "Kylas CRM Platform",
    description:
      "Developed a mission-critical Next.js integration application bridging Kylas CRM with the Delhivery logistics infrastructure. The system automates both individual and high-volume bulk shipment creation directly from sales pipeline triggers, eliminates manual logistics coordination, implements robust API failure handling, and generates print-ready thermal and standard barcode shipping labels in real time.",
    tools: [
      "Next.js",
      "REST APIs",
      "Kylas CRM APIs",
      "Delhivery Logistics APIs",
      "Barcode Engine",
      "TypeScript",
      "Tailwind CSS",
    ],
    contributions: [
      "Engineered full-stack integration connecting Kylas CRM order events with Delhivery shipping and dispatch services.",
      "Built high-throughput bulk shipment dispatch capabilities allowing operations teams to manifest hundreds of orders in seconds.",
      "Implemented automated barcode generation, label formatting, and thermal print-ready PDF export routines.",
      "Structured comprehensive error-handling and fallback queues to prevent shipment data loss during third-party carrier downtimes.",
    ],
    code: "",
    demo: "",
    isFeatured: true,
  },
  {
    id: 3,
    name: "SEO Reporting Dashboard",
    badge: "Featured Engineering",
    diagramId: "seo-dashboard",
    description:
      "Engineered a centralized performance auditing and SEO intelligence dashboard with Next.js, empowering QA and engineering teams to oversee dozens of client domains, schedule recurring automated site health checks, and aggregate real-time Core Web Vitals via the Google PageSpeed Insights API. Transformed an error-prone manual testing process into a fully automated continuous audit pipeline.",
    tools: [
      "Next.js",
      "Google PageSpeed Insights API",
      "Core Web Vitals",
      "Automated Cron Audits",
      "React",
      "Tailwind CSS",
    ],
    contributions: [
      "Developed multi-tenant project and URL management interface for monitoring diverse client web properties simultaneously.",
      "Automated scheduled performance audits using serverless cron triggers and concurrent API batching.",
      "Built real-time metrics aggregator tracking LCP, FID/INP, CLS, FCP, and Lighthouse performance scores over time.",
      "Constructed automated report generation and export workflows that drastically accelerated audit handoffs.",
    ],
    impact:
      "Reduced monthly manual performance reporting effort from approximately one full working day to under one hour.",
    code: "",
    demo: "",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Shoes Collection Store",
    badge: "Personal Project",
    isPersonal: true,
    description:
      "Modern e-commerce storefront crafted with Next.js and Tailwind CSS, featuring Strapi Headless CMS integration for dynamic catalog management and Stripe for secure checkout processing.",
    tools: [
      "Next.js",
      "React",
      "Strapi Headless CMS",
      "Stripe",
      "Tailwind CSS",
      "Redux Toolkit",
      "Git",
    ],
    contributions: [
      "Implemented headless CMS data fetching, dynamic product routing, and category filtering.",
      "Integrated Stripe checkout session lifecycle with client-side state synchronization.",
      "Optimized responsive layouts and image delivery for fluid browsing across devices.",
    ],
    code: "",
    demo: "https://shoe-store-frontend-tfec.vercel.app/",
    image: shoe_store,
  },
  {
    id: 5,
    name: "Movix Media Explorer",
    badge: "Personal Project",
    isPersonal: true,
    description:
      "Cinematic media exploration single-page application powered by the TMDb API, providing real-time movie/TV search, detailed cast profiles, official video trailers, and genre categorization.",
    tools: ["React", "Redux", "SCSS", "React Router", "TMDb API", "Axios", "Git"],
    contributions: [
      "Built modular component hierarchy with custom SCSS styling and infinite-scroll pagination.",
      "Integrated Redux store for state caching across genres, search queries, and media details.",
      "Implemented responsive video player modal and cross-browser media carousels.",
    ],
    code: "",
    demo: "https://movie-site-five-psi.vercel.app/",
    image: movix,
  },
  {
    id: 6,
    name: "Real-time MERN Chat",
    badge: "Personal Project",
    isPersonal: true,
    description:
      "Full-stack real-time communication application built with Socket.io, Node.js, Express, MongoDB, and React, featuring instant messaging, online presence indicators, and JWT authentication.",
    tools: [
      "React",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Chakra UI",
      "Git",
    ],
    contributions: [
      "Designed bi-directional event handlers using Socket.io for instantaneous message delivery.",
      "Implemented secure JWT user authentication and MongoDB document schemas for chat history.",
      "Constructed responsive UI with Chakra UI including typing indicators and user status badges.",
    ],
    code: "",
    demo: "https://mern-chat-app-4d9o.onrender.com/",
    image: MERNCHAT,
  },
];

// WordPress Client Projects
export const wordpressProjectsData = [
  {
    id: 1,
    name: "MYK LATICRETE",
    badge: "Client Website",
    description:
      "Engineered frontend components and customized WordPress theme templates for MYK LATICRETE, a premier manufacturer of stone/tile installation systems, grouts, waterproofing, and construction chemicals. Developed responsive product catalog navigators, interactive Technical Data Sheet (TDS) directories, and dealer locator modules designed to serve thousands of commercial architects, contractors, and builders across India.",
    tools: ["WordPress", "PHP", "SCSS", "JavaScript", "HTML5", "CSS3", "Git"],
    contributions: [
      "Custom WordPress theme development and frontend component engineering for extensive industrial product lines.",
      "Implemented technical data sheet document libraries, responsive spec sheets, and dealer finders.",
      "Enhanced Core Web Vitals, minimized render-blocking scripts, and optimized cross-device performance.",
      "Delivered ongoing feature additions, cross-browser fixes, and technical site maintenance.",
    ],
    code: "",
    demo: "https://myklaticrete.com/",
  },
  {
    id: 2,
    name: "Polaris Market Research",
    badge: "Client Website",
    description:
      "Developed high-performance frontend architecture and customized WordPress themes for Polaris Market Research, a global market intelligence firm publishing syndicated research studies and market forecasts. Engineered responsive high-converting report landing pages, dynamic table of contents navigators, multi-currency purchasing calculators, and seamless corporate sample request workflows.",
    tools: [
      "WordPress",
      "PHP",
      "SCSS",
      "JavaScript",
      "REST APIs",
      "jQuery",
      "Git",
    ],
    contributions: [
      "Engineered custom WordPress templates capable of rapidly rendering massive, content-dense syndicated report repositories.",
      "Implemented dynamic pricing selectors, sample request modalities, and enterprise inquiry funnels.",
      "Optimized website load times, script execution, and mobile viewport responsiveness for international executive traffic.",
      "Conducted ongoing maintenance, SEO schema adjustments, and cross-browser stabilization.",
    ],
    code: "",
    demo: "https://www.polarismarketresearch.com/",
  },
  {
    id: 3,
    name: "BMW TechWorks India",
    badge: "Enterprise Client",
    description:
      "Contributed to frontend development and bespoke WordPress theme styling for BMW TechWorks India, the strategic technology joint venture between BMW Group and Tata Technologies. Developed polished corporate layouts, fluid GSAP animations, automated build routines, and responsive components strictly adhering to global brand design standards.",
    tools: ["WordPress", "PHP", "SCSS", "JavaScript", "GSAP", "Gulp", "Git"],
    contributions: [
      "Frontend development and theme customization adhering strictly to BMW corporate design guidelines.",
      "Implemented responsive interactive GSAP animations and fluid scroll transitions.",
      "Configured automated Gulp and SCSS asset compilation for production-optimized performance.",
      "Delivered cross-device compatibility fixes, ongoing enhancements, and responsive layout tuning.",
    ],
    code: "",
    demo: "https://bmwtechworks-2025.wpstaging.amura.in/",
    image: bmwtecworks,
  },
  {
    id: 4,
    name: "SANY India",
    badge: "Enterprise Client",
    description:
      "Contributed as one of the primary frontend developers on the corporate digital portal for SANY India, the global leader in construction machinery, excavators, cranes, and heavy industrial equipment. Engineered interactive equipment showcases, dealer inquiry touchpoints, and responsive UI components for heavy mobile and desktop traffic.",
    tools: ["WordPress", "PHP", "SCSS", "jQuery", "JavaScript", "Gulp", "Git"],
    contributions: [
      "Custom WordPress theme development showcasing extensive machinery catalogs and technical specifications.",
      "Engineered responsive UI components and interactive inquiry funnels for commercial buyers.",
      "Optimized heavy visual assets, script bundling, and mobile performance.",
      "Executed ongoing feature rollouts, bug resolution, and cross-browser testing.",
    ],
    code: "",
    demo: "https://www.sany.in/",
    image: sany,
  },
  {
    id: 5,
    name: "HRONE Cloud",
    badge: "Enterprise Client",
    description:
      "Contributed to frontend engineering for HRONE, a leading B2B human resource management and automated payroll platform. Developed intricate scroll-triggered GSAP animations, parallax depth effects, an interactive horizontal product timeline, and modern adaptive header navigation.",
    tools: ["WordPress", "PHP", "SCSS", "JavaScript", "GSAP", "Gulp", "Git"],
    contributions: [
      "Frontend development for high-converting marketing landing pages with custom WordPress themes.",
      "Created complex GSAP timeline animations, parallax transitions, and interactive feature breakdowns.",
      "Conducted extensive cross-browser optimization across mobile, tablet, and desktop viewports.",
      "Supported ongoing UI enhancements, accessibility fixes, and performance tuning.",
    ],
    code: "",
    demo: "https://hrone.cloud/",
    image: hrone,
  },
  {
    id: 6,
    name: "LandGlobal",
    badge: "Client Website",
    description:
      "Contributed to frontend development and theme customization for LandGlobal, an international real estate platform connecting global investors with luxury residential and commercial property opportunities worldwide.",
    tools: ["WordPress", "PHP", "SCSS", "jQuery", "JavaScript", "Git"],
    contributions: [
      "Custom WordPress theme customization and property search filtering interfaces.",
      "Implemented responsive layouts and mobile-first navigation across global property catalogs.",
      "Optimized front-end loading speed and minimized layout shifts across varied connection speeds.",
      "Provided ongoing technical support, cross-device fixes, and feature enhancements.",
    ],
    code: "",
    demo: "https://land.global/",
    image: landglobal,
  },
];

// Shopify E-Commerce Client Projects
export const shopifyProjectsData = [
  {
    id: 1,
    name: "Tutopia Learning App",
    badge: "E-Commerce Client",
    description:
      "Contributed to frontend development and theme customization for Tutopia's online store, enabling students of Classes 7–12 to purchase live classes, printed notes, and spoken English courses with a seamless digital checkout experience.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "SCSS", "JavaScript", "Git"],
    contributions: [
      "Shopify theme development and custom Liquid template development for curriculum products.",
      "Streamlined checkout flow and mobile-optimized purchasing journey.",
      "Enhanced store performance, responsive layouts, and cross-browser stability.",
    ],
    code: "",
    demo: "https://shop.tutopialearningapp.com/",
    image: tutopia,
  },
  {
    id: 2,
    name: "Symphony Limited",
    badge: "Enterprise Client",
    description:
      "Contributed as frontend developer in a comprehensive digital store overhaul for consumer cooling leader Symphony Limited. Enhanced theme functionality, product customization features, and customer checkout flows on Shopify.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "SCSS", "JavaScript", "Git"],
    contributions: [
      "Custom Shopify theme overhaul incorporating modern responsive brand styling.",
      "Built custom product browsing modules and enhanced customer cart interaction.",
      "Optimized store performance, asset loading, and mobile conversion funnels.",
    ],
    code: "",
    demo: "https://shop.symphonylimited.com/",
    image: symphony,
  },
  {
    id: 3,
    name: "Ari-Health (Amarantha)",
    badge: "E-Commerce Client",
    description:
      "Contributed to building a custom-tailored Shopify theme for Amarantha's ayurvedic wellness and health brand, emphasizing brand storytelling, product benefit highlights, and streamlined mobile checkout.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "SCSS", "JavaScript", "Git"],
    contributions: [
      "Custom Liquid theme development aligned with brand identity and wellness offerings.",
      "Engineered mobile-responsive product galleries and smooth checkout flows.",
      "Implemented ongoing store maintenance and cross-device testing.",
    ],
    code: "",
    demo: "https://amarantha.in/",
    image: ari,
  },
  {
    id: 4,
    name: "Nisarg Herbs",
    badge: "E-Commerce Client",
    description:
      "Contributed to store customization and UI optimization for Nisarg Herbs on Shopify, providing an accessible, responsive online catalog for herbal health supplements and wellness solutions.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "JavaScript", "Git"],
    contributions: [
      "Shopify theme customization and streamlined catalog navigation.",
      "Responsive UI optimization for mobile shoppers and tablet users.",
      "Ongoing store enhancements, product updates, and technical maintenance.",
    ],
    code: "",
    demo: "https://www.nisargaherbs.com/",
    image: nisarg,
  },
];
