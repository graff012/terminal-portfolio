"use client";
import { useState, useTransition } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/actions";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, setState] = useState(initialState);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await submitContactForm(state, formData);
        setState(result);
      } catch (error) {
        setState({
          success: false,
          message: "An error occurred while sending your message.",
        });
      }
    });
  };

  return (
    <Card className="bg-card border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
          <span className="text-primary font-mono">~/contact/send_message</span>
          <div className="w-2 h-4 bg-primary animate-pulse"></div>
        </div>

        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-primary/80 font-mono text-sm mb-2">
                $ firstName --required
              </label>
              <Input
                type="text"
                name="firstName"
                required
                disabled={isPending}
                className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20 disabled:opacity-50"
                placeholder="Enter your first name..."
              />
            </div>
            <div>
              <label className="block text-primary/80 font-mono text-sm mb-2">
                $ lastName --required
              </label>
              <Input
                type="text"
                name="lastName"
                required
                disabled={isPending}
                className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20 disabled:opacity-50"
                placeholder="Enter your last name..."
              />
            </div>
          </div>

          <div>
            <label className="block text-primary/80 font-mono text-sm mb-2">
              $ email --required
            </label>
            <Input
              type="email"
              name="email"
              required
              disabled={isPending}
              className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20 disabled:opacity-50"
              placeholder="your.email@domain.com"
            />
          </div>

          <div>
            <label className="block text-primary/80 font-mono text-sm mb-2">
              $ subject --required
            </label>
            <Input
              type="text"
              name="subject"
              required
              disabled={isPending}
              className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20 disabled:opacity-50"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-primary/80 font-mono text-sm mb-2">
              $ message --required
            </label>
            <Textarea
              name="message"
              required
              rows={6}
              disabled={isPending}
              className="bg-background/50 border-primary/30 text-foreground font-mono focus:border-primary focus:ring-primary/20 resize-none disabled:opacity-50"
              placeholder="Type your message here..."
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary text-background hover:bg-primary/80 font-mono px-6 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "$ sending..." : "$ send_message"}
            </Button>

            {state.message && (
              <div
                className={`font-mono text-sm animate-pulse ${state.success ? "text-primary" : "text-red-400"}`}
              >
                {state.success ? "✓" : "✗"} {state.message}
              </div>
            )}
          </div>
        </form>

        <div className="mt-6 p-4 border border-primary/30 rounded bg-background/30">
          <div className="text-primary/80 font-mono text-sm mb-2">
            $ status --info
          </div>
          <div className="text-sm">
            Messages are sent directly to my inbox. I typically respond within
            24 hours.
          </div>
        </div>
      </div>
    </Card>
  );
}
