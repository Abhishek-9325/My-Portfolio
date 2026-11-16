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

export const projectsData = [
  {
    id: 1,
    name: "Shopify Invoice Automation",
    badge: "Featured",
    description:
      "Developed two custom applications for client-specific invoice processing by integrating Shopify APIs with background job queues and batch-processing workflows.",
    tools: ["Next.js", "Shopify APIs", "Background Job Queues", "Batch Workflows", "REST APIs"],
    contributions: [
      "Integrated Shopify APIs for invoice-processing workflows.",
      "Implemented background processing and batch operations.",
      "Added retry-with-backoff mechanisms to improve reliability when processing failures occurred.",
    ],
    code: "",
    demo: "",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Kylas CRM – Delhivery Integration",
    badge: "Featured",
    description:
      "Developed a Next.js-based integration application connecting Kylas CRM with Delhivery to streamline shipment creation and fulfilment workflows.",
    tools: ["Next.js", "REST APIs", "Kylas CRM", "Delhivery APIs", "Barcode Generation"],
    contributions: [
      "Individual and bulk shipment creation workflows.",
      "Integration with third-party logistics and shipping APIs.",
      "Failure handling and barcode shipping-label generation and printing.",
    ],
    code: "",
    demo: "",
    isFeatured: true,
  },
  {
    id: 3,
    name: "SEO Reporting Dashboard",
    badge: "Featured",
    description:
      "Built a centralised SEO reporting dashboard that enabled QA teams to manage client projects, monitor multiple pages and schedule automated performance audits.",
    tools: ["Next.js", "Google PageSpeed Insights API", "Automation", "Performance Auditing"],
    contributions: [
      "Centralised client and page management.",
      "Automated performance audit scheduling.",
      "Centralised reporting and monitoring.",
    ],
    impact: "Reduced monthly reporting effort from approximately one working day to one hour.",
    code: "",
    demo: "",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Shoes Collection Store",
    description:
      "Modern e-commerce storefront crafted with Next.js and Tailwind CSS, featuring Strapi Headless CMS integration and Stripe for secure checkout.",
    tools: ["Next.js", "React", "Strapi Headless CMS", "Stripe", "Tailwind CSS", "Redux", "Git"],
    code: "",
    demo: "https://shoe-store-frontend-tfec.vercel.app/",
    image: shoe_store,
  },
  {
    id: 5,
    name: "Movix Media Explorer",
    description:
      "Cinematic discovery web application powered by the TMDb API with responsive search, category filtering, and video trailers.",
    tools: ["React", "Redux", "SCSS", "React Router", "TMDb API", "Git"],
    code: "",
    demo: "https://movie-site-five-psi.vercel.app/",
    image: movix,
  },
  {
    id: 6,
    name: "Real-time MERN Chat",
    description:
      "Real-time communication application built with Socket.io, Node.js, Express, MongoDB, and React with responsive UI.",
    tools: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Chakra UI", "Git"],
    code: "",
    demo: "https://mern-chat-app-4d9o.onrender.com/",
    image: MERNCHAT,
  },
];

export const wordpressProjectsData = [
  {
    id: 1,
    name: "BMW TechWorks India",
    description:
      "Contributed to frontend development and custom WordPress theme styling for BMW TechWorks India, a joint venture between BMW and Tata Technologies. Implemented interactive GSAP animations, responsive layouts, and automated build workflows.",
    tools: ["WordPress", "PHP", "SCSS", "JavaScript", "GSAP", "Gulp", "Git"],
    code: "",
    demo: "https://bmwtechworks-2025.wpstaging.amura.in/",
    image: bmwtecworks,
  },
  {
    id: 2,
    name: "SANY India",
    description:
      "Contributed as one of the primary frontend developers on the corporate website for SANY India, showcasing their extensive range of construction machinery and industrial equipment.",
    tools: ["WordPress", "PHP", "SCSS", "jQuery", "JavaScript", "Gulp", "Git"],
    code: "",
    demo: "https://www.sany.in/",
    image: sany,
  },
  {
    id: 3,
    name: "HRONE Cloud",
    description:
      "Contributed to frontend development for HRONE's human resources platform, building complex scroll-triggered GSAP animations, parallax effects, an interactive horizontal timeline, and dynamic headers.",
    tools: ["WordPress", "PHP", "SCSS", "JavaScript", "GSAP", "Gulp", "Git"],
    code: "",
    demo: "https://hrone.cloud/",
    image: hrone,
  },
  {
    id: 4,
    name: "LandGlobal",
    description:
      "Contributed to the frontend development of the LandGlobal international real estate platform, ensuring responsive design, intuitive property searches, and consistent corporate styling.",
    tools: ["WordPress", "PHP", "SCSS", "jQuery", "JavaScript", "Git"],
    code: "",
    demo: "https://land.global/",
    image: landglobal,
  },
];

export const shopifyProjectsData = [
  {
    id: 1,
    name: "Tutopia Learning App",
    description:
      "Educational e-commerce platform for students of Classes 7–12. Features course subscriptions, live class purchases, printed notes delivery, and streamlined checkout on Shopify.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "SCSS", "JavaScript", "Git"],
    code: "",
    demo: "https://shop.tutopialearningapp.com/",
    image: tutopia,
  },
  {
    id: 2,
    name: "Symphony Limited",
    description:
      "Contributed as frontend developer in a comprehensive store revamp for consumer cooling brand Symphony, enhancing theme functionality, shopping flow, and responsive user experience.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "SCSS", "JavaScript", "Git"],
    code: "",
    demo: "https://shop.symphonylimited.com/",
    image: symphony,
  },
  {
    id: 3,
    name: "Ari-Health (Amarantha)",
    description:
      "Contributed to building a custom-tailored Shopify theme for Amarantha Ayurvedic wellness products, emphasizing clean product storytelling and high-converting checkout flows.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "SCSS", "JavaScript", "Git"],
    code: "",
    demo: "https://amarantha.in/",
    image: ari,
  },
  {
    id: 4,
    name: "Nisarg Herbs",
    description:
      "Contributed to store customization and UI optimization for Nisarg Herbs on Shopify, providing an intuitive herbal catalog and streamlined user navigation.",
    tools: ["Shopify CLI", "ThemeKit", "Liquid", "JavaScript", "Git"],
    code: "",
    demo: "https://www.nisargaherbs.com/",
    image: nisarg,
  },
];
