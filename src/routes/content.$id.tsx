import { createFileRoute } from "@tanstack/react-router";
import ContentDetailsPage from "../pages/ContentDetailsPage";

export const Route = createFileRoute("/content/$id")({
  component: ContentDetailsPage,
});
