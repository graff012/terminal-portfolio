import { Card } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Nuriddin Sobirjonov — Prompt Engineer at Celion.",
};

type Role = {
  company: string;
  url?: string;
  title: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  tech: string[];
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "Celion",
    url: "https://celion.io",
    title: "Prompt Engineer",
    type: "Full-time",
    period: "Nov 2025 – Present",
    location: "Tashkent, Uzbekistan · On-site",
    current: true,
    tech: ["LLMs", "AI Agents", "Prompt Engineering"],
    highlights: [
      "Design and optimize prompts for LLM-powered product features.",
      "Evaluate and iterate on model output quality, accuracy, and reliability.",
      "Collaborate with engineering and product teams to ship AI-driven workflows.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto p-4">
        <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10 crt-effect">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
              <span className="text-primary font-mono">~/experience</span>
            </div>
            <div className="terminal-text">
              <div className="text-primary mb-6">=== WORK EXPERIENCE ===</div>

              <div className="space-y-8">
                {roles.map((role) => (
                  <div
                    key={`${role.company}-${role.title}`}
                    className="border-l-2 border-primary/50 pl-4 relative"
                  >
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary" />

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-primary text-lg font-semibold">
                        {role.title}
                      </h3>
                      {role.current && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-primary/40 text-primary/80">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="text-primary/85 mt-0.5">
                      {role.url ? (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline decoration-primary/50 underline-offset-2 hover:text-secondary hover:decoration-secondary transition-colors"
                          title={`Visit ${role.company}`}
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}{" "}
                      · {role.type}
                    </div>

                    <div className="text-primary/60 text-xs mt-1">
                      {role.period} · {role.location}
                    </div>

                    <div className="mt-3 space-y-1.5 text-sm">
                      {role.highlights.map((point) => (
                        <div key={point} className="flex gap-2">
                          <span className="text-primary/60">├──</span>
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                      <div className="flex gap-2 items-start">
                        <span className="text-primary/60">└──</span>
                        <span className="text-secondary/90">
                          {role.tech.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 border border-primary/30 rounded bg-background/30">
                <div className="text-primary/80 mb-2">$ status --availability</div>
                <div className="text-sm text-muted-foreground">
                  Open to new opportunities, freelance projects, and technical
                  collaboration.
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
