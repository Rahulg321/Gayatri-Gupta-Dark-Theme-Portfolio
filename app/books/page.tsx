import FetchBooks from "@/components/FetchBooks";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section className="block-space">
      <div className="text-center mb-4 md:mb-8">
        <h2 className="">Books I have read</h2>
      </div>
      <div className="big-container">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          }
        >
          <FetchBooks />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
