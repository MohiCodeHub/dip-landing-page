'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import DemoVideo from './DemoVideo';

type Mode = 'context' | 'ask' | 'live';

const modes: { id: Mode; label: string }[] = [
  { id: 'context', label: 'Context' },
  { id: 'ask', label: 'Ask' },
  { id: 'live', label: 'Live' },
];

const pipelines: Record<Mode, { num: string; title: string; desc: string }[]> = {
  context: [
    { num: '01', title: 'Record', desc: 'Hit the shortcut. Capture your screen actions as you work.' },
    { num: '02', title: 'Process', desc: 'AI extracts visual context and understands what you did.' },
    { num: '03', title: 'Paste', desc: 'Context lands in your clipboard. Paste it into any LLM.' },
  ],
  ask: [
    { num: '01', title: 'Record', desc: 'Capture what you need help with on screen.' },
    { num: '02', title: 'Ask', desc: 'Your recording goes straight to Gemini for analysis.' },
    { num: '03', title: 'See', desc: 'Response appears as an overlay on your screen instantly.' },
  ],
  live: [
    { num: '01', title: 'Stream', desc: 'Start a real-time screen share session with AI.' },
    { num: '02', title: 'Interact', desc: 'Keep working while AI watches and understands.' },
    { num: '03', title: 'Guide', desc: 'Get live assistance and suggestions as you go.' },
  ],
};

const demoDescriptions: Record<Mode, string> = {
  context: 'Record once, paste the context anywhere.',
  ask: 'Get instant answers overlaid on your screen.',
  live: 'Real-time AI guidance as you work.',
};

export default function ModeTabs() {
  const [activeMode, setActiveMode] = useState<Mode>('context');

  return (
    <div className="w-full">
      {/* Tab Pills */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-full bg-[#111] border border-[rgba(255,255,255,0.08)]">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`
                relative px-6 py-2.5 rounded-full text-sm font-medium
                transition-colors duration-200
                ${activeMode === mode.id
                  ? 'text-black'
                  : 'text-[#888] hover:text-white'
                }
              `}
            >
              {activeMode === mode.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{mode.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Demo Visual */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DemoVideo mode={activeMode} />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-[#666] mt-6 text-sm"
              >
                {demoDescriptions[activeMode]}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right - Pipeline Steps */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {pipelines[activeMode].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-sm font-mono text-[#00b4d8] bg-[rgba(0,180,216,0.1)] px-3 py-1 rounded-full">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-[#888] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tagline - Centered underneath */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl md:text-3xl font-bold text-[#00b4d8] text-center mt-16"
      >
        Do. Dip. Done.
      </motion.p>
    </div>
  );
}
