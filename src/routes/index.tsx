import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpg";
import photo10 from "@/assets/photo-10.jpg";
import photo11 from "@/assets/photo-11.jpg";
import photo12 from "@/assets/photo-12.jpg";
import photo13 from "@/assets/photo-13.jpg";
import photo14 from "@/assets/photo-14.jpg";
import photo15 from "@/assets/photo-15.jpg";
import photo16 from "@/assets/photo-16.jpg";
import photo17 from "@/assets/photo-17.jpg";
import photo18 from "@/assets/photo-18.jpg";
import face1 from "@/assets/face-1.jpg";
import face2 from "@/assets/face-2.jpg";
import face3 from "@/assets/face-3.jpg";
import face4 from "@/assets/face-4.jpg";
import face5 from "@/assets/face-5.jpg";
import faceGrief from "@/assets/face-grief.jpg";
import photoStyle from "@/assets/photo-style.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil Pra — Actor, Writer & Director | Film Industry" },
      {
        name: "description",
        content:
          "Portfolio of Prakasam Nikhil Pra — aspiring actor, writer & director. Short films, feature scripts with storyboards, and a showreel.",
      },
      { property: "og:title", content: "Nikhil Pra — Actor, Writer & Director" },
      {
        property: "og:description",
        content: "Story ready. Storyboard ready. Production ready.",
      },
      { property: "og:image", content: face2 },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-x-hidden scroll-smooth">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Works />
      <Reel />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl tracking-tight">
          NIKHIL<span className="text-accent">.</span>PRA
        </a>
        <nav className="hidden gap-8 font-mono text-sm uppercase md:flex">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#my-works" className="hover:text-accent">Work</a>
          <a href="#reel" className="hover:text-accent">Reel</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
        </nav>
        <a
          href="#contact"
          className="border-brutal bg-pop px-4 py-2 font-mono text-xs font-bold uppercase shadow-brutal hover-lift"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b-[3px] border-ink scroll-mt-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-between border-ink p-6 lg:border-r-[3px] lg:p-12">
          <div className="font-mono text-xs uppercase tracking-widest">
            Portfolio / 2026 — Hyderabad, IN
          </div>

          <h1 className="font-display my-10 leading-[0.85] lg:my-0">
            <span className="block text-[14vw] lg:text-[7.5vw]">
              ACTOR<span className="text-accent">.</span>
            </span>
            <span className="block text-[14vw] lg:text-[7.5vw]">
              WRIT<span className="text-accent">ER</span>
            </span>
            <span className="block">
              <span className="bg-pop px-2 text-[14vw] lg:text-[7.5vw] inline-block">
                DIRECTOR
              </span>
            </span>
          </h1>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-md font-sans text-base">
              I'm <strong>Prakasam Nikhil Pra</strong> — an aspiring film maker.
              Three feature scripts, fully storyboarded, and ready for
              production.
            </p>
            <div className="font-mono text-xs uppercase">↓ Scroll</div>
          </div>
        </div>

        <div className="relative border-t-[3px] border-ink lg:border-t-0">
          <img
            src={photo1}
            alt="Portrait of Nikhil Pra"
            className="img-enhance h-[60vh] w-full object-cover object-top lg:h-full lg:max-h-[80vh]"
          />
          <div className="absolute bottom-4 left-4 border-brutal bg-accent px-3 py-1 font-mono text-xs font-bold uppercase">
            01 / Lead Look
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Lead Roles", "★", "Direction", "★", "Writing", "★", "Short Films", "★", "Storyboard Ready", "★"];
  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-ink py-4 text-paper">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-4xl">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className={i % 2 === 0 ? "" : "text-accent"}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b-[3px] border-ink scroll-mt-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <div className="col-span-4 border-ink bg-pop p-6 lg:border-r-[3px] lg:p-12">
          <div className="font-mono text-xs uppercase">/ About</div>
          <div className="font-display mt-8 text-7xl">N.P</div>
          <dl className="mt-10 space-y-3 font-mono text-sm">
            <Row k="Name" v="Prakasam Nikhil Pra" />
            <Row k="Age" v="25" />
            <Row k="Height" v="5'6&quot;" />
            <Row k="Weight" v="60 KG" />
            <Row k="Eyes" v="Black" />
            <Row k="Hair" v="Black" />
            <Row k="Skin" v="Medium Brown" />
            <Row k="Based" v="Hyderabad" />
            <Row k="Languages" v="Telugu · Hindi · English · Tamil" />
            <Row k="Focus" v="Writer · Lead Actor · Prominent Roles · Direction" />
          </dl>
        </div>
        <div className="col-span-8 p-6 lg:p-12">
          <h2 className="font-display text-5xl lg:text-7xl">
            A story written. A board drawn. <span className="text-accent">Ready to roll.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">
            I'm Nikhil Pra — an aspiring film maker. I've written, directed and
            acted in a handful of short films on YouTube, and I'm currently
            sitting on three feature scripts with shot-by-shot storyboards. The
            screenplays are locked, the look-books are cut, the lead is cast —
            me. All that's missing is the green light.
          </p>

          <div id="my-works" className="mt-10 scroll-mt-24">
            <div className="font-mono text-xs uppercase">/ My Works</div>
            <h3 className="font-display mt-2 text-3xl lg:text-4xl">
              Watch what I've <span className="text-accent">made</span>.
            </h3>
            <p className="mt-3 max-w-xl font-sans text-sm opacity-80">
              Self-written, self-directed, self-acted — released on my YouTube
              channel. Start with the latest short, then dig into the rest.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 font-mono text-xs">
            <a
              href="https://youtube.com/@prabhavathiproductions5207"
              target="_blank"
              rel="noopener noreferrer"
              className="border-brutal bg-paper px-4 py-2 font-bold uppercase shadow-brutal hover-lift"
            >
              ▶ YouTube Channel
            </a>
            <a
              href="https://youtu.be/fQgbh24g0HE"
              target="_blank"
              rel="noopener noreferrer"
              className="border-brutal bg-accent px-4 py-2 font-bold uppercase shadow-brutal hover-lift"
            >
              ▶ Latest Short Film
            </a>
            <a
              href="https://www.instagram.com/ni_.kill_._/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-brutal bg-pop px-4 py-2 font-bold uppercase shadow-brutal hover-lift"
            >
              @ni_.kill_._
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              ["4", "Short Films"],
              ["3", "Feature Scripts"],
              ["120+", "Storyboard Frames"],
            ].map(([num, label]) => (
              <div key={label} className="border-brutal bg-paper p-4 shadow-brutal">
                <div className="font-display text-4xl text-accent">{num}</div>
                <div className="mt-2 font-mono text-xs uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-ink pb-2">
      <dt>{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}

const faces = [
  { src: face2, label: "White Shirt · Noir" },
  { src: face1, label: "Off Guard · Candid" },
  { src: face3, label: "Point Blank" },
  { src: face4, label: "Sadness" },
  { src: faceGrief, label: "Grief" },
  { src: face5, label: "Hand To Lens" },
  { src: photo14, label: "Grin · Daylight" },
  { src: photo18, label: "Fisheye · Thought" },
];

function FaceCarousel() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + faces.length) % faces.length);
  const next = () => setI((p) => (p + 1) % faces.length);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % faces.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="mb-12">
      <div className="mb-4">
        <div className="font-mono text-xs uppercase">/ Close-Ups</div>
        <h3 className="font-display mt-1 text-3xl lg:text-5xl">
          Face <span className="text-accent">Cards</span>
        </h3>
      </div>
      <div className="border-brutal bg-ink shadow-brutal-lg">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img src={faces[i].src} alt={faces[i].label} className="img-enhance h-full w-full object-cover" />
          <button
            onClick={prev}
            aria-label="Previous"
            className="border-brutal absolute left-3 top-1/2 -translate-y-1/2 bg-paper px-3 py-2 font-mono text-sm font-bold shadow-brutal hover-lift"
          >←</button>
          <button
            onClick={next}
            aria-label="Next"
            className="border-brutal absolute right-3 top-1/2 -translate-y-1/2 bg-accent px-3 py-2 font-mono text-sm font-bold shadow-brutal hover-lift"
          >→</button>
          <div className="absolute bottom-3 left-3 border-brutal bg-pop px-3 py-1 font-mono text-[11px] font-bold uppercase">
            {String(i + 1).padStart(2, "0")} / {String(faces.length).padStart(2, "0")} · {faces[i].label}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3 md:grid-cols-7">
        {faces.map((f, idx) => (
          <button key={f.label} onClick={() => setI(idx)} className={`border-brutal aspect-[16/9] overflow-hidden bg-paper transition ${idx === i ? "ring-4 ring-accent" : "hover-lift"}`}>
            <img src={f.src} alt={f.label} className="img-enhance h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

type Work = {
  title: string;
  year: string;
  span: string;
  h: string;
  layout: "single" | "duo" | "trio";
  images: string[];
  blurb?: string;
};

const works: Work[] = [
  { title: "Negative Shade", year: "2025", span: "lg:col-span-7", h: "h-[420px] lg:h-[520px]", layout: "duo", images: [photo7, photo6] },
  { title: "Wreckage & Wheels", year: "2024", span: "lg:col-span-5", h: "h-[420px] lg:h-[520px]", layout: "duo", images: [photo3, photo4] },
  { title: "Duality", year: "2024", span: "lg:col-span-5", h: "h-[420px] lg:h-[520px]", layout: "single", images: [photo17], blurb: "A single expression carrying two different conversations." },
  { title: "Frames & Smoke", year: "2025", span: "lg:col-span-7", h: "h-[420px] lg:h-[520px]", layout: "trio", images: [photo12, photo11, photo13] },
];

function Collage({ layout, images, alt }: { layout: Work["layout"]; images: string[]; alt: string }) {
  if (layout === "single") {
    return <img src={images[0]} alt={alt} loading="lazy" className="img-enhance h-full w-full object-cover" />;
  }
  if (layout === "duo") {
    return (
      <div className="grid h-full w-full grid-cols-2 gap-[3px] bg-ink">
        {images.slice(0, 2).map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${i + 1}`} loading="lazy" className="img-enhance h-full w-full object-cover" />
        ))}
      </div>
    );
  }
  return (
    <div className="grid h-full w-full grid-cols-3 gap-[3px] bg-ink">
      <img src={images[0]} alt={`${alt} 1`} loading="lazy" className="img-enhance col-span-2 h-full w-full object-cover" />
      <div className="grid grid-rows-2 gap-[3px]">
        <img src={images[1]} alt={`${alt} 2`} loading="lazy" className="img-enhance h-full w-full object-cover" />
        <img src={images[2]} alt={`${alt} 3`} loading="lazy" className="img-enhance h-full w-full object-cover" />
      </div>
    </div>
  );
}

function Works() {
  return (
    <section id="work" className="border-b-[3px] border-ink p-6 lg:p-12 scroll-mt-24">
      <div className="mx-auto max-w-[1400px]">
        <FaceCarousel />

        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="font-mono text-xs uppercase">/ Selected Work</div>
            <h2 className="font-display mt-2 text-5xl lg:text-8xl">
              The <span className="text-accent">Reel</span> Deal
            </h2>
          </div>
          <div className="hidden font-mono text-sm md:block">{String(works.length).padStart(2, "0")} Projects</div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {works.map((w, i) => (
            <article key={w.title} className={`${w.span} border-brutal bg-paper shadow-brutal hover-lift`}>
              <div className={`relative ${w.h} overflow-hidden border-b-[3px] border-ink`}>
                <Collage layout={w.layout} images={w.images} alt={w.title} />
                <span className="absolute top-3 left-3 bg-pop border-brutal px-2 py-1 font-mono text-[10px] font-bold uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{w.title}</h3>
                  <span className="font-mono text-xs">{w.year}</span>
                </div>
                {w.blurb && (
                  <p className="mt-2 font-sans text-sm opacity-80">{w.blurb}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <Gallery />
      </div>
    </section>
  );
}

const gallery = [
  { src: photo2, label: "Cow Boy" },
  { src: photo16, label: "Red Laces" },
  { src: photo15, label: "Modelling" },
  { src: photo9, label: "Wall · Wrench" },
  { src: photo10, label: "Drugs" },
  { src: photo5, label: "Duality" },
  { src: photo8, label: "Thoughts" },
  { src: photo6, label: "Drugs and Glass" },
  { src: photo11, label: "White Shirt · Shadow" },
  { src: photo12, label: "Light Up" },
  { src: photo13, label: "Pride" },
  { src: photo3, label: "Villain" },
  { src: photo4, label: "Arrogance" },
  { src: photo7, label: "Smoker" },
  { src: photoStyle, label: "Style" },
];

function Gallery() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((i) => (i + 1) % gallery.length);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % gallery.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="mt-16">
      <div className="mb-6">
        <div className="font-mono text-xs uppercase">/ Stills Reel</div>
        <h3 className="font-display mt-2 text-4xl lg:text-6xl">
          Swipe The <span className="text-accent">Frames</span>
        </h3>
      </div>

      <div className="border-brutal bg-ink shadow-brutal-lg">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img src={gallery[index].src} alt={gallery[index].label} className="img-enhance h-full w-full object-contain" />
          <button
            onClick={prev}
            aria-label="Previous"
            className="border-brutal absolute left-3 top-1/2 -translate-y-1/2 bg-paper px-4 py-2 font-mono text-sm font-bold shadow-brutal hover-lift"
          >←</button>
          <button
            onClick={next}
            aria-label="Next"
            className="border-brutal absolute right-3 top-1/2 -translate-y-1/2 bg-accent px-4 py-2 font-mono text-sm font-bold shadow-brutal hover-lift"
          >→</button>
          <div className="absolute bottom-3 left-3 border-brutal bg-pop px-3 py-1 font-mono text-[11px] font-bold uppercase">
            {String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")} · {gallery[index].label}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-12">
        {gallery.map((g, i) => (
          <button key={g.label} onClick={() => setIndex(i)} className={`border-brutal aspect-square overflow-hidden bg-paper transition ${i === index ? "ring-4 ring-accent translate-y-[-2px]" : "hover-lift"}`}>
            <img src={g.src} alt={g.label} loading="lazy" className="img-enhance h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

const reels = [
  { src: "/reel/negative-shade.mp4", title: "Negative Shade", tag: "Self-Shot" },
  { src: "/reel/hindi.mp4", title: "Hindi", tag: "Language Test" },
  { src: "/reel/confidence.mp4", title: "Confidence", tag: "Monologue" },
  { src: "/reel/breakup.mp4", title: "Breakup", tag: "Drama" },
  { src: "/reel/romance.mp4", title: "Romance", tag: "Emotion" },
  { src: "/reel/comedy.mp4", title: "Comedy", tag: "Timing" },
];

function Reel() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + reels.length) % reels.length);
  const next = () => setI((p) => (p + 1) % reels.length);
  const current = reels[i];

  return (
    <section id="reel" className="border-b-[3px] border-ink bg-ink p-6 text-paper lg:p-12 scroll-mt-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase text-accent">/ Showreel</div>
            <h2 className="font-display mt-4 text-6xl lg:text-8xl">
              {current.title.toUpperCase().split(" ")[0]}{" "}
              <span className="text-pop">{current.title.toUpperCase().split(" ").slice(1).join(" ") || "REEL"}</span>
            </h2>
            <p className="mt-6 max-w-md text-lg">
              Six self-shot performance pieces. Different tones, different
              languages, one actor. Locked scripts, drawn storyboards, and
              three feature-ready stories sitting behind them.
            </p>
            <div className="mt-6 font-mono text-xs uppercase opacity-80">
              {String(i + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")} · {current.tag}
            </div>
            <div className="mt-4 flex gap-2">
              <button onClick={prev} className="border-[3px] border-paper bg-paper px-4 py-2 font-mono text-xs font-bold uppercase text-ink hover-lift">← Prev</button>
              <button onClick={next} className="border-[3px] border-paper bg-accent px-4 py-2 font-mono text-xs font-bold uppercase text-ink hover-lift">Next →</button>
            </div>
            <a href="#contact" className="mt-6 inline-block border-[3px] border-paper bg-accent px-6 py-3 font-mono text-sm font-bold uppercase text-ink">
              Request full reel →
            </a>
          </div>

          <div className="group relative aspect-video w-full border-[3px] border-paper">
            <video
              key={current.src}
              src={current.src}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full bg-black object-contain"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <span className="font-display text-4xl uppercase tracking-[0.2em] text-paper/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:text-6xl">
                {current.title.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-6">
          {reels.map((r, idx) => (
            <button
              key={r.title}
              onClick={() => setI(idx)}
              className={`border-[3px] px-2 py-3 text-left font-mono text-[10px] font-bold uppercase transition ${
                idx === i ? "border-accent bg-accent text-ink" : "border-paper bg-ink text-paper hover:bg-paper hover:text-ink"
              }`}
            >
              {String(idx + 1).padStart(2, "0")} · {r.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Dancer",
    "Sketching",
    "Boxing",
    "Boo-Staff Combat",
    "Action Choreography",
    "Weapon Combat Trainee",
    "Writing",
    "Direction",
  ];
  return (
    <section id="skills" className="border-b-[3px] border-ink bg-paper p-6 lg:p-12 scroll-mt-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="font-mono text-xs uppercase">/ Special Skills</div>
        <h2 className="font-display mt-2 text-5xl lg:text-7xl">
          Trained <span className="text-accent">Hands</span>. Trained <span className="bg-pop px-2">Body</span>.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((s) => (
            <div key={s} className="border-brutal bg-paper p-5 shadow-brutal hover-lift">
              <div className="font-display text-2xl">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items: Array<[string, string, string]> = [
    ["Email", "filmpurposenikhilpra@gmail.com", "mailto:filmpurposenikhilpra@gmail.com"],
    ["Phone", "+91 96766 71976", "tel:+919676671976"],
    ["Instagram", "@ni_.kill_._", "https://www.instagram.com/ni_.kill_._/"],
    ["YouTube", "Prabhavathi Productions", "https://youtube.com/@prabhavathiproductions5207"],
  ];
  return (
    <section id="contact" className="border-b-[3px] border-ink bg-accent p-6 lg:p-12 scroll-mt-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="font-mono text-xs uppercase">/ Get In Touch</div>
        <h2 className="font-display mt-2 text-6xl leading-[0.9] lg:text-[9vw]">
          Let's make
          <br />
          <span className="bg-ink px-3 text-paper">something</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([label, val, href]) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="border-brutal bg-paper p-5 shadow-brutal hover-lift block"
              >
                <div className="font-mono text-xs uppercase">{label}</div>
                <div className="font-display mt-2 text-xl break-all">{val}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink p-6 text-paper lg:p-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="font-display text-5xl lg:text-7xl">
          NIKHIL PRA <span className="text-accent">©</span> 2026
        </div>
        <div className="font-mono text-xs uppercase opacity-70">
          Story ready. Board ready. Production ready.
        </div>
      </div>
    </footer>
  );
}
