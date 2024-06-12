import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-[50px] md:h-[100px] lg:md:h-[130px] bg-muted rounded-lg" />
    </div>
  );
};

export default ProjectCardSkeleton;
