import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import f1HeroBg from "@/assets/f1-hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with F1 image and overlays */}
      <div className="absolute inset-0">
        <img 
          src={f1HeroBg} 
          alt="F1 Racing Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 speed-line opacity-20"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 race-in">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-medium pulse-glow">
            <Zap className="w-4 h-4 animate-pulse" />
            F1 Inspired Streetwear
          </span>
        </div>
        
        <h1 className="font-sora font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight race-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">
            Apex
          </span>{" "}
          <span className="text-foreground relative">
            Street
            <div className="absolute -inset-4 bg-primary/5 rounded-lg -z-10 blur-xl" />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed stagger-in">
          <span className="text-primary font-semibold bg-gradient-primary bg-clip-text text-transparent">
            Engineered for Motion. Styled for the Streets.
          </span>
          <br />
          High-performance streetwear for speed enthusiasts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button asChild variant="racing" size="lg" className="min-w-[220px] h-14 text-lg font-semibold shadow-2xl hover:shadow-red-glow transform hover:scale-105">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="min-w-[220px] h-14 text-lg border-2 backdrop-blur-sm hover:bg-primary/10">
            <Link to="/categories/tees">
              Shop Tees
            </Link>
          </Button>
        </div>

        {/* Speed indicator lines */}
        <div className="absolute -left-20 top-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
        <div className="absolute -right-20 top-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};