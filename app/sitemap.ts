import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://YOURDOMAIN.CO.UK",
      lastModified: new Date(),
    },
    {
      url: "https://YOURDOMAIN.CO.UK/about",
      lastModified: new Date(),
    },
    {
      url: "https://YOURDOMAIN.CO.UK/services",
      lastModified: new Date(),
    },
    {
      url: "https://YOURDOMAIN.CO.UK/contact",
      lastModified: new Date(),
    },
  ];
}