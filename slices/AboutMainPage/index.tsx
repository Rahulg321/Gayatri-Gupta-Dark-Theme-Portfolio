import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutMainPage`.
 */
export type AboutMainPageProps =
  SliceComponentProps<Content.AboutMainPageSlice>;

/**
 * Component for "AboutMainPage" Slices.
 */
const AboutMainPage = ({ slice }: AboutMainPageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space narrow-container"
    >
      <div className="space-y-4">
        <h2>{slice.primary.heading}</h2>
        <div className="prose dark:prose-invert">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default AboutMainPage;
