import { Card } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Nuriddin Sobirjonov — AI/LLM, Odoo/ERP, languages, frameworks, databases, and tools.",
}

type Skill = { name: string; level: number }
type SkillGroup = { icon: string; title: string; skills: Skill[] }

const skillGroups: SkillGroup[] = [
  {
    icon: "🤖",
    title: "AI & LLM",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "Agent Harnesses (Claude Code, Cursor)", level: 85 },
      { name: "LLM APIs (Claude, OpenAI)", level: 85 },
      { name: "AI Agents & Tool Use", level: 80 },
      { name: "Model Evaluation", level: 75 },
      { name: "RAG & Embeddings", level: 70 },
    ],
  },
  {
    icon: "🏢",
    title: "Odoo & ERP",
    skills: [
      { name: "Odoo", level: 85 },
      { name: "ERP Systems", level: 80 },
      { name: "CRM", level: 80 },
      { name: "Business Analysis", level: 80 },
      { name: "Accounting", level: 75 },
    ],
  },
  {
    icon: "💻",
    title: "Languages & Frameworks",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "React", level: 90 },
      { name: "NestJS", level: 85 },
    ],
  },
  {
    icon: "🎨",
    title: "Frontend & Styling",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 95 },
      { name: "Linux CLI", level: 85 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Neovim", level: 90 },
    ],
  },
  {
    icon: "🌐",
    title: "Languages",
    skills: [
      { name: "Uzbek (Native)", level: 100 },
      { name: "English (B2)", level: 80 },
    ],
  },
]

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="terminal-hover cursor-pointer group">
      <div className="flex items-center justify-between mb-1">
        <span>{skill.name}</span>
        <span className="text-primary/60">{skill.level}%</span>
      </div>
      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto p-4">
        <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10 crt-effect">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
              <span className="text-primary font-mono">~/skills</span>
            </div>
            <div className="terminal-text">
              <div className="text-primary mb-6">=== TECHNICAL SKILLS ===</div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {skillGroups.map((group) => (
                  <Card
                    key={group.title}
                    className="bg-card/30 border-primary/20 p-4"
                  >
                    <div className="text-primary/80 mb-4 text-lg flex items-center gap-2">
                      <span className="text-xl">{group.icon}</span>{" "}
                      {group.title}
                    </div>
                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
