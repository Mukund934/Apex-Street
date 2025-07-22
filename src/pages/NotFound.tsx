import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">🏁</div>
        <h1 className="font-sora font-bold text-6xl text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Race Track Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Looks like this page took a wrong turn at the pit stop.
        </p>
        <div className="space-y-4">
          <Button asChild variant="racing" size="lg">
            <a href="/">
              Return to Home Track
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/products">
              View All Products
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
