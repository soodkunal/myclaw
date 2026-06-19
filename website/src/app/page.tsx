"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Accordion } from "@/components/retroui/Accordion";
import { Terminal, Bot, ShieldAlert, BookOpen, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center">
      {/* Navbar Placeholder */}
      <nav className="w-full border-b-2 border-black p-6 flex justify-between items-center bg-card">
        <div className="font-head text-2xl font-black tracking-tight">MYCLAW</div>
        <div className="flex gap-4">
          <Button variant="ghost" className="hidden sm:flex">Documentation</Button>
          <a href="https://github.com/soodkunal/myclaw" target="_blank" rel="noreferrer">
            <Button size="sm">GitHub</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 py-24 flex flex-col items-center text-center space-y-12">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-head font-black uppercase tracking-tighter leading-none shadow-[4px_4px_0_0_#000] border-4 border-black p-6 bg-card inline-block transform -rotate-1">
            Build Fast.<br />Break Nothing.
          </h1>
          <p className="text-xl sm:text-2xl font-sans font-medium text-muted-foreground max-w-2xl mx-auto border-2 border-black p-4 bg-accent shadow-[2px_2px_0_0_#000]">
            The ultimate NeoBrutalist knowledge system for Claude Code. Drop-in skills, specialized AI agents, and strict safety hooks.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center mt-8">
          <Button size="lg" className="w-full text-lg">
            Read Docs
          </Button>
          <Button variant="secondary" size="lg" className="w-full text-lg flex gap-2">
            <Terminal size={20} /> Install CLI
          </Button>
        </div>

        {/* Terminal Snippet */}
        <div className="mt-12 bg-black text-[#F5EFD9] font-mono p-6 rounded border-4 border-black shadow-[8px_8px_0_0_#000] w-full max-w-2xl text-left transform rotate-1">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-lg">~ $ npx @myclaw/init@latest</p>
          <p className="text-white/50 text-sm mt-2"># Bootstrapping your knowledge system...</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-6xl px-6 py-24 border-t-4 border-black bg-primary">
        <h2 className="text-4xl md:text-5xl font-head font-black uppercase tracking-tight mb-16 text-center shadow-[2px_2px_0_0_#000] border-2 border-black inline-block px-4 py-2 bg-white transform -rotate-1">
          The Ecosystem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="transform transition hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] bg-white">
            <Card.Header>
              <Bot className="w-12 h-12 mb-4" strokeWidth={2} />
              <Card.Title className="text-3xl font-head uppercase">Agents</Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Description className="text-lg font-sans font-medium text-black/70">
                Specialized personas like the Architect (Opus) and the fast Reviewer (Haiku) to drastically optimize token costs and speed.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card className="transform transition hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] bg-white">
            <Card.Header>
              <Layers className="w-12 h-12 mb-4" strokeWidth={2} />
              <Card.Title className="text-3xl font-head uppercase">Skills</Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Description className="text-lg font-sans font-medium text-black/70">
                13+ domain-specific skill modules covering everything from Next.js to Stripe payments, translated into 4 languages.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card className="transform transition hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] bg-white">
            <Card.Header>
              <ShieldAlert className="w-12 h-12 mb-4" strokeWidth={2} />
              <Card.Title className="text-3xl font-head uppercase">Hooks</Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Description className="text-lg font-sans font-medium text-black/70">
                Executable bash scripts that intercept dangerous commands (`terraform destroy`, `rm -rf /`) before the LLM can execute them.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card className="transform transition hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] bg-white">
            <Card.Header>
              <BookOpen className="w-12 h-12 mb-4" strokeWidth={2} />
              <Card.Title className="text-3xl font-head uppercase">Rules</Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Description className="text-lg font-sans font-medium text-black/70">
                Standardized Git conventions, code styles, and safety constraints that you can drop directly into your CLAUDE.md file.
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-head font-black uppercase tracking-tight mb-16 text-center">
          Why MyClaw?
        </h2>
        
        <div className="space-y-6">
          <Accordion>
            <Accordion.Item value="1" className="mb-4">
              <Accordion.Header className="text-xl">How does it save tokens?</Accordion.Header>
              <Accordion.Content className="text-base">
                MyClaw uses the Caveman technique to compress skills by stripping grammatical filler, saving up to 46% of tokens on every context injection.
              </Accordion.Content>
            </Accordion.Item>
            
            <Accordion.Item value="2" className="mb-4">
              <Accordion.Header className="text-xl">Can I use it with any tech stack?</Accordion.Header>
              <Accordion.Content className="text-base">
                Yes! The registry is fully modular. You only load the specific skills and rules that apply to your current tech stack.
              </Accordion.Content>
            </Accordion.Item>
            
            <Accordion.Item value="3">
              <Accordion.Header className="text-xl">Is it safe for production?</Accordion.Header>
              <Accordion.Content className="text-base">
                Absolutely. The Pre-Tool-Use hooks actively scan the LLM's commands and will forcefully block destructive actions before they reach your terminal.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t-4 border-black p-12 bg-black text-white text-center">
        <h3 className="font-head text-3xl font-black tracking-widest mb-6 text-[#F5EFD9]">MYCLAW</h3>
        <p className="font-sans font-medium max-w-md mx-auto text-white/70">
          The ultimate knowledge system to tame the AI coding era.
        </p>
        <div className="mt-12 pt-8 border-t-2 border-white/20">
          <p className="font-sans font-bold text-[#F5EFD9]">
            Shameless Plug: Enjoying this? Please contribute to the MyClaw repository and visit my <a href="https://github.com/soodkunal" className="underline hover:text-white transition">GitHub Profile</a>!
          </p>
        </div>
      </footer>
    </main>
  );
}
