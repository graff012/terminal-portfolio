import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto p-4">
        <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10 crt-effect">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
              <span className="text-primary font-mono">~/projects</span>
            </div>
            <div className="terminal-text">
              <div className="text-primary mb-6">=== FEATURED PROJECTS ===</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 terminal-hover group">
                  <div className="p-4">
                    <div className="relative h-48 mb-4 rounded border border-primary/30 overflow-hidden">
                      <Image
                        src="/modern-e-commerce-website-dashboard-with-shopping-.jpg"
                        alt="Rozoviy Sad Flower Shop"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                        Live
                      </div>
                    </div>
                    <div className="text-primary/80 text-lg mb-2">
                      [4] Rozoviy Sad (Flower Shop)
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>├── Tech: React, NestJS, PostgreSQL</div>
                      <div>├── Features: Shop management, inventory system</div>
                      <div>├── Type: Fullstack e-commerce platform</div>
                      <div className="flex items-center gap-2">
                        └──
                        <a
                          href="https://rozoviysad.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          Live Demo
                        </a>
                        <span>|</span>
                        <a
                          href="https://github.com/graff012/rozoviy-sad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 terminal-hover group">
                  <div className="p-4">
                    <div className="relative h-48 mb-4 rounded border border-primary/30 overflow-hidden">
                      <Image
                        src="/collaborative-workspace-dashboard-with-team-manage.jpg"
                        alt="Workroom Collaboration Platform"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-green-500/20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                        Fullstack
                      </div>
                    </div>
                    <div className="text-primary/80 text-lg mb-2">
                      [3] Workroom
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>├── Tech: React, Node.js, Express, MongoDB</div>
                      <div>
                        ├── Features: Team collaboration, project management
                      </div>
                      <div>├── Type: Fullstack workspace platform</div>
                      <div className="flex items-center gap-2">
                        └──
                        <a
                          href="https://workroom-liart.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          Live Demo
                        </a>
                        <span>|</span>
                        <a
                          href="https://github.com/graff012/workroom-frontend"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          Frontend
                        </a>
                        <span>|</span>
                        <a
                          href="https://github.com/graff012/workroom-backend"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          Backend
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 terminal-hover group">
                  <div className="p-4">
                    <div className="relative h-48 mb-4 rounded border border-primary/30 overflow-hidden">
                      <Image
                        src="/task-management-app-interface-with-kanban-board-an.jpg"
                        alt="Dev Connect Social Platform"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-orange-500/20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                        Completed
                      </div>
                    </div>
                    <div className="text-primary/80 text-lg mb-2">
                      [5] Dev Connect
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>├── Tech: Social networking platform</div>
                      <div>├── Features: Developer posts, connections</div>
                      <div>├── Type: Social media for developers</div>
                      <div className="flex items-center gap-2">
                        └──
                        <a
                          href="https://github.com/graff012/dev-connect"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 terminal-hover group">
                  <div className="p-4">
                    <div className="relative h-48 mb-4 rounded border border-primary/30 overflow-hidden">
                      <Image
                        src="/drum-kit-music-interface-with-colorful-drum-pads.jpg"
                        alt="Drum Kit Interactive Music App"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                        Live
                      </div>
                    </div>
                    <div className="text-primary/80 text-lg mb-2">
                      [1] Drum Kit
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>├── Tech: JavaScript, HTML5, CSS3</div>
                      <div>
                        ├── Features: Interactive drum sounds, keyboard controls
                      </div>
                      <div>├── Type: Music web application</div>
                      <div className="flex items-center gap-2">
                        └──
                        <a
                          href="https://drum-kit-woad-beta.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          Live Demo
                        </a>
                        <span>|</span>
                        <a
                          href="https://github.com/graff012/drum-kit"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 terminal-hover group">
                  <div className="p-4">
                    <div className="relative h-48 mb-4 rounded border border-primary/30 overflow-hidden">
                      <Image
                        src="/modern-e-commerce-website-shop-interface-with-prod.jpg"
                        alt="Shop.co E-commerce Website"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                        Live
                      </div>
                    </div>
                    <div className="text-primary/80 text-lg mb-2">
                      [2] Shop.co (Figma Design)
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>├── Tech: React, Next.js, Tailwind CSS</div>
                      <div>├── Features: E-commerce UI, responsive design</div>
                      <div>├── Type: Frontend e-commerce implementation</div>
                      <div className="flex items-center gap-2">
                        └──
                        <a
                          href="https://shop-co-figma.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          Live Demo
                        </a>
                        <span>|</span>
                        <a
                          href="https://github.com/graff012/shop.co-figma"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 terminal-hover group">
                  <div className="p-4">
                    <div className="relative h-48 mb-4 rounded border border-primary/30 overflow-hidden">
                      <Image
                        src="/weather-analytics-dashboard-with-charts-graphs-and.jpg"
                        alt="YouTube Backend Clone"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-green-500/20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                        Backend
                      </div>
                    </div>
                    <div className="text-primary/80 text-lg mb-2">
                      [6] YouTube Backend Clone
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>├── Tech: NestJS, PostgreSQL</div>
                      <div>├── Features: RESTful API, video management</div>
                      <div>├── Type: Backend system clone</div>
                      <div className="flex items-center gap-2">
                        └──
                        <a
                          href="https://github.com/graff012/youtube-backend-clone"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-card/30 border-primary/20 mt-6">
                <div className="p-4">
                  <div className="text-primary/80 text-lg mb-3">
                    [7] Additional Projects
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="text-primary/70">
                        Learning Center Management
                      </div>
                      <div className="ml-2 space-y-1">
                        <div>├── Educational system</div>
                        <div>├── Courses & students</div>
                        <div className="flex items-center gap-2">
                          └──
                          <a
                            href="https://github.com/graff012/learning-center-management-system"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline text-xs"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary/70">Movie Project</div>
                      <div className="ml-2 space-y-1">
                        <div>├── Built with NestJS</div>
                        <div>├── Movie database system</div>
                        <div className="flex items-center gap-2">
                          └──
                          <a
                            href="https://github.com/graff012/movie-project-with-nest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline text-xs"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary/70">Lunchpiration</div>
                      <div className="ml-2 space-y-1">
                        <div>├── Food inspiration app</div>
                        <div>├── Recipe suggestions</div>
                        <div className="flex items-center gap-2">
                          └──
                          <a
                            href="https://github.com/graff012/lunchpiration"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline text-xs"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
