"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function TerminalNav() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const navItems = [
    { href: "/", label: "home", command: "~/" },
    { href: "/about", label: "about", command: "~/about" },
    { href: "/skills", label: "skills", command: "~/skills" },
    { href: "/projects", label: "projects", command: "~/projects" },
    { href: "/contact", label: "contact", command: "~/contact" },
  ]

  return (
    <nav className="bg-card border-b border-primary/30 p-4 crt-effect">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive hover:bg-destructive/80 transition-all duration-300 cursor-pointer floating-particle"></div>
            <div
              className="w-3 h-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 cursor-pointer floating-particle"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-primary hover:bg-primary/80 transition-all duration-300 cursor-pointer floating-particle"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          <span className="ml-4 text-muted text-sm glitch">nuriddin@portfolio</span>
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`terminal-hover transition-all duration-300 ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="text-primary">$</span> cd {item.command}
              {hoveredItem === item.href && <span className="terminal-cursor ml-1">|</span>}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
