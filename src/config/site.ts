export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Suggest.me",
  description: "Social Media Recommendation Platform",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "My Suggestions",
      href: "/my-suggestions",
    },
    {
      title: "My Watchlist",
      href: "/my-watchlist",
    },
    {
      title: "Suggested to Me",
      href: "/suggested-to-me",
    },
    {
      title: "Explore",
      href: "/explore/trending",
    },
  ],
  links: {
    github: "https://github.com/satnaing/shadcn-admin",
    docs: "https://ui.shadcn.com",
  },
};
