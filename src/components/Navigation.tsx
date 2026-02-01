'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled 
          ? 'bg-[rgba(3,3,3,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-display text-2xl font-bold tracking-tight"
        >
          dip
        </motion.a>

        {/* Nav Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-[#888] hover:text-white transition-colors">
            How it works
          </a>
          <a href="#features" className="text-sm text-[#888] hover:text-white transition-colors">
            Features
          </a>
        </div>

        {/* CTA Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-5 py-2.5 rounded-full text-sm font-medium
            bg-white text-black
            hover:bg-[#f0f0f0] transition-colors
            flex items-center gap-2
          "
        >
          <svg
            width="14"
            height="17"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.47 12.76C16.44 9.86 18.82 8.46 18.94 8.39C17.57 6.42 15.43 6.15 14.68 6.12C12.9 5.94 11.18 7.19 10.28 7.19C9.36 7.19 7.96 6.14 6.46 6.17C4.5 6.2 2.68 7.33 1.68 9.11C-0.4 12.74 1.21 18.14 3.2 21.07C4.2 22.5 5.37 24.11 6.92 24.05C8.43 23.98 8.99 23.08 10.77 23.08C12.55 23.08 13.06 24.05 14.63 24.01C16.26 23.98 17.27 22.57 18.23 21.12C19.37 19.45 19.84 17.82 19.86 17.73C19.82 17.71 16.5 16.45 16.47 12.76Z"
              fill="currentColor"
            />
            <path
              d="M13.4 4.14C14.21 3.13 14.76 1.76 14.61 0.37C13.44 0.42 11.99 1.16 11.14 2.14C10.39 3.01 9.73 4.44 9.9 5.78C11.21 5.88 12.56 5.12 13.4 4.14Z"
              fill="currentColor"
            />
          </svg>
          Download for macOS
        </motion.a>
      </div>
    </motion.nav>
  );
}
