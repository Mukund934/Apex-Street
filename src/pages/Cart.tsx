import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cartStore, CartItem } from "@/store/cart";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [removingItemId, setRemovingItemId] = useState<string | null>(null);

  useEffect(() => {
    setItems(cartStore.getItems());
  }, []);

  const updateQuantity = (id: string, newQuantity: number, size?: string, color?: string) => {
    if (newQuantity < 1) {
      removeItem(id, size, color);
      return;
    }
    cartStore.updateQuantity(id, newQuantity, size, color);
    setItems(cartStore.getItems());
    toast({
      title: "Quantity Updated",
      description: "Cart updated successfully.",
    });
  };

  const removeItem = (id: string, size?: string, color?: string) => {
    const key = `${id}-${size}-${color}`;
    setRemovingItemId(key);
    setTimeout(() => {
      cartStore.removeItem(id, size, color);
      setItems(cartStore.getItems());
      setRemovingItemId(null);
      toast({
        title: "Item Removed",
        description: "Item has been removed from your cart.",
        variant: "destructive",
      });
    }, 300);
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Checkout Complete!",
        description: "Thank you for your order. You'll receive a confirmation email soon.",
      });
      cartStore.clearCart();
      setItems([]);
    }, 2000);
  };

  const subtotal = cartStore.getTotalPrice();
  const shipping = subtotal > 75 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center race-in">
        <ShoppingBag className="w-24 h-24 text-muted-foreground/50 mx-auto mb-6" />
        <h1 className="font-sora font-bold text-3xl md:text-4xl text-foreground mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Start your racing journey! Add some high-performance streetwear to your cart.
        </p>
        <Button asChild variant="racing" size="lg" className="min-w-[200px]">
          <Link to="/products">
            Start Shopping
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-sora font-bold text-3xl md:text-4xl text-foreground mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, index) => {
            const itemKey = `${item.id}-${item.size}-${item.color}`;
            return (
              <div
                key={`${itemKey}-${index}`}
                className={`bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-elevation stagger-in ${
                  removingItemId === itemKey ? 'opacity-50 scale-95' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-sora font-semibold text-lg text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">Racing Collection</p>
                    </div>
                    
                    {(item.size || item.color) && (
                      <div className="flex gap-4 text-sm">
                        {item.size && (
                          <span className="bg-muted/50 px-2 py-1 rounded">Size: {item.size}</span>
                        )}
                        {item.color && (
                          <span className="bg-muted/50 px-2 py-1 rounded">Color: {item.color}</span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        ${item.price}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-muted/50 rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
                            className="h-8 w-8 p-0 hover:bg-primary/20"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          
                          <span className="w-12 text-center font-medium text-lg">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                            className="h-8 w-8 p-0 hover:bg-primary/20"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="h-10 w-10 p-0 text-destructive hover:bg-destructive/20 hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-8 sticky top-24 shadow-elevation">
            <h2 className="font-sora font-semibold text-xl mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Subtotal ({cartStore.getTotalItems()} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Shipping</span>
                <span className={`font-medium ${shipping === 0 ? "text-green-500" : ""}`}>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              {subtotal < 75 && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <p className="text-sm text-primary">
                    🚀 Add ${(75 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}
              
              <div className="flex justify-between text-lg">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-sora font-semibold text-xl">Total</span>
                  <span className="font-bold text-2xl text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button
                onClick={handleCheckout}
                variant="racing"
                size="lg"
                className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-red-glow transform hover:scale-105"
                disabled={isLoading}
              >
                <CreditCard className="w-6 h-6 mr-3" />
                {isLoading ? "Processing..." : "Secure Checkout"}
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full h-12">
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure payment powered by industry-leading encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;