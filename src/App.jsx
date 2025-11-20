import { useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Solution from "./Solution.jsx";
import Clients from "./Clients.jsx";
import CaseStudy from "./CaseStudy.jsx";
import Footer from "./Footer";  
// LOCAL BUTTON (fallback)
import DataSol from "./DataSol.jsx";
export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-10 py-2 rounded-md font-medium transition-all ${className}`}
    >
      {children}
    </button>
  );
}

// FALLBACK HERO IMAGE
const heroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";

// MERGED NAVBAR + HERO
export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Analytics", href: "#analytics" },
    { label: "HR Solutions", href: "#hr-solutions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
    <div className="w-full min-h-screen bg-[#fdfdfd] overflow-hidden pl-50">
      {/* NAVBAR */}
     {/* NAVBAR (FULLY TRANSPARENT) */}
{/* NAVBAR (Transparent with BLUE items) */}
{/* NAVBAR (Transparent with BLUE items) */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-transparent shadow-none">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-20">

      {/* LOGO */}
      <a href="#home" className="flex flex-col leading-none select-none">
        <span className="text-5xl font-extrabold text-[#003366]">dataX</span>
        <span className="text-xl pl-20 -mt-2 text-[#003366] font-extrabold tracking-wide">
          solution
        </span>
      </a>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden lg:flex items-center space-x-10 pr-20">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="
              text-[#003366] text-lg font-semibold 
              hover:text-[#ff7a21] transition
              relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
              after:w-0 hover:after:w-full after:bg-[#ff7a21] 
              after:transition-all
            "
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* BUTTON */}
      <div className="hidden lg:block">
        <button className="
          px-6 py-2 rounded-full 
          bg-[#ff7a21] text-white font-semibold
          hover:bg-[#e56d1d] transition
        ">
          Get in Touch
        </button>
      </div>

      {/* MOBILE MENU ICON (BLUE) */}
      <button
        className="lg:hidden text-[#003366]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>

    {/* MOBILE MENU (items also BLUE) */}
    {isMenuOpen && (
      <div className="lg:hidden py-4 border-t border-[#003366]/20 bg-white/70 backdrop-blur-sm">
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#003366] text-base font-medium hover:text-[#ff7a21] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button className="
            w-full py-2 rounded-full 
            bg-[#ff7a21] text-white font-semibold
            hover:bg-[#e56d1d] transition
          ">
            Get in Touch
          </button>
        </div>
      </div>
    )}
  </div>
</nav>
     {/* HERO */}
<section
  id="home"
  className="relative min-h-screen flex items-center  bg-white pt-20"
>
  {/* LEFT ARROW */}
  <button
    className="absolute right-330 top-1/2 -translate-y-1/2 hover:opacity-60 transition "
  >
    <svg width="70" height="100" viewBox="0 0 50 50">
      <polyline
        points="30,10 15,25 30,40"
        fill="none"
        stroke="#003366"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </button>

  {/* RIGHT GRADIENT X SHAPE */}
  <div className="absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden">
    <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[80%] h-full">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        <path
          d="M20 0 L100 80 L100 100 L80 100 L0 20 L0 0 Z M80 0 L100 0 L100 20 L20 100 L0 100 L0 80 Z"
          fill="#001a33"
        />
      </svg>
    </div>
  </div>

  <div className="w-full pl-4 pr-20 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT TEXT */}
      <div className="space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[#003366] leading-tight underline decoration-[#003366] decoration-[4px] underline-offset-10">
          Leading Provider of Open Data<br />Solutions
        </h1>

        <p className="text-lg text-[#003366]/80 max-w-lg">
          Supporting clients through digital transformation allowing to maximize
          investments from data assets.
        </p>

        {/* LEARN MORE BUTTON LIKE IMAGE */}
        <button className="flex items-center gap-3 text-[#ff7a21] font-semibold uppercase tracking-widest hover:text-[#003366] transition group">
          {/* Orange Circle */}
          <span className="w-12 h-12 rounded-full border-2 border-[#ff7a21] group-hover:border-[#003366] flex items-center justify-center transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="M13 6l6 6-6 6"></path>
            </svg>
          </span>

          <span className="tracking-widest">Learn More</span>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <img src={heroImage} alt="Team" className="w-full h-auto rounded-lg" />

        {/* Orange bars top-right */}
        <div className="absolute top-8 right-8 bg-white p-3 rounded-lg shadow-lg">
          <div className="flex space-x-1">
            <div className="w-8 h-16 bg-[#ff7a21] rounded"></div>
            <div className="w-8 h-12 bg-[#ff7a21]/60 rounded"></div>
            <div className="w-8 h-20 bg-[#ff7a21]/80 rounded"></div>
          </div>
        </div>

        {/* Graph bottom-left */}
        <div className="absolute bottom-12 left-8 bg-white p-3 rounded-lg shadow-lg">
          <svg width="60" height="40" viewBox="0 0 60 40">
            <polyline
              points="0,35 15,25 30,30 45,10 60,15"
              fill="none"
              stroke="#0099ff"
              strokeWidth="2"
            />
            <polyline
              points="0,38 15,30 30,35 45,20 60,25"
              fill="none"
              stroke="#ff7a21"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT ARROW */}
  <button
    className="absolute right-5 top-1/2 -translate-y-1/2 hover:opacity-60 transition"
  >
    <svg width="70" height="100" viewBox="0 0 50 50">
      <polyline
        points="20,10 35,25 20,40"
        fill="none"
        stroke="#003366"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </button>
</section>

      <Solution />
      <Clients/>
      <DataSol/>
      <CaseStudy/>
      
    </div>
    <Footer/>
  </>
  );
}
