import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "://leahhanson.co.uk",
      lastModified: new Date(),
    },
    {
      url: "https://leahhanson.co.uk/about",
      lastModified: new Date(),
    },
    {
      url: "https://leahhanson.co.uk/services",
      lastModified: new Date(),
    },
    {
      url: "https://leahhanson.co.uk/contact",
      lastModified: new Date(),
    },
  ];
}