import FetchGallery from "@/components/FetchGallery";
import { Camera } from "lucide-react";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section>
      <div className="block-space narrow-container">
        <h2 className="text-center">Photos</h2>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <FetchGallery />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
