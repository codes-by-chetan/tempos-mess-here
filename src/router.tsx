import { Router } from "@tanstack/react-router";

// Import routes
import { routeTree } from "./routeTree.gen";

// Create and export the router
export const router = new Router({ routeTree });

// Register the router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
