import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Mail } from "lucide-react";
import Link from "next/link";

/**
 * Props for `ColumnHeadingButton`.
 */
export type ColumnHeadingButtonProps =
  SliceComponentProps<Content.ColumnHeadingButtonSlice>;

/**
 * Component for "ColumnHeadingButton" Slices.
 */
const ColumnHeadingButton = ({
  slice,
}: ColumnHeadingButtonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space xl-narrow-container border-2 rounded-lg p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2>My Career Highlights</h2>
        </div>
        <div>
          <p className="text-muted-foreground">
            Dive into my latest legal projects and stay updated with insightful
            blog posts.
          </p>
          <div className="flex flex-col items-center lg:flex-row gap-4 mt-4">
            <Link href="/projects" className="w-full">
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Visit my Projects
              </Button>
            </Link>
            <Button asChild variant={"secondary"} className="w-full">
              <Link href="/blogs">Read my Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnHeadingButton;
