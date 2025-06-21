import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignUp = () => {
    setIsLoading(true);
    
    // Simulate Google sign-up API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Google Sign Up Successful",
        description: "Welcome to Luma!",
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-20 flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Create an Account</h1>
              <p className="text-gray-600 mt-2">Join Luma and unlock the full experience.</p>
            </div>
            
            <div className="py-8">
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 py-6"
                onClick={handleGoogleSignUp}
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                  <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" />
                  <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" />
                  <path fill="#FBBC05" d="M5.277 14.268a7.102 7.102 0 0 1-.01-4.523L1.24 6.65a11.934 11.934 0 0 0 0 10.682l4.037-3.064Z" />
                </svg>
                <span className="text-base">Sign up with Google</span>
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-500">
                By signing up, you agree to our <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register; 