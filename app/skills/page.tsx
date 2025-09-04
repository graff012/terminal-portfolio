import { Card } from "@/components/ui/card"

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
                <Card className="bg-card/30 border-primary/20 p-4">
                  <div className="text-primary/80 mb-4 text-lg flex items-center gap-2">
                    <span className="text-xl">💻</span> Languages & Frameworks
                  </div>
                  <div className="space-y-3">
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>JavaScript/TypeScript</span>
                        <span className="text-primary/60">95%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Node.js</span>
                        <span className="text-primary/60">90%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>React</span>
                        <span className="text-primary/60">90%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>NestJS</span>
                        <span className="text-primary/60">85%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/30 border-primary/20 p-4">
                  <div className="text-primary/80 mb-4 text-lg flex items-center gap-2">
                    <span className="text-xl">🎨</span> Frontend & Styling
                  </div>
                  <div className="space-y-3">
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>HTML/CSS</span>
                        <span className="text-primary/60">95%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Tailwind CSS</span>
                        <span className="text-primary/60">90%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/30 border-primary/20 p-4">
                  <div className="text-primary/80 mb-4 text-lg flex items-center gap-2">
                    <span className="text-xl">🗄️</span> Databases
                  </div>
                  <div className="space-y-3">
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>PostgreSQL</span>
                        <span className="text-primary/60">90%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>MongoDB</span>
                        <span className="text-primary/60">85%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Redis</span>
                        <span className="text-primary/60">75%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/30 border-primary/20 p-4">
                  <div className="text-primary/80 mb-4 text-lg flex items-center gap-2">
                    <span className="text-xl">🛠️</span> Tools & Platforms
                  </div>
                  <div className="space-y-3">
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Git</span>
                        <span className="text-primary/60">95%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Docker</span>
                        <span className="text-primary/60">80%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Linux CLI</span>
                        <span className="text-primary/60">85%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>AWS</span>
                        <span className="text-primary/60">75%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Neovim</span>
                        <span className="text-primary/60">90%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/30 border-primary/20 p-4">
                  <div className="text-primary/80 mb-4 text-lg flex items-center gap-2">
                    <span className="text-xl">🌐</span> Languages
                  </div>
                  <div className="space-y-3">
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>Uzbek (Native)</span>
                        <span className="text-primary/60">100%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="terminal-hover cursor-pointer group">
                      <div className="flex items-center justify-between mb-1">
                        <span>English (B2)</span>
                        <span className="text-primary/60">80%</span>
                      </div>
                      <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/20 border-primary/20 mt-8 p-4">
                  <div className="text-primary/80 mb-4 text-lg flex items-center gap-2">
                    <span className="text-xl">🎓</span> Education
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="border-l-2 border-primary/50 pl-4">
                        <h3 className="text-primary font-semibold">Najot Ta'lim</h3>
                        <p className="text-primary/70 text-sm">Bootcamp Fullstack Development</p>
                        <p className="text-primary/60 text-xs">2024 - 2025</p>
                        <div className="mt-2 text-xs text-primary/50">Intensive fullstack development program</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-2 border-primary/50 pl-4">
                        <h3 className="text-primary font-semibold">Fergana Polytechnic Institute</h3>
                        <p className="text-primary/70 text-sm">B.A. Economics</p>
                        <p className="text-primary/60 text-xs">2021 - 2025</p>
                        <div className="mt-2 text-xs text-primary/50">Bachelor's degree in Economics</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
