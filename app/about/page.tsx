import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto p-2 sm:p-4">
        <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10">
          <div className="p-3 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2 mb-4 pb-2 border-b border-primary/30">
              <span className="text-primary font-mono text-sm sm:text-base">
                ~/about
              </span>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 group bg-transparent w-full sm:w-auto"
              >
                <a
                  href="/Nuriddin_Sobirjonov_CV.pdf"
                  download="Nuriddin_Sobirjonov_CV.pdf"
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="font-mono text-xs">download_cv.pdf</span>
                </a>
              </Button>
            </div>
            <div className="terminal-text space-y-4">
              <div className="text-primary text-sm sm:text-base">$ whoami</div>
              <div className="text-base sm:text-lg">
                Hello! I'm Nuriddin Sobirjonov
              </div>

              <div className="mt-6">
                <div className="text-primary/80 mb-3 text-sm sm:text-base">
                  Profile:
                </div>
                <div className="space-y-3">
                  <div className="text-sm sm:text-base leading-relaxed">
                    Motivated Fullstack Developer skilled in building scalable
                    web applications with modern technologies. Passionate about
                    clean code, problem-solving, and contributing to real-world
                    projects. Seeking an opportunity to learn from experienced
                    teams while delivering value to users.
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-primary/80 mb-3">Location & Contact:</div>
                <div className="ml-4 space-y-2">
                  <div>📍 Fergana, Uzbekistan</div>
                  <div>📧 sobirjonovnuriddin43@gmail.com</div>
                  <div>📱 +998 91 397 39 07</div>
                  <div>
                    💼{" "}
                    <a
                      href="https://github.com/graff012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      GitHub: github.com/graff012
                    </a>
                  </div>
                  <div>
                    🔗{" "}
                    <a
                      href="https://www.linkedin.com/in/nuriddin-sobirjonov-1237802a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      LinkedIn: linkedin.com/in/nuriddin-sobirjonov
                    </a>
                  </div>
                  <div>
                    💬{" "}
                    <a
                      href="https://t.me/tt_me12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Telegram: t.me/tt_me12
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-primary/80">Current Focus:</div>
                <div className="ml-4 mt-2">
                  Building modern fullstack applications with React, NestJS, and
                  PostgreSQL
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
