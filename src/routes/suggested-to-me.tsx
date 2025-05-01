import { createFileRoute } from "@tanstack/react-router";
import SuggestedToMe from "../pages/suggested-to-me";

export const Route = createFileRoute("/suggested-to-me")({
  component: SuggestedToMe,
});
