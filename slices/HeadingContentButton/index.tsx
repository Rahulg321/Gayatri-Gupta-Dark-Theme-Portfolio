import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadingContentButton`.
 */
export type HeadingContentButtonProps =
  SliceComponentProps<Content.HeadingContentButtonSlice>;

/**
 * Component for "HeadingContentButton" Slices.
 */
const HeadingContentButton = ({
  slice,
}: HeadingContentButtonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space narrow-container"
    >
      <div className="text-center">
        <h3>{slice.primary.heading}</h3>
        <p className="text-muted-foreground mb-4">{slice.primary.tagline}</p>
        <Button>{slice.primary.button_label}</Button>
      </div>
    </section>
  );
};

export default HeadingContentButton;
