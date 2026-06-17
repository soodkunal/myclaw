import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-6xl font-head font-bold tracking-tight shadow-sm p-4 border border-border bg-card">
          MyClaw 🦖
        </h1>
        <p className="text-2xl font-sans text-muted-foreground font-medium">
          The ultimate open-source knowledge system for Claude Code. Drop-in skills, agents, and workflows.
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <Button size="lg" className="text-lg px-8 py-6 shadow-md border-border border-2 font-head tracking-wide">
            Get Started
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6 shadow-md border-border border-2 font-head tracking-wide">
            View on GitHub
          </Button>
        </div>
      </div>
    </main>
  );
}
