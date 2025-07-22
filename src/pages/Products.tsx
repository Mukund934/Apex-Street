import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { products, searchProducts } from "@/data/products";
import { cartStore } from "@/store/cart";
import { toast } from "@/hooks/use-toast";
import { useDebounce } from "@/hooks/use-debounce";
import { Loading } from "@/components/ui/loading";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  
  const filteredProducts = debouncedSearchQuery ? searchProducts(debouncedSearchQuery) : products;

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      cartStore.addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      
      toast({
        title: "Added to Cart!",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-sora font-bold text-4xl md:text-5xl text-foreground mb-4">
          All Products
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover our complete collection of F1-inspired streetwear
        </p>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search racing gear, tees, jackets..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearching(true);
              setTimeout(() => setIsSearching(false), 300);
            }}
            className="pl-10 pr-12 bg-card border-border focus:border-primary transition-all duration-300 h-12 text-lg"
          />
          {isSearching && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Loading />
            </div>
          )}
          {searchQuery && !isSearching && (
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
          )}
        </div>
      </div>

      {/* Search Results Header */}
      {debouncedSearchQuery && (
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            {filteredProducts.length > 0 
              ? `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} for "${debouncedSearchQuery}"`
              : `No results for "${debouncedSearchQuery}"`
            }
          </p>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="stagger-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 race-in">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            {debouncedSearchQuery ? "No racing gear found" : "Start your search"}
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {debouncedSearchQuery 
              ? "Try different keywords or check our categories for the perfect racing gear."
              : "Search through our collection of F1-inspired streetwear and find your perfect match."
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;