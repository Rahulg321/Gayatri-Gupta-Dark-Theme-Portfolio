import CategoryList from "@/components/CategoryList";
import FetchBlogs from "@/components/FetchBlogs";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import React, { Suspense } from "react";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    tag?: string;
  };
}) => {
  const client = createClient();
  const categories = await client.getAllByType("category");
  const tag = searchParams?.tag || "all";
  return (
    <section className="block-space big-container">
      <div className="flex flex-col  gap-4 md:flex-row md:justify-between">
        <h1>Blogs</h1>

        <CategoryList post={categories} />
      </div>
      <Suspense
        fallback={
          <div className="space-y-4">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        }
      >
        <FetchBlogs tag={tag} />
      </Suspense>
    </section>
  );
};

export default page;

export async function generateMetadata({}: {}): Promise<Metadata> {
  return {
    title: "Blogs",
    description: "Read my blogs.",
  };
}
