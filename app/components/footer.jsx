// @flow strict
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-8">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm text-gray-300">
            Portfolio designed &amp; developed by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abhishek-mourya-b48a27289"
              aria-label="Abhishek Mourya LinkedIn Profile"
              className="text-[#16f2b3] font-medium hover:underline"
            >
              Abhishek Mourya
            </Link>
          </p>
          <p className="text-xs text-gray-400">
            Senior Frontend Developer • React.js | Next.js | TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
