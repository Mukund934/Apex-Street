import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      toast({
        title: "OTP Sent!",
        description: `We've sent a verification code to ${formData.email}`,
      });
    }, 1500);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate OTP verification (for demo, any 6-digit code works)
    setTimeout(() => {
      if (formData.otp.length === 6) {
        setIsLoading(false);
        setStep('reset');
        toast({
          title: "OTP Verified!",
          description: "You can now set a new password.",
        });
      } else {
        setIsLoading(false);
        toast({
          title: "Invalid OTP",
          description: "Please enter a valid 6-digit code.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate password reset
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Password Reset Successful!",
        description: "Your password has been updated. You can now sign in.",
      });
      // In a real app, redirect to login
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
            <Key className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="font-sora font-bold text-3xl text-foreground race-in">
            {step === 'email' && 'Forgot Password?'}
            {step === 'otp' && 'Enter Verification Code'}
            {step === 'reset' && 'Reset Password'}
          </h1>
          <p className="text-muted-foreground mt-2 stagger-in">
            {step === 'email' && "We'll send you a code to reset your password"}
            {step === 'otp' && `We've sent a 6-digit code to ${formData.email}`}
            {step === 'reset' && "Enter your new password below"}
          </p>
        </div>

        {/* Email Step */}
        {step === 'email' && (
          <form onSubmit={handleEmailSubmit} className="space-y-6 stagger-in">
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="racing"
              size="lg"
              className="w-full h-12 text-lg font-semibold shadow-lg hover:shadow-red-glow transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Sending Code..." : "Send Verification Code"}
            </Button>
          </form>
        )}

        {/* OTP Step */}
        {step === 'otp' && (
          <form onSubmit={handleOtpSubmit} className="space-y-6 stagger-in">
            <div>
              <Label htmlFor="otp" className="text-sm font-medium">Verification Code</Label>
              <Input
                id="otp"
                name="otp"
                type="text"
                value={formData.otp}
                onChange={handleInputChange}
                placeholder="123456"
                className="text-center text-2xl tracking-widest h-16 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300"
                maxLength={6}
                required
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Enter the 6-digit code we sent to your email
              </p>
            </div>

            <Button
              type="submit"
              variant="racing"
              size="lg"
              className="w-full h-12 text-lg font-semibold shadow-lg hover:shadow-red-glow transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep('email')}
                className="text-sm text-primary hover:underline transition-colors duration-200"
              >
                Didn't receive code? Try a different email
              </button>
            </div>
          </form>
        )}

        {/* Password Reset Step */}
        {step === 'reset' && (
          <form onSubmit={handlePasswordReset} className="space-y-6 stagger-in">
            <div className="space-y-4">
              <div>
                <Label htmlFor="newPassword" className="text-sm font-medium">New Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="racing"
              size="lg"
              className="w-full h-12 text-lg font-semibold shadow-lg hover:shadow-red-glow transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Updating Password..." : "Update Password"}
            </Button>
          </form>
        )}

        {/* Back to Login */}
        <div className="text-center">
          <Button asChild variant="ghost">
            <Link to="/login">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;