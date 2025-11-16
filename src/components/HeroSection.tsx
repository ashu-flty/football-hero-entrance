import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-football.jpg";
import { Play, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Live Season 2024/25
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
            Where Legends
            <span className="block bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent animate-pulse">
              Are Born
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto font-medium">
            Experience the passion, witness the glory, and be part of the beautiful game that unites millions worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="gap-2 text-base">
              <Play className="w-5 h-5" />
              Watch Highlights
            </Button>
            <Button variant="heroOutline" size="lg" className="gap-2 text-base">
              <Calendar className="w-5 h-5" />
              View Fixtures
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-sm md:text-base text-foreground/80">Matches</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">32</div>
              <div className="text-sm md:text-base text-foreground/80">Teams</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">2M+</div>
              <div className="text-sm md:text-base text-foreground/80">Fans</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
