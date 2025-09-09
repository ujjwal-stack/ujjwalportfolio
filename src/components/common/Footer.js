import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-6 mt-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ujjwal Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
