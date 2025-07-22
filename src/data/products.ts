export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Velocity Racing Tee",
    price: 45,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    category: "Tees",
    description: "Premium cotton racing tee with velocity-inspired graphics",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Red", "White"]
  },
  {
    id: "2",
    name: "Circuit Breaker Tee",
    price: 42,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop",
    category: "Tees",
    description: "Bold circuit-inspired design for the modern racer",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"]
  },
  {
    id: "3",
    name: "Apex Performance Tee",
    price: 48,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
    category: "Tees",
    description: "High-performance fabric with moisture-wicking technology",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Red", "Carbon Grey"]
  },
  {
    id: "4",
    name: "Grid Position Tee",
    price: 44,
    image: "https://images.unsplash.com/photo-1551312182-15da3c59b5f6?w=600&h=600&fit=crop",
    category: "Tees",
    description: "Starting grid inspired streetwear essential",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Racing Red"]
  },
  {
    id: "5",
    name: "Podium Champion Tee",
    price: 50,
    image: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=600&h=600&fit=crop",
    category: "Tees",
    description: "Championship-worthy design for winners",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Gold", "Black", "Silver"]
  },
  {
    id: "6",
    name: "Throttle Theory Classic",
    price: 46,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
    category: "Tees",
    description: "The original Throttle Theory signature tee",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red"]
  },
  {
    id: "7",
    name: "Speed Demon Tee",
    price: 47,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=600&fit=crop",
    category: "Tees",
    description: "For those who live life in the fast lane",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Neon Green", "Electric Blue"]
  },
  {
    id: "8",
    name: "Track Master Tee",
    price: 43,
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&h=600&fit=crop",
    category: "Tees",
    description: "Master the track, dominate the street",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Red", "White"]
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return products;
  
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.description?.toLowerCase().includes(lowercaseQuery)
  );
};