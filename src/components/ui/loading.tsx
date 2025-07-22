import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "race" | "skeleton";
}

export const Loading = ({ className, size = "md", variant = "spinner" }: LoadingProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  if (variant === "race") {
    return (
      <div className={cn("relative w-full h-1 bg-muted rounded-full overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-primary animate-[loading-race_1.5s_ease-in-out_infinite] rounded-full" />
      </div>
    );
  }

  if (variant === "skeleton") {
    return (
      <div className={cn("skeleton rounded", sizeClasses[size], className)} />
    );
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn(
        "animate-spin rounded-full border-2 border-primary/20 border-t-primary",
        sizeClasses[size]
      )} />
    </div>
  );
};

interface LoadingScreenProps {
  className?: string;
}

export const LoadingScreen = ({ className }: LoadingScreenProps) => (
  <div className={cn(
    "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center",
    className
  )}>
    <div className="text-center space-y-4">
      <div className="w-16 h-16 mx-auto relative">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-r-accent animate-spin animate-reverse" />
      </div>
      <div className="space-y-2">
        <h3 className="font-sora font-semibold text-lg">Throttle Theory</h3>
        <p className="text-muted-foreground text-sm">Loading at racing speed...</p>
      </div>
    </div>
  </div>
);