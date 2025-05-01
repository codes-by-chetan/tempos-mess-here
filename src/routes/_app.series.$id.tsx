import { createFileRoute } from "@tanstack/react-router";
import ContentDetailsPage from "@/pages/ContentDetailsPage";

export const Route = createFileRoute("/_app/series/$id")({
  component: ContentDetailsPage,
});
