import { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

export default async function sitemap() {
  const client = createClient();
  const baseUrl = "https://gayatrilawoffices.in/";

  const blogposts = await client.getAllByType("blogpost");
  const projects = await client.getAllByType("project");

  const blogpostsURLS =
    blogposts.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.uid}`,
      lastModified: blog.last_publication_date,
    })) ?? [];

  const projectURLS =
    projects.map((page) => ({
      url: `${baseUrl}/practice-areas/${page.uid}`,
      lastModified: page.last_publication_date,
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/photos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogpostsURLS,
    ...projectURLS,
  ];
}
