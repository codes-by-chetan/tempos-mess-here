import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createRootRoute({
  component: () => (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      }
    >
      <Outlet />
    </Suspense>
  ),
});
