import { Content } from "@prismicio/client";
import React from "react";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div>
      <h1>{post.data.title}</h1>
    </div>
  );
};

export default BlogCard;
