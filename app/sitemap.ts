import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

const domain = "https://nooobtimex.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${domain}/posts/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${domain}/skill`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/project`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...postUrls,
  ];
}
