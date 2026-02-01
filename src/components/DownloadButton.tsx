'use client';

import { motion } from 'framer-motion';

export default function DownloadButton() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <motion.a
        href="#"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          px-8 py-4 rounded-full
          bg-white text-black font-semibold text-lg
          transition-opacity duration-200
          hover:opacity-90
          flex items-center justify-center gap-3
        "
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
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
  );
}
