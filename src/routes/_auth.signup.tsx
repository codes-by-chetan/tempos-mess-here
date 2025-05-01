import { createFileRoute } from "@tanstack/react-router";
import Signup from "@/pages/auth/signup";

export const Route = createFileRoute("/_auth/signup")({
  component: Signup,
});
