import { createFileRoute } from "@tanstack/react-router";
import MyWatchlist from "../pages/my-watchlist";

export const Route = createFileRoute("/my-watchlist")({
  component: MyWatchlist,
});
