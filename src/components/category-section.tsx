import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teeMockup from "@/assets/tee-mockup-1.jpg";
import jacketMockup from "@/assets/jacket-mockup-1.jpg";
import capMockup from "@/assets/cap-mockup-1.jpg";
import accessoriesMockup from "@/assets/accessories-mockup-1.jpg";
import limitedMockup from "@/assets/limited-mockup-1.jpg";

const categories = [
  {
    id: "tees",
    name: "Racing Tees",
    description: "High-performance racing-inspired graphic tees",
    image: teeMockup,
    link: "/categories/tees",
    functional: true
  },
  {
    id: "jackets",
    name: "Racing Jackets", 
    description: "Premium performance racing outerwear",
    image: jacketMockup,
    link: "/categories/jackets",
    functional: false
  },
  {
    id: "caps",
    name: "Racing Caps",
    description: "Team-inspired racing headwear",
    image: capMockup,
    link: "/categories/caps",
    functional: false
  },
  {
    id: "accessories",
    name: "Racing Gear",
    description: "High-performance racing lifestyle essentials",
    image: accessoriesMockup,
    link: "/categories/accessories",
    functional: false
  },
  {
    id: "limited",
    name: "Limited Edition",
    description: "Exclusive championship racing collection",
    image: limitedMockup,
    link: "/categories/limited",
    functional: false
  }
];

export const CategorySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-foreground mb-4">
            Racing Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our high-performance collections designed for champions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevation ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Category Image */}
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[2/1]" : "aspect-square"}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {!category.functional && (
                  <div className="absolute top-4 right-4 bg-muted/80 text-muted-foreground px-3 py-1 rounded-full text-sm">
                    Coming Soon
                  </div>
                )}
              </div>
              
              {/* Category Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-sora font-bold text-2xl mb-2">{category.name}</h3>
                <p className="text-white/80 mb-4">{category.description}</p>
                
                {category.functional ? (
                  <Button asChild variant="speed" size="sm">
                    <Link to={category.link}>
                      Shop Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled className="opacity-50">
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};