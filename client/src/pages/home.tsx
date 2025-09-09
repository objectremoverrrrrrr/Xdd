import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center max-w-4xl mx-auto" data-testid="main-content">
        {/* Primary Text Display */}
        <h1 
          className={`text-display font-bold text-foreground select-none cursor-default tracking-tight transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          } text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight`}
          data-testid="text-main-display"
        >
          aaqib bhen ke lode
        </h1>

        {/* Secondary text - "by visual" */}
        <p 
          className={`text-muted-foreground select-none cursor-default mt-4 transition-all duration-600 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          } text-lg sm:text-xl md:text-2xl`}
          data-testid="text-byline"
        >
          by visual
        </p>
        
        {/* Subtle decorative elements for enhanced visual appeal */}
        <div className="mt-8 flex justify-center space-x-2" data-testid="decorative-dots">
          <div className="w-2 h-2 bg-primary rounded-full pulse-dot"></div>
          <div className="w-2 h-2 bg-primary rounded-full pulse-dot"></div>
          <div className="w-2 h-2 bg-primary rounded-full pulse-dot"></div>
        </div>
      </div>
    </main>
  );
}
