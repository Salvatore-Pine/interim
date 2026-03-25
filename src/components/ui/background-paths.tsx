"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const INTERIM_LOGO_URL = "/assets/interim-logo-clean.png";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    opacity: 0.08 + i * 0.012,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="h-full w-full text-primary-fixed-dim"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.25, opacity: 0.45 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.55, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Automating Your Social Content Strategy",
}: {
  title?: string;
}) {
  const words = title.split(" ");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative mb-6 flex h-40 w-40 items-center justify-center md:h-44 md:w-44"
        >
          <img
            src={INTERIM_LOGO_URL}
            alt="INTERIM logo"
            className="h-full w-full object-cover [clip-path:circle(45%_at_50%_50%)] drop-shadow-[0_0_26px_rgba(0,229,204,0.35)]"
          />
          <div className="pointer-events-none absolute h-[34%] w-[34%] rounded-full bg-background" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-6 font-headline text-4xl font-bold uppercase tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="mr-3 inline-block last:mr-0">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: wordIndex * 0.08 + letterIndex * 0.024,
                    type: "spring",
                    stiffness: 150,
                    damping: 22,
                  }}
                  className="inline-block bg-gradient-to-r from-white to-on-surface-variant bg-clip-text text-transparent"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mb-10 max-w-2xl text-base text-on-surface-variant md:text-xl"
        >
          KI-generierte Inhalte. Markenkonform. Jeden Tag automatisch
          veroffentlicht.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="inline-block rounded-2xl bg-gradient-to-b from-primary/25 to-primary-fixed-dim/10 p-px backdrop-blur-lg"
        >
          <Button
            variant="ghost"
            className="rounded-[1.1rem] border border-primary/20 bg-surface/95 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-container"
          >
            Gesprach vereinbaren
            <span className="ml-3 opacity-80 transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
