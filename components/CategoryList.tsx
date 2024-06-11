"use client";

import { createClient } from "@/prismicio";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const CategoryList = async () => {
  const client = createClient();
  const categories = await client.getAllByType("category");
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
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
