import FetchGallery from "@/components/FetchGallery";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { Camera } from "lucide-react";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section>
      <div className="block-space narrow-container">
        <h2 className="text-center">Photos</h2>
      </div>
      <div>
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
          <FetchGallery />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
