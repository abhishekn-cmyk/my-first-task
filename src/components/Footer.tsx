// Footer.tsx
import logo from './download.jpg';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Top section: Logo left, Socials right */}
      <div className="container mx-auto px-4 py-6 flex flex-row items-center justify-between">
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-32 md:h-44" />
        </div>

        {/* Social Text Links Right */}
        <div className="flex space-x-6 text-gray-700 font-cursive text-base md:text-lg">
          <a
            href="#"
            className="hover:text-purple-600 transition-all duration-300"
            style={{ fontFamily: "cursive", textDecoration: "none" }}
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-purple-600 transition-all duration-300"
            style={{ fontFamily: "cursive", textDecoration: "none" }}
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-purple-600 transition-all duration-300"
            style={{ fontFamily: "cursive", textDecoration: "none" }}
          >
            TikTok
          </a>
        </div>
      </div>

      {/* Horizontal Line in Blue */}
      <hr className="border-blue-500 my-4 mx-4 md:mx-8" />

      {/* Copyright Right Aligned */}
      <div className="container mx-auto px-4 text-right text-gray-600 text-sm py-2 font-cursive" style={{ fontFamily: "cursive" }}>
        © 2025 NAUGHTY JARS. All Rights Reserved
      </div>
    </footer>
  );
}

