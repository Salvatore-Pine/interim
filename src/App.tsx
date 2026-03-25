import { DemoBackgroundPaths } from "@/components/ui/demo";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, Sparkles, Smartphone } from "lucide-react";
import { useRef } from "react";

const INTERIM_LOGO_URL =
  "/assets/logo_clean.png";
const fadeUp: Record<string, any> = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Record<string, any> = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function App() {
  const phonesRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: phonesRef,
    offset: ["start end", "end start"],
  });
  const phonesY = useTransform(scrollYProgress, [0, 0.5, 1], [170, 0, -140]);
  const phonesX = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, 70]);
  const phonesRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-14, -2, 9]);
  const phonesScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.82, 1, 1.12]);
  const phonesOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.25, 0.92, 1]);

  return (
    <div className="bg-background text-on-surface">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-3 z-50 flex w-[calc(100%-1.25rem)] max-w-[1440px] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl md:top-4 md:w-[calc(100%-2.5rem)] md:px-8 md:py-4"
      >
        <div className="flex items-center gap-3">
          <img
            alt="Interim logo"
            className="h-8 w-8 object-contain"
            src={INTERIM_LOGO_URL}
          />
          <div className="font-headline text-2xl font-bold uppercase tracking-tighter text-white">
            INTERIM
          </div>
        </div>
        <button className="rounded-full bg-primary-container px-4 py-2 font-label text-[10px] font-bold uppercase tracking-wider text-on-primary-container transition-all hover:scale-105 active:scale-95 md:px-6 md:text-xs">
          Gesprach vereinbaren
        </button>
      </motion.nav>

      <div className="relative z-10">
        <DemoBackgroundPaths />
      </div>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-[1440px] items-center gap-20 px-12 py-32 md:grid-cols-2">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="space-y-6"
          >
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
              Insight
            </span>
            <motion.h2
              variants={fadeUp}
              className="font-headline text-5xl font-bold uppercase leading-tight text-white md:text-6xl"
            >
              Ihr Content-Problem
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-lg text-lg leading-relaxed text-on-surface-variant"
            >
              Qualitativ hochwertiger Content erfordert Zeit, Kreativitat und
              Konsistenz. Die meisten Marken scheitern nicht an der Strategie,
              sondern an der taeglichen Ausfuehrung. Interim uebernimmt das
              Steuer.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4">
              <div className="mt-3 h-[1px] w-12 bg-primary" />
              <p className="font-medium italic text-white">
                "Der Flaschenhals der Skalierung ist die Produktion, nicht die
                Idee."
              </p>
            </motion.div>
          </motion.div>

          <div
            ref={phonesRef}
            className="relative flex items-center justify-center overflow-visible"
          >
            <motion.img
              alt="Vorher nachher smartphone comparison"
              className="w-full max-w-[700px] object-contain drop-shadow-[0_0_70px_rgba(0,229,204,0.12)]"
              src="/assets/phones-section-clean.png"
              style={{
                y: phonesY,
                x: phonesX,
                rotate: phonesRotate,
                scale: phonesScale,
                opacity: phonesOpacity,
                transformOrigin: "center center",
                willChange: "transform, opacity",
              }}
            />
          </div>
        </section>

        <section className="bg-surface-container-low/30 px-12 py-32">
          <div className="mx-auto max-w-[1440px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-20 text-center"
            >
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
                Der Prozess
              </span>
              <h2 className="mt-4 font-headline text-5xl font-bold uppercase text-white">
                So funktioniert&apos;s
              </h2>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative grid gap-8 md:grid-cols-3"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group space-y-6 rounded-xl border border-outline/15 bg-[rgba(53,53,52,0.08)] p-10 backdrop-blur-2xl transition-colors hover:border-primary/50"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-bright text-primary transition-transform group-hover:scale-110">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold uppercase text-white">
                  Trigger
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  Wir definieren Ihre Inhaltsquellen - von Produktdaten bis hin
                  zu saisonalen Trends.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group space-y-6 rounded-xl border border-outline/15 bg-[rgba(53,53,52,0.08)] p-10 backdrop-blur-2xl transition-colors hover:border-primary/50"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-bright text-primary transition-transform group-hover:scale-110">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold uppercase text-white">
                  Generieren
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  Unsere KI erstellt markenkonforme Visuals und Texte in
                  Millisekunden.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group space-y-6 rounded-xl border border-outline/15 bg-[rgba(53,53,52,0.08)] p-10 backdrop-blur-2xl transition-colors hover:border-primary/50"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-bright text-primary transition-transform group-hover:scale-110">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold uppercase text-white">
                  Veroeffentlichen
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  Vollautomatische Planung und Postings auf all Ihren Social
                  Media Kanaelen.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background px-12 py-32">
          <div className="mx-auto max-w-[1440px]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-20 grid gap-20 text-center md:grid-cols-3"
            >
              <motion.div variants={fadeUp}>
                <div className="mb-4 font-headline text-8xl font-bold tracking-tighter text-primary">
                  200+
                </div>
                <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                  Automatisierte Kanaele
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="mb-4 font-headline text-8xl font-bold tracking-tighter text-primary">
                  3s
                </div>
                <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                  Inhaltsgenerierung
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="mb-4 font-headline text-8xl font-bold tracking-tighter text-primary">
                  98%
                </div>
                <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                  Markenkonformitaet
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mx-auto max-w-4xl border-t border-outline-variant/20 pt-20 text-center"
            >
              <p className="font-body text-3xl italic leading-snug text-on-surface">
                "Interim hat unsere gesamte Social-Media-Praesenz
                revolutioniert. Was frueher Tage an Arbeit kostete, passiert
                jetzt in Sekunden - bei besserer Qualitaet."
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="h-10 w-10 rounded-full bg-surface-bright" />
                <div className="text-left">
                  <p className="font-headline font-bold uppercase text-white">
                    Marcus Weber
                  </p>
                  <p className="font-label text-xs uppercase tracking-widest text-primary">
                    CMO, Future Brands
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-background px-12 py-40 text-center"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-headline text-6xl font-bold uppercase tracking-tighter text-white md:text-7xl">
              Bereit fuer
              <br />
              automatisierten Content?
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-xl text-on-surface-variant">
              Optimieren Sie Ihre Strategie und skalieren Sie Ihre Praesenz ohne
              zusaetzlichen Zeitaufwand.
            </p>
            <form className="mx-auto flex max-w-lg flex-col gap-4 rounded-full border border-outline-variant/20 bg-surface-container p-2 md:flex-row">
              <input
                className="flex-grow bg-transparent px-8 py-3 font-label text-white placeholder:text-on-surface-variant focus:outline-none focus:ring-0"
                placeholder="Ihre E-Mail Adresse"
                type="email"
              />
              <button
                className="rounded-full bg-primary-container px-8 py-4 font-label text-xs font-bold uppercase tracking-widest text-on-primary-container transition-transform hover:scale-105"
                type="submit"
              >
                Jetzt starten
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        className="relative z-10 mt-20 w-full border-t border-white/10 bg-[#0A0A0A] px-12 py-12"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="font-headline font-bold uppercase tracking-tighter text-white">
              INTERIM
            </div>
          </div>
          <div className="font-body text-sm text-gray-500 opacity-80">
            © 2026 INTERIM
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
