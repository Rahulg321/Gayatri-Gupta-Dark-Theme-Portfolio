import { createClient } from "@/prismicio";
import React from "react";
import * as prismic from "@prismicio/client";
import BlogCard from "./BlogCard";

const FetchBlogs = async ({ tag }: { tag: string }) => {
  // await 3 sec
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  const client = createClient();
  let blogposts;

  if (tag === "all") {
    blogposts = await client.getAllByType("blogpost");
  } else {
    const category = await client.getByUID("category", tag);
    blogposts = await client.getAllByType("blogpost", {
      filters: [
        prismic.filter.at("my.blogpost.categories.category", category.id),
      ],
    });
  }

  if (blogposts.length === 0) {
    return <div>No blog posts found.</div>;
  }
  return (
    <div className="blog-index">
      {blogposts.map((e) => {
        return <BlogCard post={e} key={e.id} />;
      })}
    </div>
  );
};

export default FetchBlogs;
