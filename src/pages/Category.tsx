import { useParams } from "react-router-dom";
import { ProductCard } from "@/components/product-card";
import { getProductsByCategory } from "@/data/products";
import { cartStore } from "@/store/cart";
import { toast } from "@/hooks/use-toast";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];

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
        <h1 className="font-sora font-bold text-4xl md:text-5xl text-foreground mb-4 capitalize">
          {category} Collection
        </h1>
        <p className="text-xl text-muted-foreground">
          Premium racing-inspired {category?.toLowerCase()} for the modern enthusiast
        </p>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🏁</div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Coming Soon
          </h3>
          <p className="text-muted-foreground">
            This category is currently under development. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default Category;