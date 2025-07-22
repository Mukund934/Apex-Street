export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

// Simple cart state management (in a real app, you'd use Context/Redux/Zustand)
class CartStore {
  private items: CartItem[] = [
    // Mock items for demonstration
    {
      id: "1",
      name: "Velocity Racing Tee",
      price: 45,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      quantity: 2,
      size: "M",
      color: "Black"
    },
    {
      id: "3",
      name: "Apex Performance Tee",
      price: 48,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",
      quantity: 1,
      size: "L",
      color: "Red"
    }
  ];

  getItems(): CartItem[] {
    return [...this.items];
  }

  addItem(item: Omit<CartItem, 'quantity'> & { quantity?: number }): void {
    const existingItem = this.items.find(i => 
      i.id === item.id && i.size === item.size && i.color === item.color
    );

    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      this.items.push({ ...item, quantity: item.quantity || 1 });
    }
  }

  updateQuantity(id: string, quantity: number, size?: string, color?: string): void {
    const item = this.items.find(i => 
      i.id === id && i.size === size && i.color === color
    );
    
    if (item) {
      if (quantity <= 0) {
        this.removeItem(id, size, color);
      } else {
        item.quantity = quantity;
      }
    }
  }

  removeItem(id: string, size?: string, color?: string): void {
    this.items = this.items.filter(item => 
      !(item.id === id && item.size === size && item.color === color)
    );
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clearCart(): void {
    this.items = [];
  }
}

export const cartStore = new CartStore();