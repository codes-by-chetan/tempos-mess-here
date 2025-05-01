import { createFileRoute } from "@tanstack/react-router";
import EditProfile from "@/pages/edit-profile";

export const Route = createFileRoute("/_app/edit-profile")({
  component: EditProfile,
});
