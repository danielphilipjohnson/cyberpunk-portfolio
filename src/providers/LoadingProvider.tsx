"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  hasBootedBefore: boolean;
  triggerReboot: () => void;
  completeBootSequence: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

interface LoadingProviderProps {
  children: React.ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasBootedBefore, setHasBootedBefore] = useState(false);

  useEffect(() => {
    // Check if user has visited before (in this session)
    const hasVisitedBefore = sessionStorage.getItem('cyberpunk-portfolio-booted');
    
    if (hasVisitedBefore) {
      setHasBootedBefore(true);
      setIsLoading(false);
    }
  }, []);

  const triggerReboot = () => {
    // Clear session storage
    sessionStorage.removeItem('cyberpunk-portfolio-booted');
    // Reset states to trigger reboot
    setHasBootedBefore(false);
    setIsLoading(true);
  };
  
  const completeBootSequence = () => {
    // Mark boot sequence as complete
    sessionStorage.setItem('cyberpunk-portfolio-booted', 'true');
    setHasBootedBefore(true);
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider 
      value={{ 
        isLoading, 
        hasBootedBefore,
        triggerReboot,
        completeBootSequence
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

// Export handleBootComplete for use with the boot sequence component
export { LoadingProvider as default };

// Hook to handle boot completion
export function useBootComplete() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasBootedBefore, setHasBootedBefore] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem('cyberpunk-portfolio-booted');
    if (hasVisitedBefore) {
      setHasBootedBefore(true);
      setIsLoading(false);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('cyberpunk-portfolio-booted', 'true');
    setHasBootedBefore(true);
    setIsLoading(false);
  };

  return {
    isLoading: isLoading && !hasBootedBefore,
    hasBootedBefore,
    handleBootComplete
  };
}
