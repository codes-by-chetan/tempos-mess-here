import { createFileRoute } from "@tanstack/react-router";
import MySuggestions from "@/pages/my-suggestions";

export const Route = createFileRoute("/_app/my-suggestions")({
  component: MySuggestions,
});
