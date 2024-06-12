import FetchProjects from "@/components/FetchProjects";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <section className="block-space narrow-container">
      <h2 className="mb-6">Projects</h2>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        }
      >
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
