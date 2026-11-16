import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Mourya | Senior Frontend Developer",
  description:
    "Portfolio of Abhishek Mourya, Senior Frontend Developer with 4+ years of experience specializing in React.js, Next.js, TypeScript, performance optimization, and scalable web architectures.",
  keywords: [
    "Abhishek Mourya",
    "Senior Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Engineer",
    "Portfolio",
    "Web Developer",
    "Pune",
  ],
  authors: [{ name: "Abhishek Mourya" }],
  creator: "Abhishek Mourya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abhishek Mourya | Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 4+ years of experience building and optimizing scalable web applications using React.js, Next.js, and TypeScript.",
    siteName: "Abhishek Mourya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Mourya | Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 4+ years of experience specializing in React.js, Next.js, TypeScript, and modern frontend architecture.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
