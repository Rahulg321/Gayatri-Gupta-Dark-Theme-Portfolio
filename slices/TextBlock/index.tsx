import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
    >
      <div className="prose dark:prose-invert">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default TextBlock;
