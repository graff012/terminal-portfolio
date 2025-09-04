"use client"

import type React from "react"
import { Suspense } from "react"
import TerminalNav from "@/components/terminal-nav"
import MatrixBackground from "@/components/matrix-background"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={null}>
      <MatrixBackground />
      <TerminalNav />
      {children}
    </Suspense>
  )
}
