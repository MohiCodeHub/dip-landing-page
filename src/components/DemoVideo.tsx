'use client';

import { motion } from 'framer-motion';

interface DemoVideoProps {
  mode: 'context' | 'ask' | 'live';
  videoSrc?: string;
}

// Video sources for each mode - replace these with actual Loom MP4 URLs
const VIDEO_SOURCES: Record<string, string | null> = {
  context: '/videos/context-demo.mp4',
  ask: '/videos/ask-demo.mp4',
  live: '/videos/live-demo.mp4',
};

const MODE_LABELS: Record<string, string> = {
  context: 'Context Mode',
  ask: 'Ask Mode',
  live: 'Live Mode',
};

export default function DemoVideo({ mode, videoSrc }: DemoVideoProps) {
  const src = videoSrc || VIDEO_SOURCES[mode];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Ambient glow behind - teal themed */}
      <div
        className="absolute -inset-8 blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 180, 216, 0.2) 0%, transparent 60%)',
        }}
      />

      {/* Video container with app window styling */}
      <div className="relative bg-[#0c0c0c] rounded-2xl border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-[rgba(255,255,255,0.05)]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#444] font-medium font-display">dip — {MODE_LABELS[mode]}</span>
        </div>

        {/* Video area */}
        <div className="relative aspect-video bg-gradient-to-b from-[#0c0c0c] to-[#080808]">
          {src ? (
            <video
              key={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Placeholder when no video is available
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Placeholder icon */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#00b4d8]"
                  >
                    <path
                      d="M8 5.14v14l11-7-11-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </motion.div>

              <span className="mt-4 text-sm text-[#444]">Demo video coming soon</span>
              <span className="mt-1 text-xs text-[#333]">{MODE_LABELS[mode]}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
