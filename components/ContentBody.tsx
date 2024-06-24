import { components } from "@/slices";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import React from "react";

const ContentBody = ({
  page,
}: {
  page: Content.BlogpostDocument | Content.ProjectDocument;
}) => {
  return (
    <article className="block-space narrow-container">
      <SliceZone slices={page.data.slices} components={components} />
    </article>
  );
};

export default ContentBody;
