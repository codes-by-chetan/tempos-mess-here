import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Toaster />
    </div>
  );
}
