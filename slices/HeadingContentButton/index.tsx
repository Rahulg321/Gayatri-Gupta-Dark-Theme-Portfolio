import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

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
        <h3>
          Seeking a detail-oriented paralegal and a dedicated lawyer? Let's
          connect!
        </h3>
        <p className="text-muted-foreground mb-4">
          Navigating the legal system can be overwhelming. As your legal team,
          we provide clear guidance and unwavering support. Benefit from
          in-depth legal knowledge and exceptional support. Contact me today and
          let's explore the best path forward for your unique situation.
        </p>
        <Button asChild>
          <Link href="/contact">Connect Today</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeadingContentButton;
