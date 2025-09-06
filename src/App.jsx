import React from "react";

const Nav = () => (
  <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" className="font-semibold tracking-wide">CARMEN PAQUETTE</a>
      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#about" className="hover:opacity-80">About</a>
        <a href="#reel" className="hover:opacity-80">Reel</a>
        <a href="#projects" className="hover:opacity-80">Projects</a>
        <a href="#teaching" className="hover:opacity-80">Teaching</a>
        <a href="#gallery" className="hover:opacity-80">Gallery</a>
        <a href="#press" className="hover:opacity-80">Press</a>
        <a href="#contact" className="hover:opacity-80">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Carmen Paquette</h1>
        <p className="mt-3 text-lg md:text-xl text-slate-700">Tap Dancer, Scientist & Educator</p>
        <p className="mt-6 text-slate-600 max-w-xl">
          Chicago-grown. New York-based. Bridging rhythm, history, and science through performance, STEAM collaborations, and community-centered teaching.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#reel" className="px-4 py-2 rounded-2xl bg-blue-600 text-white">Watch Reel</a>
          <a href="#contact" className="px-4 py-2 rounded-2xl border border-slate-400">Book / Contact</a>
          <a href="/resume.pdf" download className="px-4 py-2 rounded-2xl border border-slate-400">Download Resume</a>
        </div>
      </div>
      <div className="relative aspect-[4/5] rounded-3xl shadow-2xl bg-slate-200 overflow-hidden">
        <img
          alt="Carmen performing"
          src="/images/hero-portrait.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold">About</h2>
    <p className="mt-4 text-slate-700 leading-relaxed">
      Carmen Paquette (she/they) is a tap dancer, educator, and scientist whose work bridges creative and scientific inquiry. A proud Midwesterner, Carmen has performed across Chicago since 2014 with M.A.D.D. Rhythms and the Chicago Human Rhythm Project, and now develops solo and collaborative works in New York. With a B.S. in Materials Science & Engineering, Carmen partners with institutions including NASA and I-MRSEC to champion STEAM education.
    </p>
  </section>
);

const Reel = () => (
  <section id="reel" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold">Reel</h2>
    <div className="mt-6 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black grid place-items-center">
      <iframe
        className="h-full w-full"
        src="https://youtu.be/gq7Jw4DrpvQ"
        title="Carmen Paquette-Dance Reel"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold">Projects</h2>
    <ul className="mt-6 space-y-3 list-disc pl-5 text-slate-700">
      <li>Momentary Magnetism — NSF-supported STEAM project</li>
      <li>our bubbles — choreographic inquiry into digital echo chambers</li>
      <li>13 (Emerging Choreographers, 2017) — study in phrasing & counterpoint</li>
      <li>Chicago Tap Summit (2024) — performance & workshop teaching</li>
    </ul>
  </section>
);

const Teaching = () => (
  <section id="teaching" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold">Teaching</h2>
    <p className="mt-4 text-slate-700">
      I teach tap to all ages, blending historical context with technical clarity and playful rigor.
    </p>
    <ul className="mt-6 space-y-3 list-disc pl-5 text-slate-700">
      <li>The Joffrey Ballet</li>
      <li>Visceral Dance Center</li>
      <li>Hubbard Street (Lou Conte)</li>
      <li>STEAM residencies combining tap + science</li>
    </ul>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold">Gallery</h2>
    <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {["/images/gallery1.jpg","/images/gallery2.jpg","/images/gallery3.jpg"].map((src, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
          <img src={src} alt="Performance" className="h-56 w-full object-cover"/>
        </div>
      ))}
    </div>
  </section>
);

const Press = () => (
  <section id="press" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold">Press</h2>
    <ul className="mt-6 space-y-3 list-disc pl-5 text-slate-700">
      <li>"Tap Innovators to Watch" — Dance Magazine (2024)</li>
      <li>Feature Interview — Chicago Tribune</li>
      <li>Residency Spotlight — UIUC STEAM Blog</li>
    </ul>
  </section>
);

const Contact = () => (
  <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold">Contact</h2>
    <p className="mt-4 text-slate-700">Bookings, residencies, workshops, collaborations.</p>
    <p className="mt-2 text-slate-700">Email: ccpaquette0@gmail.com</p>
  </section>
);

const Footer = () => (
  <footer className="border-t">
    <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
      <p>© {new Date().getFullYear()} Carmen Paquette. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="#about" className="hover:opacity-80">About</a>
        <a href="#projects" className="hover:opacity-80">Projects</a>
        <a href="#contact" className="hover:opacity-80">Contact</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="min-h-screen font-sans text-slate-900 bg-white">
      <Nav />
      <Hero />
      <About />
      <Reel />
      <Projects />
      <Teaching />
      <Gallery />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
