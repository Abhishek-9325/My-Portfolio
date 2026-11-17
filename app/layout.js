import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://abhishekmourya.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abhishek Mourya | Senior Frontend Developer & Team Lead",
    template: "%s | Abhishek Mourya",
  },
  description:
    "Official developer portfolio of Abhishek Mourya, Senior Frontend Developer & Team Lead with 4+ years of experience architecting high-performance web applications, API integrations, and enterprise client platforms using React.js, Next.js, TypeScript, WordPress, and Shopify.",
  keywords: [
    "Abhishek Mourya",
    "Abhishek Mourya Portfolio",
    "Senior Frontend Developer",
    "Frontend Team Lead",
    "Senior React Developer",
    "Next.js Developer",
    "TypeScript Specialist",
    "Frontend Architecture",
    "Core Web Vitals Optimization",
    "Shopify API Integration",
    "Shopify Automation Developer",
    "WordPress Theme Developer",
    "Amura Marketing Technologies",
    "Kylas CRM Integration",
    "Delhivery Shipping API",
    "Web Application Architecture",
    "Full Stack JavaScript Engineer",
    "Pune Frontend Developer",
    "React Developer India",
  ],
  authors: [{ name: "Abhishek Mourya", url: siteUrl }],
  creator: "Abhishek Mourya",
  publisher: "Abhishek Mourya",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: "Abhishek Mourya | Senior Frontend Developer & Team Lead",
    description:
      "Senior Frontend Developer & Team Lead with 4+ years of experience architecting high-performance web applications, queue-based automation, and client platforms using React.js, Next.js, and TypeScript.",
    siteName: "Abhishek Mourya Portfolio",
    firstName: "Abhishek",
    lastName: "Mourya",
    username: "Abhishek-9325",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Mourya | Senior Frontend Developer & Team Lead",
    description:
      "Senior Frontend Developer & Team Lead specializing in React.js, Next.js, TypeScript, Shopify, and enterprise frontend architecture.",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Abhishek Mourya",
      jobTitle: "Senior Frontend Developer & Team Lead",
      description:
        "Senior Frontend Developer with 4+ years of experience building and optimizing scalable web applications, API integrations, and enterprise client platforms.",
      url: siteUrl,
      sameAs: [
        "https://github.com/Abhishek-9325",
        "https://www.linkedin.com/in/abhishek-mourya-b48a27289",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Amura Marketing Technologies",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressCountry: "India",
        },
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Trinity College of Engineering and Research, Pune",
      },
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Shopify APIs",
        "WordPress Theme Development",
        "REST API Integration",
        "Frontend Architecture",
        "Core Web Vitals",
        "Web Performance Optimization",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abhishek Mourya - Developer Portfolio",
      description:
        "Official portfolio showcasing featured engineering projects, enterprise WordPress websites, and Shopify applications by Abhishek Mourya.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Abhishek Mourya - Senior Frontend Developer & Team Lead",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
