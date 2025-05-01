import { createFileRoute, Outlet } from "@tanstack/react-router";
import MainLayout from "@/layouts/main-layout";
import { AuthProvider } from "@/lib/auth-context";
import { ThemeProvider } from "@/lib/theme-context";
import { SocketProvider } from "@/lib/socket-context";
import { NotificationProvider } from "@/lib/notification-context";

export const Route = createFileRoute("/_app")({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <AuthProvider>
        <SocketProvider>
          <NotificationProvider>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </NotificationProvider>
        </SocketProvider>
      </AuthProvider>
    </ThemeProvider>
  ),
});
