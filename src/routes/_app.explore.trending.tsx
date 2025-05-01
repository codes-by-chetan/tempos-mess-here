import { createFileRoute } from "@tanstack/react-router";
import Trending from "@/pages/explore/Trending";

export const Route = createFileRoute("/_app/explore/trending")({
  component: Trending,
});
