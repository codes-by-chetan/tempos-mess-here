import { createFileRoute } from "@tanstack/react-router";
import ContentDetailsPage from "../pages/ContentDetailsPage";

export const Route = createFileRoute("/books/$id")({
  component: ContentDetailsPage,
});
