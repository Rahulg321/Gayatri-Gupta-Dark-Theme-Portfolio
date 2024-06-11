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
  //   const categories = await client.getAllByType("category");
  const tag = searchParams?.tag || "all";
  return (
    <div>
      <h1>Blogs</h1>

      <CategoryList />
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
    </div>
  );
};

export default page;

export async function generateMetadata({}: {}): Promise<Metadata> {
  return {
    title: "Blogs",
    description: "Read my blogs.",
  };
}