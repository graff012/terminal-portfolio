"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// TypingText component
const TypingText = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

const asciiArt = `
███╗   ██╗██╗   ██╗██████╗ ██╗██████╗ ██████╗ ██╗███╗   ██╗
████╗  ██║██║   ██║██╔══██╗██║██╔══██╗██╔══██╗██║████╗  ██║
██╔██╗ ██║██║   ██║██████╔╝██║██║  ██║██║  ██║██║██╔██╗ ██║
██║╚██╗██║██║   ██║██╔══██╗██║██║  ██║██║  ██║██║██║╚██╗██║
██║ ╚████║╚██████╔╝██║  ██║██║██████╔╝██████╔╝██║██║ ╚████║
╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝
`;

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Navigation Header - Only visible on mobile */}
      {/* <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20"> */}
      {/*   <div className="flex items-center justify-between px-4 py-4"> */}
      {/*     <div className="text-primary font-mono text-lg font-bold"> */}
      {/*       NURIDDIN */}
      {/*     </div> */}
      {/*     <button */}
      {/*       onClick={toggleMenu} */}
      {/*       className="text-primary p-2" */}
      {/*       aria-label="Toggle menu" */}
      {/*     > */}
      {/*       {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
      {/*     </button> */}
      {/*   </div> */}
      {/**/}
      {/*   {/* Mobile Navigation Menu */}
      {/*   {isMenuOpen && ( */}
      {/*     <nav className="border-t border-primary/20 bg-background/95"> */}
      {/*       <div className="flex flex-col space-y-3 px-4 py-4"> */}
      {/*         <Link */}
      {/*           href="/about" */}
      {/*           className="text-primary hover:text-primary/80 transition-colors font-mono" */}
      {/*           onClick={() => setIsMenuOpen(false)} */}
      {/*         > */}
      {/*           About */}
      {/*         </Link> */}
      {/*         <Link */}
      {/*           href="/skills" */}
      {/*           className="text-primary hover:text-primary/80 transition-colors font-mono" */}
      {/*           onClick={() => setIsMenuOpen(false)} */}
      {/*         > */}
      {/*           Skills */}
      {/*         </Link> */}
      {/*         <Link */}
      {/*           href="/projects" */}
      {/*           className="text-primary hover:text-primary/80 transition-colors font-mono" */}
      {/*           onClick={() => setIsMenuOpen(false)} */}
      {/*         > */}
      {/*           Projects */}
      {/*         </Link> */}
      {/*         <Link */}
      {/*           href="/contact" */}
      {/*           className="text-primary hover:text-primary/80 transition-colors font-mono" */}
      {/*           onClick={() => setIsMenuOpen(false)} */}
      {/*         > */}
      {/*           Contact */}
      {/*         </Link> */}
      {/*       </div> */}
      {/*     </nav> */}
      {/*   )} */}
      {/* </div> */}

      {/* Main Content - Your original code with mobile responsive adjustments */}
      <div className="max-w-4xl mx-auto p-4 pt-20 md:pt-4">
        <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10 crt-effect">
          <div className="p-4 md:p-8">
            <div className="terminal-text text-center">
              <pre className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-primary/80 mb-4 md:mb-6 overflow-x-auto glitch">
                {asciiArt}
              </pre>

              <div className="text-primary text-lg md:text-xl mb-3 md:mb-4">
                <TypingText text="Welcome to my Portfolio" speed={80} />
              </div>

              <div className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                <TypingText
                  text="A passionate software developer with expertise in full-stack development"
                  speed={30}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-6 md:mb-8">
                <Link
                  href="https://github.com/graff012"
                  target="_blank"
                  className="terminal-hover flex items-center justify-center gap-2 text-primary/80 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-mono text-sm">GitHub</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/nuriddin-sobirjonov-1237802a8"
                  target="_blank"
                  className="terminal-hover flex items-center justify-center gap-2 text-primary/80 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="font-mono text-sm">LinkedIn</span>
                </Link>

                <Link
                  href="https://t.me/tt_me12"
                  target="_blank"
                  className="terminal-hover flex items-center justify-center gap-2 text-primary/80 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="font-mono text-sm">Telegram</span>
                </Link>
              </div>

              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="text-primary/80 text-sm md:text-base">
                  Available commands:
                </div>
                <div className="font-mono text-xs md:text-sm space-y-1 ml-4">
                  <Link
                    href="/about"
                    className="block terminal-hover cursor-pointer hover:text-primary transition-colors"
                  >
                    $ cd ~/about - Learn more about me
                  </Link>
                  <Link
                    href="/skills"
                    className="block terminal-hover cursor-pointer hover:text-primary transition-colors"
                  >
                    $ cd ~/skills - View technical skills
                  </Link>
                  <Link
                    href="/projects"
                    className="block terminal-hover cursor-pointer hover:text-primary transition-colors"
                  >
                    $ cd ~/projects - Browse my projects
                  </Link>
                  <Link
                    href="/contact"
                    className="block terminal-hover cursor-pointer hover:text-primary transition-colors"
                  >
                    $ cd ~/contact - Get in touch
                  </Link>
                </div>
              </div>

              <div className="mt-6 text-primary/60 text-xs md:text-sm">
                <TypingText
                  text="Use the navigation above or click any command to explore"
                  speed={40}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
