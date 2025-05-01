import { createFileRoute } from "@tanstack/react-router";
import FriendActivity from "@/pages/explore/FriendActivity";

export const Route = createFileRoute("/_app/explore/friend-activity")({
  component: FriendActivity,
});
