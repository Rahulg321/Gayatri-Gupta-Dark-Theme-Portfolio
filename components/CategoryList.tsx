"use client";

import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryList = ({ post }: { post: Content.CategoryDocument[] }) => {
  const client = createClient();
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <Select
        onValueChange={(value) =>
          router.push(pathname + "?" + createQueryString("tag", value))
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"all"}>All</SelectItem>
          {post.map((category) => (
            <SelectItem key={category.uid} value={category.uid}>
              {category.data.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryList;
