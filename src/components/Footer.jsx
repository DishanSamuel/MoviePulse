import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-between">
        <p className="text-center m-4">
          © {new Date().getFullYear()} MoviePulsing. All rights reserved.
        </p>
        <div className="flex gap-6 m-4 ">
          <a href="https://github.com/DishanSamuel/MoviePulseing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="https://www.linkedin.com/in/dishan-samuel-4a995b1a3/" className="hover:text-white transition">
            Contact
          </a>
        </div>
        <p className="text-xs text-center mt-4">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
