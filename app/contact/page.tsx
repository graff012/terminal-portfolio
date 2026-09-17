import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nuriddin Sobirjonov for full-time roles, freelance work, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <ContactForm />

        <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
              <span className="text-primary font-mono">~/contact/info</span>
            </div>
            <div className="terminal-text">
              <div className="text-primary mb-6">
                === CONTACT INFORMATION ===
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="hover:text-primary/80 transition-colors cursor-pointer">
                    <a
                      href="mailto:sobirjonovnuriddin43@gmail.com"
                      className="hover:underline"
                    >
                      📧 Email: sobirjonovnuriddin43@gmail.com
                    </a>
                  </div>
                  <div className="hover:text-primary/80 transition-colors cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/nuriddin-sobirjonov-1237802a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      🔗 LinkedIn: linkedin.com/in/nuriddin-sobirjonov-1237802a8
                    </a>
                  </div>
                  <div className="hover:text-primary/80 transition-colors cursor-pointer">
                    <a
                      href="https://github.com/graff012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      🐙 GitHub: github.com/graff012
                    </a>
                  </div>
                  {/* <div className="hover:text-primary/80 transition-colors cursor-pointer"> */}
                  {/*   <a href="https://nuriddin.uz" target="_blank" rel="noopener noreferrer" className="hover:underline"> */}
                  {/*     🌐 Portfolio: nuriddin.uz */}
                  {/*   </a> */}
                  {/* </div> */}
                  <div className="hover:text-primary/80 transition-colors cursor-pointer">
                    <a
                      href="https://t.me/tt_me12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      💬 Telegram: t.me/tt_me12
                    </a>
                  </div>
                  <div className="hover:text-primary/80 transition-colors cursor-pointer">
                    <a href="tel:+998913973907" className="hover:underline">
                      📱 Phone: +998 91 397 39 07
                    </a>
                  </div>
                  <div className="hover:text-primary/80 transition-colors cursor-pointer">
                    📍 Location: Fergana, Uzbekistan
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-primary/80 mb-3">
                    Preferred Contact Methods:
                  </div>
                  <div className="ml-4 space-y-2">
                    <div>├── Email (fastest response)</div>
                    <div>├── Telegram (quick messages)</div>
                    <div>├── LinkedIn (professional inquiries)</div>
                    <div>└── GitHub (technical discussions)</div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-primary/80 mb-3">Available for:</div>
                  <div className="ml-4 space-y-2">
                    <div>├── Full-time opportunities</div>
                    <div>├── Freelance projects</div>
                    <div>├── Technical consulting</div>
                    <div>├── Code reviews</div>
                    <div>└── Mentoring and collaboration</div>
                  </div>
                </div>

                <div className="mt-8 p-4 border border-primary/30 rounded bg-background/30 hover:bg-background/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-primary/80">
                      $ status --availability
                    </span>
                  </div>
                  <div className="text-green-400 mb-2">
                    ✓ Available for new opportunities
                  </div>
                  <div>
                    Currently seeking exciting fullstack development roles and
                    interesting projects. Let&apos;s build something amazing
                    together!
                  </div>
                </div>

                <div className="mt-6 p-3 border border-primary/20 rounded bg-background/20">
                  <div className="text-primary/80 mb-2">$ timezone --info</div>
                  <div className="text-sm space-y-1">
                    <div>🕐 Timezone: UTC+5 (Uzbekistan Time)</div>
                    <div>⚡ Response time: Usually within 24 hours</div>
                    <div>🌍 Remote work: Available worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
