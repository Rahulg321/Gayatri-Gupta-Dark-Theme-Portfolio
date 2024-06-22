import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Mail } from "lucide-react";

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
          <h1>{slice.primary.heading}</h1>
        </div>
        <div>
          <p className="text-muted-foreground">{slice.primary.tagline}</p>
          <div className="flex flex-col items-center lg:flex-row gap-4 mt-4">
            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" /> {slice.primary.iconbuttonlabel}
            </Button>

            <Button variant={"secondary"} className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnHeadingButton;
