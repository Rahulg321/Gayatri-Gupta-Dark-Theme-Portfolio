import { components } from "@/slices";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import React from "react";

const ContentBody = ({ page }: { page: Content.BlogpostDocument }) => {
  return (
    <article className="block-space narrow-container">
      <h1 className="mb-8">{page.data.title}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </article>
  );
};

export default ContentBody;
