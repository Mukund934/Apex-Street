import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  onAddToCart?: () => void;
}

export const ProductCard = ({ id, name, price, image, category, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border card-hover stagger-in">
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        <div className="aspect-square bg-muted flex items-center justify-center relative speed-line">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center`;
            }}
          />
          {category && (
            <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium shadow-lg">
              {category}
            </span>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5 bg-gradient-to-b from-card to-card/80">
        <Link to={`/product/${id}`} className="block group/link">
          <h3 className="font-sora font-semibold text-foreground group-hover:text-primary transition-all duration-300 line-clamp-2 group/link-hover:underline underline-offset-2">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-200 origin-left">
              ${price}
            </span>
            <span className="text-xs text-muted-foreground">Free shipping</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
            >
              <Heart className="w-4 h-4" />
            </Button>
            
            <Button
              variant="racing"
              size="sm"
              onClick={onAddToCart}
              className="gap-1 shadow-md hover:shadow-red-glow"
            >
              <ShoppingCart className="w-4 h-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};