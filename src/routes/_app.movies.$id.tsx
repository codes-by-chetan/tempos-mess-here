import { createFileRoute } from "@tanstack/react-router";
import ContentDetailsPage from "@/pages/ContentDetailsPage";

export const Route = createFileRoute("/_app/movies/$id")({
  component: ContentDetailsPage,
});
