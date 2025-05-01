import { createFileRoute } from "@tanstack/react-router";
import MySuggestions from "../pages/my-suggestions";

export const Route = createFileRoute("/my-suggestions")({
  component: MySuggestions,
});
