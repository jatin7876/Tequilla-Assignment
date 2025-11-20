import {
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-10">

      {/* MAIN FOOTER AREA */}
      <div
        className="
          min-h-[320px]
          p-10 lg:p-16
          text-white 
          relative
          bg-[hsl(200_100%_18%)]
        "
      >

        {/* LEFT CONTENT */}
        <div className="max-w-xl relative z-20">

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Ready To <br /> Evolve?
          </h2>

          {/* CONTACT DETAILS */}
          <div className="space-y-3 mb-8 text-base">
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5" />
              <span>+971 06 521 1720</span>
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5" />
              <span>contact@dataxsolution.net</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="mb-6">
            <h3 className="text-xs uppercase font-semibold tracking-wider text-[hsl(200_20%_95%)]">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-white/80">
              {[
                "Home",
                "Solutions",
                "Analytics",
                "HR Solution",
                "About",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-[hsl(200_35%_65%)] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-wider text-[hsl(200_20%_95%)]">
              Get Connected
            </h3>

            <div className="flex gap-4 text-lg mt-2">
              <FaFacebook className="hover:text-[hsl(200_35%_65%)] transition"/>
              <FaLinkedin className="hover:text-[hsl(200_35%_65%)] transition"/>
              <FaTwitter className="hover:text-[hsl(200_35%_65%)] transition"/>
              <FaInstagram className="hover:text-[hsl(200_35%_65%)] transition"/>
            </div>
          </div>
        </div>

        {/* RIGHT THIN "X" WHITE SHAPE */}
        <div className="absolute right-0 top-0 h-full w-[40%] bg-white">

          {/* TOP TRIANGLE (Thin) */}
          <div
            className="
              absolute top-0 right-0
              w-0 h-0
              border-l-[110px] border-l-white
              border-t-[80px] border-t-transparent
            "
          />

          {/* BOTTOM TRIANGLE (Thin) */}
          <div
            className="
              absolute bottom-0 right-0
              w-0 h-0
              border-l-[10px] border-l-white
              border-b-[80px] border-b-transparent
            "
          />
        </div>

        {/* DECORATIVE NAVY-DARK TRIANGLES */}
        <div
          className="
            absolute top-0 right-[10%]
            w-10 h-10
            border-l-100 border-l-[hsl(200_100%_12%)]
            border-t-100 border-t-transparent
            border-b-100 border-b-transparent
            
          "
        />

        <div
          className="
            absolute bottom-0 right-[18%]
            w-0 h-0
            border-l-100 border-l-[hsl(200_100%_12%)]
            border-t-100 border-t-transparent
            border-b-100 border-b-transparent
          "
        />

      </div>
    </footer>
  );
}
