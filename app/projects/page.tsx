import FetchProjects from "@/components/FetchProjects";
import { Metadata } from "next";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <section className="block-space narrow-container">
      <h2 className="mb-6">Projects</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <FetchProjects />
      </Suspense>
    </section>
  );
};

export default page;

export async function generateMetadata({}: {}): Promise<Metadata> {
  return {
    title: "Projects",
    description: "Learn about my projects",
  };
}
