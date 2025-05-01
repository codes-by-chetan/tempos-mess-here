import { createFileRoute } from "@tanstack/react-router";
import Recommended from "@/pages/explore/Recommended";

export const Route = createFileRoute("/_app/explore/recommended")({
  component: Recommended,
});
