import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  success?: boolean;
  loading?: boolean;
}

const EnhancedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, loading, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-ring placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            error 
              ? "border-destructive focus:border-destructive" 
              : success 
                ? "border-green-500 focus:border-green-500"
                : "border-input focus:border-primary",
            className
          )}
          ref={ref}
          {...props}
        />
        
        {/* Status Icons */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          {loading && (
            <div className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          )}
          {error && !loading && (
            <AlertCircle className="w-4 h-4 text-destructive" />
          )}
          {success && !error && !loading && (
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          )}
        </div>
        
        {/* Error Message */}
        {error && (
          <p className="text-sm text-destructive mt-1 animate-in slide-in-from-left-2">
            {error}
          </p>
        )}
      </div>
    );
  }
);

EnhancedInput.displayName = "EnhancedInput";

export { EnhancedInput };