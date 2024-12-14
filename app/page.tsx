import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Download, Waves, BookOpen, Code2, Brain, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Welp👋</h1>

          {/* Social Links and Dashboard */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-5 w-5" />
              </Button>
            </div>
            <Button asChild className="gap-2">
              <Link href="/dashboard">
                <LayoutDashboard className="h-5 w-5" />
                Go to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card className="border-2">
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-7 text-muted-foreground">
              This side project is a playground for me to explore and implement various React concepts,
              interesting 3rd-party packages, and engage in fun practice mini-challenges. It's a space
              where I can experiment, learn, and grow as a developer.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Practice</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Collection of practice interview mini machine coding challenges to sharpen coding skills.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Interview Challenge</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dedicated to showcasing interview-specific coding challenges and solutions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Topics</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Covers a wide range of React concepts and techniques for learning and exploration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Purpose Section */}
        <Card className="bg-primary/5 border-none">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Waves className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Purpose</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The purpose of this side project is to provide a hands-on learning experience, where I can
                apply theoretical knowledge to practical scenarios. It serves as a testament to my
                dedication to continuous improvement and passion for web development.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
