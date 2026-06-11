import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";

import heroImg from "@/assets/images/hero-section-1536x1024.jpg.jpeg";
import heroVideo from "@/assets/hero-loop.webm";
import logoDark from "@/assets/dark_logo.png";
import logoLight from "@/assets/images/white-logo-768x573.png";
import problemImg from "@/assets/images/DSC05737-scaled.jpg.jpeg";
import progDiabetes from "@/assets/images/sanctuary-villa.webp";
import progObesity from "@/assets/images/sanctuary-yoga-1229x1536.jpg.jpeg";
import progThyroid from "@/assets/program-thyroid.jpg";
import doctorImg from "@/assets/doctor.jpg";
import gallery1 from "@/assets/images/DSC05710-scaled.jpg.jpeg";
import gallery2 from "@/assets/images/DSC05744-scaled.jpg.jpeg";
import gallery3 from "@/assets/images/DSC05756-scaled.jpg.jpeg";
import finalCta from "@/assets/images/DSC05925-scaled.jpg.jpeg";
import galleryPath from "@/assets/images/DSC05563-scaled.jpg.jpeg";
import galleryVeranda from "@/assets/images/DSC05639-scaled.jpg.jpeg";
import galleryLobbyNight from "@/assets/images/DSC05870-scaled.jpg.jpeg";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "media-id"?: string; aspect?: string; class?: string; className?: string },
        HTMLElement
      >;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "wistia-player": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & { "media-id"?: string; aspect?: string; class?: string; className?: string },
          HTMLElement
        >;
      }
    }
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alpha Wellness Resort — Reverse Chronic Disease Naturally" },
      {
        name: "description",
        content:
          "Functional Medicine + Ayurveda + Advanced Diagnostics. A luxury sanctuary helping you heal the root cause — not just symptoms. Book a free consultation.",
      },
      { property: "og:title", content: "Alpha Wellness Resort" },
      {
        property: "og:description",
        content: "Reverse chronic disease naturally at India's most refined wellness sanctuary.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: AlphaLanding,
});

/* ----------------------------- helpers ----------------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}: {
  as?: any;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------- mandala watermark ----------------------------- */

function MandalaBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
      <svg
        className="w-[120%] h-[120%] sm:w-[90%] sm:h-[90%] max-w-[460px] max-h-[460px] opacity-[0.18] text-gold"
        style={{ animation: "spin 180s linear infinite" }}
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        aria-hidden="true"
      >
        {/* Concentric Circles */}
        <circle cx="100" cy="100" r="52" />
        <circle cx="100" cy="100" r="30" />
        <circle cx="100" cy="100" r="15" />
        <circle cx="100" cy="100" r="6" />

        {/* Interlocking Yantra Triangles */}
        <polygon points="100,45 148,128 52,128" />
        <polygon points="100,155 52,72 148,72" />

        {/* Inner secondary star lines */}
        <polygon points="100,60 135,120 65,120" style={{ opacity: 0.7 }} />
        <polygon points="100,140 65,80 135,80" style={{ opacity: 0.7 }} />

        {/* Outer Petals (Layer 1 - 12 petals) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={`p1-${i}`}
            d="M 100 52 C 82 36, 92 10, 100 10 C 108 10, 118 36, 100 52"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}

        {/* Outer Petals (Layer 2 - 12 petals, rotated by 15 deg) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={`p2-${i}`}
            d="M 100 52 C 85 40, 92 20, 100 20 C 108 20, 115 40, 100 52"
            transform={`rotate(${i * 30 + 15} 100 100)`}
            style={{ opacity: 0.8 }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

function AlphaLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openForm = () => setIsFormOpen(true);

  return (
    <main className="bg-sand text-ink">
      <NavBar scrolled={scrolled} onOpenConsult={openForm} />
      <Hero onOpenConsult={openForm} />
      <Marquee />
      <Problem />
      <Method />
      <Programs onOpenConsult={openForm} />
      <Results />
      <DoctorInsights />
      <Experience />
      <Experts />
      <FinalCta onOpenConsult={openForm} />
      <Footer />
      <StickyCta onOpenConsult={openForm} />
      <WhatsAppFloat />
      <ConsultModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </main>
  );
}

/* ----------------------------- nav ----------------------------- */

function NavBar({ scrolled, onOpenConsult }: { scrolled: boolean; onOpenConsult: () => void }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[color:var(--sand)]/85 backdrop-blur-xl border-b border-[color:var(--border)]"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img
            src={logoDark}
            alt="Alpha Wellness Resort Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
          />
        </a>
        <button
          onClick={onOpenConsult}
          className={`inline-flex items-center gap-2 px-5 h-11 rounded-full text-[13px] tracking-wider uppercase transition-all cursor-pointer ${scrolled
              ? "bg-forest text-sand hover:bg-[color:var(--forest-deep)]"
              : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-forest"
            }`}
        >
          Book Now
        </button>
      </div>
    </header>
  );
}

/* ----------------------------- hero ----------------------------- */

function Hero({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section id="top" className="relative min-h-[75vh] sm:min-h-screen w-full overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/webm" />
          <img
            src={heroImg}
            alt="Wellness consultation in a tropical pavilion at golden hour"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-32 flex items-end min-h-[75vh] sm:min-h-screen">
        <div className="max-w-3xl text-white pb-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="gold-rule" />
              <span className="eyebrow text-gold">A Sanctuary For Root-Cause Healing</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[104px] leading-[1.02] text-white">
              Reverse Chronic
              <br />
              Disease <em className="italic font-normal text-gold">Naturally.</em>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-4 sm:mt-8 max-w-xl text-sm sm:text-[17px] leading-relaxed text-white/80 font-light">
              Functional Medicine, Ayurveda and Advanced Diagnostics — converging
              in one private sanctuary to help you heal the root cause, not just
              the symptoms.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={onOpenConsult}
                className="group inline-flex items-center justify-center whitespace-nowrap gap-2.5 px-5 sm:px-7 h-14 rounded-full bg-gold text-navy text-[11px] sm:text-[13px] tracking-[0.15em] sm:tracking-[0.18em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <a
                href="https://wa.me/910000000000"
                className="inline-flex items-center gap-3 px-7 h-14 rounded-full border border-white/40 text-white text-[13px] tracking-[0.18em] uppercase hover:bg-white hover:text-forest transition-all"
              >
                Talk To A Specialist
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 border-t border-white/15 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center sm:place-items-start">
          {[
            ["99%", "Satisfaction"],
            ["20+", "Years Experience"],
            ["28+", "Specialists"],
            ["5,000+", "Patients Healed"],
          ].map(([n, l]) => (
            <div key={l} className="text-white text-center sm:text-left">
              <div className="font-display text-3xl lg:text-4xl text-gold">{n}</div>
              <div className="eyebrow text-white/60 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultForm({ onClose }: { onClose?: () => void }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      id="consult"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="relative glass rounded-2xl p-7 lg:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
    >
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1 cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      <div className="flex items-center gap-3 mb-1">
        <span className="w-2 h-2 rounded-full bg-gold shimmer" />
        <span className="eyebrow text-white/80">Private Consultation</span>
      </div>
      <h3 className="font-display text-2xl lg:text-3xl text-white mt-2">
        Begin your healing journey.
      </h3>
      <p className="text-white/65 text-sm mt-2 font-light">
        A specialist will reach out within 24 hours.
      </p>

      {sent ? (
        <div className="mt-8 p-6 rounded-xl bg-white/10 border border-gold/40 text-white">
          <div className="text-gold eyebrow">Received</div>
          <div className="font-display text-xl mt-2">
            Thank you — our specialist will call you soon.
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          <Field label="Full Name" name="name" type="text" />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Email" name="email" type="email" />
          <Field label="Primary Health Concern" name="concern" type="text" />
          <button
            type="submit"
            className="mt-4 w-full h-13 py-4 rounded-full bg-gold text-navy text-[13px] tracking-[0.2em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer"
          >
            Request Consultation
          </button>
          <p className="text-[11px] text-white/50 text-center pt-1">
            Strictly confidential · No spam · 100% secure
          </p>
        </div>
      )}
    </form>
  );
}

function ConsultModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg z-10 animate-in fade-in zoom-in-95 duration-200">
        <ConsultForm onClose={onClose} />
      </div>
    </div>
  );
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <label className="block">
      <span className="eyebrow text-white/55 text-[10px]">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="mt-1.5 w-full bg-transparent border-b border-white/25 focus:border-gold py-3 text-white placeholder-white/30 outline-none transition-colors"
      />
    </label>
  );
}

/* ----------------------------- marquee ----------------------------- */

function Marquee() {
  const items = [
    "Functional Medicine",
    "Ayurveda",
    "Naturopathy",
    "Advanced Diagnostics",
    "Clinical Nutrition",
    "Yoga Therapy",
    "Hydrotherapy",
    "Mind-Body Healing",
  ];
  const loop = [...items, ...items];
  return (
    <div className="bg-navy text-white py-6 overflow-hidden border-y border-white/5">
      <div className="flex marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-8 eyebrow text-white/60">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- problem ----------------------------- */

function Problem() {
  const issues = [
    { n: "01", t: "Diabetes", d: "Daily injections, rising HbA1c, no real recovery." },
    { n: "02", t: "Thyroid", d: "Lifelong medication that never restores balance." },
    { n: "03", t: "Obesity", d: "Stubborn weight, fluctuating energy, low confidence." },
    { n: "04", t: "Fatigue", d: "Constant exhaustion no test can explain." },
    { n: "05", t: "Gut Issues", d: "Bloating, IBS, food sensitivities silenced — never solved." },
    { n: "06", t: "Stress & Burnout", d: "A nervous system stuck in permanent overdrive." },
  ];
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow text-forest">The Modern Crisis</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]">
              Tired of managing
              <br />
              symptoms instead of
              <br />
              <em className="italic">solving them?</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 sm:mt-8 text-base sm:text-lg leading-relaxed text-ink/70 font-light max-w-md">
              Conventional medicine excels at acute care but rarely heals chronic
              disease. At Alpha, we don't suppress your body — we listen to it,
              decode it, and restore it.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="grid sm:grid-cols-2 gap-px bg-[color:var(--border)] rounded-2xl overflow-hidden border border-[color:var(--border)]">
            {issues.map((it, i) => (
              <Reveal key={it.t} delay={i * 80} className="bg-sand p-6 sm:p-8 group">
                <div className="flex items-start justify-between mb-6">
                  <span className="eyebrow text-forest/50">{it.n}</span>
                  <span className="w-8 h-px bg-gold mt-2 group-hover:w-16 transition-all duration-500" />
                </div>
                <h3 className="font-display text-3xl text-forest mb-3">{it.t}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{it.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- method ----------------------------- */

function Method() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetProgress = useRef(0);

  const steps = [
    { n: "I", t: "Advanced Diagnostics", d: "World-class lab panels, gut microbiome, hormone & metabolic mapping." },
    { n: "II", t: "Root-Cause Discovery", d: "Your data interpreted by functional medicine experts to find the source." },
    { n: "III", t: "Personalized Protocol", d: "A bespoke plan blending modern medicine, ayurveda and lifestyle." },
    { n: "IV", t: "Immersive Healing", d: "Stay in our sanctuary as your body recalibrates under expert care." },
    { n: "V", t: "Lifetime Recovery", d: "Long-term coaching ensures the results stay with you for years." },
  ];

  // Track scroll position and update target
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 1024;

      let progress = 0;

      if (isDesktop) {
        // Pinning progress: top of container is sticky
        const totalScrollableDistance = rect.height - viewportHeight;
        if (totalScrollableDistance <= 0) {
          progress = 0;
        } else {
          // rect.top goes from 0 (when container hits the top) to -totalScrollableDistance (when it ends)
          const rawProgress = -rect.top / totalScrollableDistance;
          const clampedRaw = Math.max(0, Math.min(1, rawProgress));

          // Map range [0.15, 0.85] to [0, 1] for visual breathing room
          if (clampedRaw < 0.15) {
            progress = 0;
          } else if (clampedRaw > 0.85) {
            progress = 1;
          } else {
            progress = (clampedRaw - 0.15) / 0.70;
          }
        }
      } else {
        // Mobile progress: standard natural scroll progress
        const start = viewportHeight * 0.8;
        const end = viewportHeight * 0.2 - rect.height;
        progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      }

      targetProgress.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Smooth easing loop (LERP)
  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = () => {
      setScrollProgress((prev) => {
        const diff = targetProgress.current - prev;
        if (Math.abs(diff) < 0.0001) {
          return targetProgress.current;
        }
        // Smooth linear interpolation (lerp) with 0.09 easing factor for natural inertia
        return prev + diff * 0.09;
      });
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const getStepProgress = (i: number, progress: number) => {
    if (i === 0) return 1;
    const prevThreshold = (i - 1) / 4;
    const threshold = i / 4;
    if (progress >= threshold) return 1;
    if (progress <= prevThreshold) return 0;
    return (progress - prevThreshold) * 4;
  };

  const activeIndex = Math.max(0, Math.min(4, Math.round(scrollProgress * 4)));

  return (
    <section ref={containerRef} id="method" className="relative lg:h-[230vh] w-full bg-navy text-white overflow-visible">
      {/* Sticky Content Wrapper */}
      <div className="w-full relative lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden py-16 lg:py-0 grain">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="gold-rule" />
                  <span className="eyebrow text-gold">The Alpha Method</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl leading-[0.98]">
                  A protocol
                  <br />
                  designed for
                  <br />
                  <em className="italic text-gold">lasting recovery.</em>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <Reveal delay={200}>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                  Five precisely choreographed stages — each one led by specialists
                  who treat your biology as a single, intelligent system rather
                  than a collection of symptoms.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-16">
            {/* Progress bar line connecting steps (Desktop only) */}
            <div className="hidden lg:block absolute left-[10%] right-[10%] top-[40px] h-[2px] bg-white/10 z-0">
              <div
                className="relative h-full bg-gradient-to-r from-gold via-gold/80 to-gold shadow-[0_0_12px_rgba(226,192,125,0.8)]"
                style={{ width: `${scrollProgress * 100}%` }}
              >
                {/* Glowing animated tip indicator */}
                {scrollProgress > 0.01 && (
                  <>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(226,192,125,1)] animate-ping" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(226,192,125,1)]" />
                  </>
                )}
              </div>
            </div>

            {/* Vertical progress bar line (Mobile/Tablet only) */}
            <div className="lg:hidden absolute left-[40px] top-[40px] bottom-[40px] w-[2px] bg-white/10 z-0">
              <div
                className="relative w-full bg-gradient-to-b from-gold via-gold/80 to-gold shadow-[0_0_12px_rgba(226,192,125,0.8)]"
                style={{ height: `${scrollProgress * 100}%` }}
              >
                {/* Glowing animated tip indicator */}
                {scrollProgress > 0.01 && (
                  <>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(226,192,125,1)] animate-ping" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(226,192,125,1)]" />
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {steps.map((s, i) => {
                const t = getStepProgress(i, scrollProgress);
                const isCompleted = t >= 1.0;
                const isCurrent = i === activeIndex;
                const opacityClass = isCurrent ? "opacity-100" : isCompleted ? "opacity-85" : "opacity-35";

                return (
                  <div
                    key={s.n}
                    className={`relative flex flex-row lg:flex-col items-start lg:items-center lg:text-center gap-6 lg:gap-0 cursor-pointer transition-all duration-500 group ${opacityClass}`}
                  >
                    {/* Circle Container */}
                    <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
                      {/* SVG Progress Border */}
                      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="36" className="stroke-white/10 fill-none" strokeWidth="2" />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          className="stroke-gold fill-none"
                          strokeWidth="3"
                          strokeDasharray="226.2"
                          strokeDashoffset={226.2 * (1 - t)}
                          strokeLinecap="round"
                          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                        />
                      </svg>

                      {/* Inner Circle */}
                      <div
                        className={`relative w-[64px] h-[64px] rounded-full flex items-center justify-center transition-all duration-300 z-10 ${isCurrent
                            ? isCompleted
                              ? "bg-gold text-navy border-gold shadow-[0_0_25px_rgba(226,192,125,0.8)] scale-110 z-20"
                              : "bg-navy text-gold border border-gold/60 shadow-[0_0_15px_rgba(226,192,125,0.3)] scale-110 z-20"
                            : isCompleted
                              ? "bg-gold text-navy border border-gold shadow-[0_0_15px_rgba(226,192,125,0.4)] scale-100 z-10"
                              : "bg-navy text-white/40 border border-white/10 scale-95 z-10"
                          }`}
                      >
                        <span className="font-display text-xl font-light">{s.n}</span>
                      </div>
                    </div>

                    {/* Text Container */}
                    <div className="pt-2 lg:pt-0 lg:mt-8">
                      <h3 className={`font-display text-2xl mb-3 transition-colors duration-300 ${isCurrent ? "text-gold" : "text-white"
                        }`}>
                        {s.t}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${isCurrent ? "text-white" : "text-white/60"
                        }`}>
                        {s.d}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- programs ----------------------------- */

function Programs({ onOpenConsult }: { onOpenConsult: () => void }) {
  const items = [
    {
      tag: "Program 01",
      title: "Diabetes Reversal",
      body:
        "A 14–28 day immersive protocol that addresses insulin resistance at the source — most guests see HbA1c drop by 1.5–3 points and reduce medication.",
      bullets: ["Continuous glucose tracking", "Personalised meal protocols", "Reduce or eliminate medication"],
      img: progDiabetes,
    },
    {
      tag: "Program 02",
      title: "Obesity Reset",
      body:
        "Metabolic recalibration through clinical nutrition, hormone rebalancing and movement therapy — sustainable, never extreme.",
      bullets: ["8–18 kg fat loss typical", "Hormone & thyroid optimization", "Lifelong lifestyle blueprint"],
      img: progObesity,
    },
    {
      tag: "Program 03",
      title: "Thyroid Harmony",
      body:
        "Restore thyroid function naturally through stress modulation, gut healing, and targeted micronutrient therapy.",
      bullets: ["Hashimoto's & hypothyroid protocols", "Autoimmune modulation", "TSH, T3, T4 normalization"],
      img: progThyroid,
    },
    {
      tag: "Program 04",
      title: "Gut Healing",
      body:
        "Rebuild the microbiome that governs your immunity, energy and mood. A foundational program every guest benefits from.",
      bullets: ["Microbiome diagnostics", "IBS, SIBO, bloating resolution", "Gut-brain axis restoration"],
      img: gallery1,
    },
    {
      tag: "Program 05",
      title: "Stress & Sleep Recovery",
      body:
        "Calm a hyperactive nervous system through panchakarma, breathwork, and circadian recalibration. Sleep returns within days.",
      bullets: ["HRV & cortisol mapping", "Deep sleep restoration", "Burnout reversal"],
      img: gallery3,
    },
    {
      tag: "Program 06",
      title: "Detox & Longevity",
      body:
        "Cellular renewal through panchakarma, fasting protocols and advanced biomarker tracking. For those who want to live long, and live well.",
      bullets: ["Biological age testing", "Heavy metal & toxin elimination", "Mitochondrial rejuvenation"],
      img: gallery2,
    },
  ];
  return (
    <section id="programs" className="bg-sand">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-16 lg:pt-24 pb-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow text-forest">Transformation Programs</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]">
              Six healing journeys.
              <br />
              <em className="italic">One private sanctuary.</em>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="space-y-0">
        {items.map((p, i) => (
          <ProgramRow key={p.title} {...p} reverse={i % 2 === 1} index={i} onOpenConsult={onOpenConsult} />
        ))}
      </div>
    </section>
  );
}

function ProgramRow({
  tag,
  title,
  body,
  bullets,
  img,
  reverse,
  index,
  onOpenConsult,
}: {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  img: string;
  reverse?: boolean;
  index: number;
  onOpenConsult: () => void;
}) {
  return (
    <div className="border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-10 lg:py-16 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        <Reveal
          className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
        >
          <div className="overflow-hidden rounded-2xl group">
            <img
              src={img}
              alt={title}
              className="w-full h-[240px] sm:h-[420px] lg:h-[560px] object-cover group-hover:scale-105 transition-transform duration-[1.6s]"
              loading="lazy"
              width={1600}
              height={1200}
            />
          </div>
        </Reveal>
        <div className={`relative lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-10" : "lg:pl-10"}`}>
          <MandalaBg />
          <Reveal className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="eyebrow text-forest/60">{tag}</span>
              <span className="w-12 h-px bg-gold" />
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-6xl text-forest leading-[0.98]">
              {title}
            </h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-[17px] leading-relaxed text-ink/70 font-light">
              {body}
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink/80">
                  <span className="text-gold mt-1">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onOpenConsult}
              className="mt-6 sm:mt-10 inline-flex items-center gap-3 text-forest border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors eyebrow cursor-pointer bg-transparent border-0 text-left"
            >
              Enquire about this program
              <span>→</span>
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- results ----------------------------- */

function Results() {
  const metrics = [
    { v: "−2.8", u: "pts", l: "Average HbA1c reduction" },
    { v: "12.4", u: "kg", l: "Average fat loss in 21 days" },
    { v: "73%", u: "", l: "Reduced or stopped medication" },
    { v: "9.4", u: "/10", l: "Energy & vitality score" },
  ];
  const stories = [
    {
      name: "Rohan M.",
      city: "Mumbai · Age 52",
      tag: "Diabetes Reversal",
      quote:
        "I arrived on 90 units of insulin and four medications. Twenty-eight days later, I left on lifestyle alone. My HbA1c went from 9.8 to 6.1.",
    },
    {
      name: "Priya S.",
      city: "Bangalore · Age 38",
      tag: "Thyroid Harmony",
      quote:
        "After a decade of medication, my thyroid normalised. Alpha didn't just treat my numbers — they gave me my energy and my mornings back.",
    },
    {
      name: "Anand R.",
      city: "Dubai · Age 47",
      tag: "Stress Recovery",
      quote:
        "I came in exhausted and dependent on sleep medication. Within ten days, I was sleeping nine hours without a pill. The sanctuary did what years of clinics couldn't.",
    },
  ];
  return (
    <section id="results" className="bg-[color:var(--forest-deep)] text-white py-16 lg:py-24 grain">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow text-gold">Real Results</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl leading-[0.98] max-w-4xl">
            Measured in lab reports.
            <br />
            <em className="italic text-gold">Felt for a lifetime.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {metrics.map((m, i) => (
            <Reveal
              key={m.l}
              delay={i * 100}
              className="bg-[color:var(--forest-deep)] p-5 sm:p-8 lg:p-10"
            >
              <div className="font-display text-3xl sm:text-5xl lg:text-7xl text-gold flex items-baseline gap-1">
                {m.v}
                <span className="text-2xl text-white/60">{m.u}</span>
              </div>
              <div className="mt-3 text-sm text-white/70 leading-snug">{m.l}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 grid lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 120}>
              <article className="h-full rounded-2xl border border-white/15 p-6 sm:p-8 lg:p-10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                <span className="eyebrow text-gold">{s.tag}</span>
                <p className="mt-4 sm:mt-6 font-display text-lg sm:text-2xl leading-snug text-white/95">
                  “{s.quote}”
                </p>
                <div className="mt-8 pt-6 border-t border-white/15">
                  <div className="text-white">{s.name}</div>
                  <div className="text-xs text-white/55 mt-1">{s.city}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- doctor insights ----------------------------- */

function WistiaVideo({ mediaId }: { mediaId: string }) {
  useEffect(() => {
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/player.js";
      script.async = true;
      document.body.appendChild(script);
    }
    if (!document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`)) {
      const script = document.createElement("script");
      script.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      script.async = true;
      script.type = "module";
      document.body.appendChild(script);
    }
  }, [mediaId]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-black/5 ring-1 ring-black/5">
      <style dangerouslySetInnerHTML={{ __html: `
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 177.78%;
        }
      `}} />
      <wistia-player media-id={mediaId} aspect="0.5625"></wistia-player>
    </div>
  );
}

function DoctorInsights() {
  const mediaIds = ["p9r5oj1rrp", "l103j0xqiv", "egsqur40gr", "lekt68oa2p"];
  return (
    <section className="bg-sand text-ink py-16 lg:py-24 border-t border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="gold-rule w-8 md:w-12" />
            <span className="eyebrow text-forest whitespace-nowrap">Expert Guidance</span>
            <span className="gold-rule w-8 md:w-12" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-forest leading-[0.98] text-center max-w-2xl mx-auto">
            Insights from
            <br />
            <em className="italic">our doctors.</em>
          </h2>
        </Reveal>

        <div className="mt-14 block sm:hidden">
          <Carousel opts={{ align: "start", dragFree: true }} className="w-full overflow-visible">
            <CarouselContent className="-ml-4 max-w-[85vw]">
              {mediaIds.map((id, index) => (
                <CarouselItem key={`${id}-${index}`} className="pl-4 basis-full">
                  <WistiaVideo mediaId={id} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-14 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {mediaIds.map((id, index) => (
            <Reveal key={`${id}-${index}`} delay={index * 150}>
              <WistiaVideo mediaId={id} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- experience ----------------------------- */

function Experience() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="eyebrow text-forest">The Sanctuary</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl text-forest leading-[0.98]">
              Where healing
              <br />
              <em className="italic">feels like a retreat.</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="lg:col-span-5">
            <p className="text-base sm:text-lg text-ink/70 font-light leading-relaxed">
              Private villas, ayurvedic pavilions, an organic kitchen and 40 acres
              of healing forest. Designed by a team obsessed with both clinical
              precision and quiet luxury.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[220px] lg:auto-rows-[200px]">
          <Reveal className="col-span-2 lg:col-span-8 row-span-1 lg:row-span-3">
            <GalleryTile src={gallery2} alt="Row of luxury cottages surrounded by green lawns" caption="40 Acres · 18 Private Villas" />
          </Reveal>
          <Reveal delay={120} className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-2">
            <GalleryTile src={gallery1} alt="Paved path leading to white modern wellness pavilion" caption="Wellness Pavilion" />
          </Reveal>
          <Reveal delay={200} className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-1">
            <GalleryTile src={galleryVeranda} alt="Private wooden veranda of a villa with a deck lounge chair" caption="Private Verandas" />
          </Reveal>
          <Reveal delay={280} className="col-span-1 lg:col-span-5 row-span-1 lg:row-span-2">
            <GalleryTile src={gallery3} alt="Glass-walled villa illuminated during golden hour sunset" caption="Sunset Sanctuary" />
          </Reveal>
          <Reveal delay={360} className="col-span-1 lg:col-span-7 row-span-1 lg:row-span-2">
            <GalleryTile src={galleryPath} alt="Paved stone path winding through lush green gardens" caption="Healing Forest Paths" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GalleryTile({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <figcaption className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
        <div className="glass backdrop-blur-md bg-black/10 border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between transition-all duration-500 group-hover:border-gold/30">
          <span className="eyebrow text-white tracking-[0.2em] text-[9px] sm:text-xs font-light truncate mr-2">
            {caption}
          </span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/15 group-hover:border-gold/50 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shrink-0">
            <span className="text-white group-hover:text-navy transition-colors text-[10px] sm:text-xs">→</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

/* ----------------------------- experts ----------------------------- */

function Experts() {
  const team = [
    { n: "Dr. Aarti Mehta", r: "Endocrinology & Diabetology", y: "18 yrs" },
    { n: "Dr. Karthik Iyer", r: "Ayurveda · Panchakarma", y: "22 yrs" },
    { n: "Dr. Sneha Kapoor", r: "Functional Nutrition", y: "14 yrs" },
    { n: "Dr. Vikram Rao", r: "Integrative Cardiology", y: "20 yrs" },
  ];
  return (
    <section id="experts" className="bg-navy text-white py-16 lg:py-24 grain">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow text-gold">Meet Your Doctors</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/30 rounded-2xl" />
              <img
                src={doctorImg}
                alt="Dr. Rajiv Menon, Chief Medical Officer"
                className="relative w-full h-[360px] sm:h-[640px] object-cover rounded-2xl"
                loading="lazy"
                width={1080}
                height={1800}
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">Chief Medical Officer</span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mt-4 leading-[0.98]">
                Dr. Rajiv Menon
              </h2>
              <p className="font-display italic text-xl sm:text-2xl text-white/70 mt-3">
                MBBS · MD · IFMCP
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-4 sm:mt-8 text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-xl">
                With 25 years bridging conventional and functional medicine,
                Dr. Menon has guided over 3,000 patients to lasting recovery.
                A certified IFM practitioner trained at Cleveland Clinic, he
                leads Alpha's research and clinical protocols.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-xl">
                {[
                  ["25+", "Years"],
                  ["3,200+", "Patients"],
                  ["IFMCP", "Certified"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl text-gold">{v}</div>
                    <div className="eyebrow text-white/55 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 border-t border-white/10 pt-12">
          <Reveal>
            <p className="eyebrow text-white/60 mb-10">Supporting Specialists</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {team.map((m, i) => (
              <Reveal key={m.n} delay={i * 100}>
                <div className="border-t border-gold/30 pt-6">
                  <div className="font-display text-2xl text-white">{m.n}</div>
                  <div className="text-sm text-white/65 mt-2">{m.r}</div>
                  <div className="eyebrow text-gold mt-3">{m.y} Experience</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- final cta ----------------------------- */

function FinalCta({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={finalCta}
          alt="The beautifully illuminated cottages at Alpha Wellness Resort by night"
          className="w-full h-full object-cover kenburns"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-24 text-white text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="gold-rule" />
            <span className="eyebrow text-gold">Begin Today</span>
            <span className="gold-rule" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-4xl sm:text-[80px] lg:text-[112px] leading-[0.98]">
            Your healing journey
            <br />
            <em className="italic text-gold">starts today.</em>
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-4 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/80 font-light max-w-2xl mx-auto">
            Take the first step toward lasting health, energy and vitality.
            A specialist will personally design your recovery path.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsult}
              className="group inline-flex items-center justify-center whitespace-nowrap gap-2.5 px-6 sm:px-9 h-14 sm:h-15 rounded-full bg-gold text-navy text-[11px] sm:text-[13px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium hover:bg-[color:var(--gold-soft)] transition-all cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a
              href="https://wa.me/910000000000"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full border border-white/40 text-white text-[13px] tracking-[0.2em] uppercase hover:bg-white hover:text-forest transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
        <Reveal delay={560}>
          <div className="mt-10 inline-flex items-center gap-2 text-white/60 text-sm">
            <span className="w-2 h-2 rounded-full bg-gold shimmer" />
            Limited consultation slots available each week.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- footer ----------------------------- */

function Footer() {
  return (
    <footer className="bg-navy text-white pt-14 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img
              src={logoLight}
              alt="Alpha Wellness Resort Logo"
              className="h-14 sm:h-16 w-auto object-contain mb-4"
            />
            <p className="text-white/60 mt-5 max-w-md font-light leading-relaxed">
              A private sanctuary where functional medicine, ayurveda and
              advanced diagnostics converge to reverse chronic disease — naturally.
            </p>
            <div className="hairline mt-8 max-w-xs" />
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-gold mb-5">Visit</p>
            <p className="text-white/75 leading-relaxed text-sm">
              Alpha Sanctuary, Forest Drive<br />
              Coorg, Karnataka 571201<br />
              India
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-gold mb-5">Contact</p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>+91 90000 00000</li>
              <li>hello@alphawellness.com</li>
              <li><a href="https://wa.me/910000000000" className="hover:text-gold transition-colors">WhatsApp →</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-gold mb-5">Follow</p>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#" className="hover:text-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-gold">YouTube</a></li>
              <li><a href="#" className="hover:text-gold">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/45">
          <span>© {new Date().getFullYear()} Alpha Wellness Resort · All rights reserved.</span>
          <span className="eyebrow">Crafted with care · Coorg, India</span>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- floating CTAs ----------------------------- */

function StickyCta({ onOpenConsult }: { onOpenConsult: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={onOpenConsult}
      aria-label="Book free consultation"
      className={`fixed bottom-6 left-6 z-40 hidden md:inline-flex items-center gap-3 px-6 h-13 py-4 rounded-full bg-forest text-sand text-[12px] tracking-[0.18em] uppercase shadow-2xl transition-all duration-500 cursor-pointer ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
    >
      <span className="w-2 h-2 rounded-full bg-gold shimmer" />
      Book Free Consultation
    </button>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/910000000000"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold text-navy flex items-center justify-center shadow-2xl float-y hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.6 5.96L0 24l6.27-1.65A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.8a9.78 9.78 0 01-4.98-1.36l-.36-.21-3.72.98.99-3.63-.23-.37A9.8 9.8 0 1121.8 12 9.8 9.8 0 0112 21.8zm5.4-7.34c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.37-1.46a8.9 8.9 0 01-1.64-2.03c-.17-.3 0-.45.13-.6.13-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.5-.66-.5l-.56-.01a1.07 1.07 0 00-.78.36c-.27.3-1.03 1-1.03 2.45s1.05 2.84 1.2 3.04c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.49 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
