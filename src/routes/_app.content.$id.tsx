import { createFileRoute } from "@tanstack/react-router";
import ContentDetailsPage from "@/pages/ContentDetailsPage";

export const Route = createFileRoute("/_app/content/$id")({
  component: ContentDetailsPage,
});
