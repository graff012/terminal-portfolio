"use client"
import { useActionState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/lib/actions"

const initialState = {
  success: false,
  message: "",
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState)

  return (
    <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
          <span className="text-primary font-mono">~/contact/send_message</span>
          <div className="w-2 h-4 bg-primary animate-pulse"></div>
        </div>

        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-primary/80 font-mono text-sm mb-2">$ firstName --required</label>
              <Input
                type="text"
                name="firstName"
                required
                className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20"
                placeholder="Enter your first name..."
              />
            </div>
            <div>
              <label className="block text-primary/80 font-mono text-sm mb-2">$ lastName --required</label>
              <Input
                type="text"
                name="lastName"
                required
                className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20"
                placeholder="Enter your last name..."
              />
            </div>
          </div>

          <div>
            <label className="block text-primary/80 font-mono text-sm mb-2">$ email --required</label>
            <Input
              type="email"
              name="email"
              required
              className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20"
              placeholder="your.email@domain.com"
            />
          </div>

          <div>
            <label className="block text-primary/80 font-mono text-sm mb-2">$ subject --required</label>
            <Input
              type="text"
              name="subject"
              required
              className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-primary/80 font-mono text-sm mb-2">$ message --required</label>
            <Textarea
              name="message"
              required
              rows={6}
              className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20 resize-none"
              placeholder="Type your message here..."
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="bg-primary text-background hover:bg-primary/80 font-mono px-6 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              $ send_message
            </Button>

            {state.message && (
              <div className={`font-mono text-sm animate-pulse ${state.success ? "text-primary" : "text-red-400"}`}>
                {state.success ? "✓" : "✗"} {state.message}
              </div>
            )}
          </div>
        </form>

        <div className="mt-6 p-4 border border-primary/30 rounded bg-background/30">
          <div className="text-primary/80 font-mono text-sm mb-2">$ status --info</div>
          <div className="text-sm">Messages are sent directly to my inbox. I typically respond within 24 hours.</div>
        </div>
      </div>
    </Card>
  )
}
