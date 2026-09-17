import type { MetadataRoute } from "next";

const siteUrl = "https://www.nuriddin.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/experience", priority: 0.9 },
    { path: "/skills", priority: 0.8 },
    { path: "/projects", priority: 0.9 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
