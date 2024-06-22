import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gayatri Law Offices",
    short_name: "Gayatri Law Offices",
    description:
      "Advocate Gayatri Gupta: Skilled in Paralegal Services and Contract Management, Serving US and Canadian Clients with Precision and Efficiency. Specializing in Legal Research, Documentation, and Compliance.",
    start_url: "/home",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
