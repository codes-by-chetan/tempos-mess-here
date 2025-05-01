import React from "react";
import { Toaster } from "@/components/ui/toaster";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      {children}
      <Toaster />
    </div>
  );
}
